import { motion } from 'motion/react';
import { ArrowRight, Play, Instagram } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[60%] h-full opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-dark to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop" 
          alt="Athlete Training" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted">Join the Top 1% in Fitness</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
              Turn Your <span className="text-primary">Potential</span> <br />
              Into <span className="text-white italic">Performance</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-xl">
              Tired of following generic influencers? We build elite bodies via scientific 
              protocol and aggressive accountability. No guesswork, just results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a 
                href="#booking" 
                className="group flex items-center gap-3 bg-white text-dark px-8 py-4 rounded-full font-bold uppercase transition-all hover:bg-primary hover:text-white"
              >
                Start My Transformation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                className="flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full font-bold uppercase hover:bg-white/5 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Play size={14} fill="white" />
                </div>
                View Success Stories
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-dark overflow-hidden bg-surface">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Client" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest leading-none">Joined by 2,400+ Results</p>
                <p className="text-xs text-muted mt-1 underline decoration-primary underline-offset-4">Read 520+ Five-Star Reviews</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
