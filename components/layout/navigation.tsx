'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAVIGATION_LINKS } from '@/lib/constants';
import { scrollToSection } from '@/lib/utils';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ['hero', 'smiles', 'products', 'sustainability', 'company', 'newsletter'];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-black/95 backdrop-blur-lg shadow-lg border-b border-white/10'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-coke-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <span className="font-primary text-2xl font-bold text-white hidden sm:block">
                  Coca-Cola
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {NAVIGATION_LINKS.map((link, index) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      'relative font-secondary font-semibold text-sm uppercase tracking-wide transition-colors',
                      isActive ? 'text-coke-red' : 'text-white hover:text-coke-red'
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-coke-red"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="btn-primary text-sm py-2 px-6"
                onClick={() => scrollToSection('newsletter')}
              >
                Subscribe
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-coke-red transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-black border-l border-white/10 z-50 md:hidden"
            >
              <div className="flex flex-col h-full p-8 pt-24">
                {/* Mobile Nav Links */}
                <nav className="flex flex-col gap-6 flex-1">
                  {NAVIGATION_LINKS.map((link, index) => {
                    const sectionId = link.href.replace('#', '');
                    const isActive = activeSection === sectionId;

                    return (
                      <motion.button
                        key={link.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleNavClick(link.href)}
                        className={cn(
                          'text-left font-primary text-2xl font-bold transition-colors py-2',
                          isActive ? 'text-coke-red' : 'text-white hover:text-coke-red'
                        )}
                      >
                        {link.name}
                        {isActive && (
                          <motion.div
                            layoutId="activeMobileSection"
                            className="h-1 bg-coke-red mt-2 rounded-full"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </nav>

                {/* Mobile CTA */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="btn-primary w-full"
                  onClick={() => {
                    scrollToSection('newsletter');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Subscribe to Newsletter
                </motion.button>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-4 justify-center mt-8 pt-8 border-t border-white/10"
                >
                  {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                    <a
                      key={social}
                      href={`https://${social.toLowerCase()}.com/cocacola`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-coke-red transition-colors"
                    >
                      <span className="text-white text-xs font-bold">
                        {social[0]}
                      </span>
                    </a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}