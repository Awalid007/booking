import { motion } from 'motion/react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { useState, useEffect } from 'react';
import { FAQS, BENEFITS } from '../constants';

export function Offer() {
  return (
    <section id="offer" className="py-24 border-y border-white/5">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
          The <span className="text-primary italic">Aura</span> Blueprint
        </h2>
        <p className="text-muted max-w-xl mx-auto">
          We don't do "workouts". We build protocols. A complete ecosystem to rewrite your potential.
        </p>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Metabolic Audit", price: "$499", desc: "Digital screening of your current performance, macros, and sleep." },
          { title: "Transformation", price: "$1,200", desc: "12-week intensive re-build focusing on fat loss or hypertrophy." },
          { title: "Elite Hybrid", price: "$1,500+", desc: "The pro-athlete experience. Strength + Endurance + Performance." },
          { title: "Custom Stack", price: "Custom", desc: "Concierge level support for high-stakes individuals & CEOs." }
        ].map((tier, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -10 }}
            className="p-8 rounded-[32px] border border-white/10 glass flex flex-col justify-between"
          >
            <div>
              <p className="font-display font-black text-2xl uppercase mb-2">{tier.title}</p>
              <p className="text-primary font-black text-xl mb-6">{tier.price}</p>
              <p className="text-sm text-muted mb-8">{tier.desc}</p>
            </div>
            <a href="#booking" className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-center text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
              Enquire
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section id="why" className="py-24 bg-dark">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {BENEFITS.map((b, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 rounded-[32px] bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <b.icon size={32} className="text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-display font-black text-2xl uppercase mb-4">{b.title}</h3>
            <p className="text-muted leading-relaxed">{b.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-display text-4xl md:text-5xl font-black uppercase text-center mb-16 tracking-tighter">
          Answering <span className="text-primary">Everything</span>
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold uppercase tracking-widest text-sm">{faq.question}</span>
                {openIdx === i ? <Minus size={20} className="text-primary" /> : <Plus size={20} />}
              </button>
              {openIdx === i && (
                <div className="p-6 pt-0 text-muted leading-relaxed text-sm animate-in fade-in slide-in-from-top-1">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-20 bg-surface border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="font-display font-bold text-sm uppercase tracking-tighter">A</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tighter uppercase">
                Aura <span className="text-primary font-black">Perf</span>
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Premium performance coaching for those who demand more from life. 
              Built on science, executed with discipline.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-16">
            <div>
              <p className="font-bold uppercase tracking-widest text-xs mb-6 text-white">Navigation</p>
              <ul className="space-y-4 text-sm text-muted font-medium">
                <li><a href="#results" className="hover:text-primary transition-colors uppercase tracking-widest text-[10px]">Results</a></li>
                <li><a href="#offer" className="hover:text-primary transition-colors uppercase tracking-widest text-[10px]">Offers</a></li>
                <li><a href="#booking" className="hover:text-primary transition-colors uppercase tracking-widest text-[10px]">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold uppercase tracking-widest text-xs mb-6 text-white">Legal</p>
              <ul className="space-y-4 text-sm text-muted font-medium">
                <li><a href="#" className="hover:text-primary transition-colors uppercase tracking-widest text-[10px]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors uppercase tracking-widest text-[10px]">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-muted/40">
          <p>© 2026 Aura Performance. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">TikTok</a>
            <a href="#" className="hover:text-primary transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-6 left-6 right-6 z-50 md:hidden"
    >
      <a 
        href="#booking"
        className="w-full bg-primary text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-2xl shadow-primary/40 flex items-center justify-center gap-2"
      >
        Book Now <ChevronDown size={16} />
      </a>
    </motion.div>
  );
}
