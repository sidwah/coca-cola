'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAVIGATION_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import { scrollToSection } from '@/lib/utils';
// import type { SocialLink } from '@/types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-linear-to-b from-gray-900 to-black border-l border-white/10 z-50 md:hidden overflow-y-auto"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white hover:text-coke-red transition-colors"
              aria-label="Close menu"
            >
              <X size={28} />
            </motion.button>

            <div className="flex flex-col h-full p-8 pt-24">
              {/* Brand */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-coke-red rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">C</span>
                  </div>
                  <div>
                    <h3 className="font-primary text-xl font-bold text-white">
                      Coca-Cola
                    </h3>
                    <p className="text-gray-400 text-xs">Open Happiness</p>
                  </div>
                </div>
              </motion.div>

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
                      transition={{ delay: 0.15 + index * 0.05 }}
                      onClick={() => handleNavClick(link.href)}
                      className={cn(
                        'text-left font-primary text-2xl font-bold transition-colors py-2 relative',
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
                transition={{ delay: 0.4 }}
                className="btn-primary w-full"
                onClick={() => {
                  scrollToSection('newsletter');
                  onClose();
                }}
              >
                Subscribe to Newsletter
              </motion.button>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4 justify-center mt-8 pt-8 border-t border-white/10"
              >
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-coke-red transition-colors border border-white/10"
                  >
                    <span className="text-white text-xs font-bold">
                      {social.name[0]}
                    </span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Copyright */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center text-xs text-gray-500 mt-6"
              >
                © {new Date().getFullYear()} The Coca-Cola Company
              </motion.p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}