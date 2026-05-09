import { motion } from 'motion/react';
import { Instagram, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
      isScrolled ? "py-4 bg-dark/80 backdrop-blur-md border-b border-white/10" : "py-8 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="font-display font-bold text-xl uppercase tracking-tighter">A</span>
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter uppercase whitespace-nowrap">
            Aura <span className="text-primary font-black">Perf</span>
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-muted">
          <a href="#results" className="hover:text-white transition-colors">Results</a>
          <a href="#offer" className="hover:text-white transition-colors">The Protocol</a>
          <a href="#why" className="hover:text-white transition-colors">Why Aura</a>
          <a href="#booking" className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95">
            Book Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-dark border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
        >
          <a href="#results" onClick={() => setIsOpen(false)} className="text-xl font-bold uppercase">Results</a>
          <a href="#offer" onClick={() => setIsOpen(false)} className="text-xl font-bold uppercase">The Protocol</a>
          <a href="#why" onClick={() => setIsOpen(false)} className="text-xl font-bold uppercase">Why Aura</a>
          <a href="#booking" onClick={() => setIsOpen(false)} className="w-full py-4 bg-primary text-center rounded-xl font-bold uppercase text-white">
            Book Discovery Call
          </a>
        </motion.div>
      )}
    </nav>
  );
}
