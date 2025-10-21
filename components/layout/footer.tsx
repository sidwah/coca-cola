'use client';

import { FOOTER_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import type { FooterLink, SocialLink } from '@/types';
import { useState } from 'react';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <footer className="bg-gray-900 border-t-4 border-coke-red">
      {/* Newsletter Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-16 h-16 text-coke-red mx-auto mb-6" />
            <h2 className="font-primary text-5xl font-bold text-white mb-4">
              Stay Refreshed
            </h2>
            <p className="text-xl text-white mb-8">
              Get the latest news, offers, and updates delivered straight to your inbox.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-white text-black rounded-full focus:outline-none focus:ring-4 focus:ring-coke-red"
              />
              <button
                type="submit"
                disabled={isSubmitted}
                className="bg-coke-red hover:bg-coke-red-dark text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
              >
                {isSubmitted ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </form>

            {isSubmitted && (
              <p className="text-coke-red text-lg mt-4 font-bold">
                ✓ Thanks for subscribing! Check your inbox soon.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            {/* Company Links */}
            <div>
              <h4 className="text-coke-red font-bold text-lg uppercase mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.company.map((link: FooterLink) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white hover:text-coke-red transition-colors text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brands Links */}
            <div>
              <h4 className="text-coke-red font-bold text-lg uppercase mb-4">
                Brands
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.brands.map((link: FooterLink) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white hover:text-coke-red transition-colors text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sustainability Links */}
            <div>
              <h4 className="text-coke-red font-bold text-lg uppercase mb-4">
                Sustainability
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.sustainability.map((link: FooterLink) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white hover:text-coke-red transition-colors text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-coke-red font-bold text-lg uppercase mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.legal.map((link: FooterLink) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white hover:text-coke-red transition-colors text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16 pb-12 border-b-2 border-gray-800">
            {SOCIAL_LINKS.map((social: SocialLink) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-coke-red text-white hover:bg-coke-red-dark transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {Icon && <Icon size={24} />}
                </a>
              );
            })}
          </div>

          {/* Large Coca-Cola Logo */}
          <div className="text-center mb-12">
            <h3 className="font-primary text-7xl md:text-9xl font-bold text-gray-800 italic">
              Coca-Cola
            </h3>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400 border-t-2 border-gray-800 pt-8">
            <p className="text-base">
              © {currentYear} The Coca-Cola Company. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#privacy" className="hover:text-coke-red transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#terms" className="hover:text-coke-red transition-colors">
                Terms of Use
              </a>
              <span>•</span>
              <a href="#cookies" className="hover:text-coke-red transition-colors">
                Cookie Settings
              </a>
              <span>•</span>
              <a href="#sitemap" className="hover:text-coke-red transition-colors">
                Sitemap
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}