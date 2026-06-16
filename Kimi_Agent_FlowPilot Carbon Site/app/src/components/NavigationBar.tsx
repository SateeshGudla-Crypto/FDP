import { useState, useEffect } from 'react';
import { Send, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContactModal } from './ContactModal';
import { useScrollDirection } from '@/hooks/useScrollDirection';

const navLinks = [
  { label: 'Product', href: '#solution' },
  { label: 'Features', href: '#features' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Customers', href: '#testimonials' },
  { label: 'Resources', href: '#faq' },
];

export default function NavigationBar() {
  const { isScrolled } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open } = useContactModal();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-shadow duration-300"
      style={{
        backgroundColor: 'rgba(17, 19, 24, 0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-color)',
        boxShadow: isScrolled ? '0 2px 8px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div className="max-w-content w-full mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2"
        >
          <Send size={18} className="-rotate-45" style={{ color: 'var(--accent)' }} />
          <span className="font-mono text-label uppercase tracking-wider">
            <span style={{ color: 'var(--text-primary)' }}>Flow</span>
            <span style={{ color: 'var(--accent)' }}>Pilot</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="nav-link text-[15px] font-medium transition-colors duration-150"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); open(); }}
            className="nav-link text-[15px] font-medium transition-colors duration-150"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            Contact
          </a>
          <button
            onClick={open}
            className="px-5 py-2.5 rounded-md font-semibold text-[15px] transition-all duration-150 hover:-translate-y-px active:translate-y-0"
            style={{
              backgroundColor: 'var(--accent)',
              color: '#fff',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
          >
            Book Demo
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2"
          style={{ color: 'var(--text-primary)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-16 left-0 right-0 overflow-hidden lg:hidden"
            style={{
              backgroundColor: 'rgba(17, 19, 24, 0.98)',
              backdropFilter: 'blur(12px)',
              borderBottom: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--accent)',
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-medium py-2 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t pt-4 mt-2" style={{ borderColor: 'var(--border-color)' }}>
                <button
                  onClick={() => { setMobileOpen(false); open(); }}
                  className="w-full px-5 py-3 rounded-md font-semibold text-[15px] transition-all"
                  style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
                >
                  Book Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
