import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { smoothTransition } from '../../constants/data';

const NAV_LINKS_LEFT = [
  { label: 'Menu', icon: 'grid_view', href: '#' },
  { label: 'Products', href: '#', hasDropdown: true },
  { label: 'About', href: '#' },
];
const NAV_LINKS_RIGHT = [
  { label: 'Reviews', href: '#' },
  { label: 'Blog', href: '#' },
];
const ALL_LINKS = [...NAV_LINKS_LEFT, ...NAV_LINKS_RIGHT];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shadow the navbar slightly when page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  // Close mobile menu on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeMenu(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [closeMenu]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-[100] px-4 lg:px-8 py-6 pointer-events-none"
      >
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...smoothTransition, delay: 0.2 }}
          style={{ willChange: 'transform, opacity' }}
          className={`max-w-[1600px] mx-auto flex items-center justify-between bg-white px-6 py-3.5 rounded-full pointer-events-auto transition-shadow duration-500 ${
            scrolled ? 'shadow-xl shadow-slate-900/10' : 'shadow-lg shadow-slate-900/5'
          }`}
        >
          {/* Left nav — desktop */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-slate-900">
            <div className="flex items-center gap-1.5 cursor-pointer group">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">grid_view</span>
              <a className="hover:text-rose-500 transition-colors duration-300" href="#">Menu</a>
            </div>
            <span className="text-slate-200" aria-hidden="true">|</span>
            <div className="flex items-center gap-1 cursor-pointer group">
              <a className="hover:text-rose-500 transition-colors duration-300" href="#">Products</a>
              <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:translate-y-0.5 transition-transform duration-300" aria-hidden="true">expand_more</span>
            </div>
            <a className="hover:text-rose-500 transition-colors duration-300 ml-1" href="#">About</a>
          </nav>

          {/* Centered logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
            <a href="#" aria-label="Softcare Skin — home">
              <p className="text-xl font-black tracking-tighter text-slate-900 scale-y-110 select-none">SOFTCARE</p>
            </a>
          </div>

          {/* Right nav — desktop */}
          <div className="flex items-center gap-8">
            <nav aria-label="Secondary navigation" className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-slate-900">
              <a className="hover:text-rose-500 transition-colors duration-300" href="#">Reviews</a>
              <a className="hover:text-rose-500 transition-colors duration-300" href="#">Blog</a>
            </nav>
            <button
              className="hidden lg:block bg-rose-500 text-white px-8 py-2.5 rounded-full font-bold text-[13px] hover:bg-rose-600 active:scale-95 transition-all duration-300 shadow-md shadow-rose-500/20 hover:scale-105"
              aria-label="Shop Now"
            >
              Shop Now
            </button>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              className="flex lg:hidden flex-col items-center justify-center gap-[5px] w-8 h-8 rounded cursor-pointer"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsOpen((v) => !v)}
            >
              <span
                className={`block h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? 'w-5 rotate-45 translate-y-[6.5px]' : 'w-5'}`}
              />
              <span
                className={`block h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? 'w-5 opacity-0' : 'w-3.5'}`}
              />
              <span
                className={`block h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? 'w-5 -rotate-45 -translate-y-[6.5px]' : 'w-5'}`}
              />
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[98] bg-slate-950/50 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[99] w-[280px] bg-white flex flex-col pt-24 px-8 pb-10 overflow-y-auto lg:hidden"
            >
              <button
                onClick={closeMenu}
                className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined text-[22px] text-slate-700" aria-hidden="true">close</span>
              </button>

              <nav aria-label="Mobile navigation" className="flex flex-col gap-7">
                {ALL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[15px] font-medium text-slate-800 hover:text-rose-500 transition-colors duration-300 border-b border-slate-100 pb-5"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <button className="mt-auto bg-rose-500 text-white px-8 py-3 rounded-full font-bold text-[13px] hover:bg-rose-600 active:scale-95 transition-all duration-300 shadow-md shadow-rose-500/20">
                Shop Now
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
