import { motion } from 'motion/react';
import { Star, Instagram } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function SocialProof() {
  return (
    <section id="results" className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-gradient">
              Proof Over <br /> Promises
            </h2>
            <p className="text-muted text-lg">
              We've helped thousands of TikTok and Instagram followers ditch the "influencer fluff" 
              and build professional-grade physiques. Here is what they say.
            </p>
          </div>
          <div className="flex items-center gap-4 px-6 py-3 glass rounded-2xl">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} className="text-primary fill-primary" />)}
            </div>
            <span className="font-bold text-sm tracking-widest uppercase">Verified 4.9/5</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-white/90 text-lg leading-relaxed italic mb-8">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale" />
                <div>
                  <p className="font-bold uppercase tracking-widest text-xs">{t.name}</p>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Social Embed Showcase Area */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=400&auto=format&fit=crop"
          ].map((url, i) => (
            <div key={i} className="aspect-[4/5] rounded-2xl overflow-hidden relative group cursor-pointer">
              <img src={url} alt="Transformation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/0 transition-colors" />
              <Instagram className="absolute top-4 right-4 text-white opacity-50 group-hover:opacity-100 transition-opacity" size={20} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
