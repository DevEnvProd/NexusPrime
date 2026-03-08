import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F5009F]/10 via-black to-black opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content - Image Slider Placeholder */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video rounded-2xl overflow-hidden border border-[#F5009F]/30 shadow-[0_0_30px_rgba(245,0,159,0.2)] group"
        >
          <img 
            src="https://picsum.photos/seed/cyberpunk/800/450" 
            alt="Metaverse Preview" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {[0, 1, 2, 3].map((i) => (
              <div 
                key={i} 
                className={`w-3 h-3 rounded-full border border-white ${i === 0 ? 'bg-[#F5009F] border-[#F5009F]' : 'bg-transparent'}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Right Content - Text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase mb-6">
            Enter The <br />
            <span className="text-[#F5009F]">Metaverse</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            Learn, Earn, Play and Create in the Home of Crypto. 
            Download NexusPrime now and start your journey into the future of digital ownership.
          </p>
          
          <button className="bg-transparent border-2 border-[#F5009F] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#F5009F] transition-all duration-300 shadow-[0_0_20px_rgba(245,0,159,0.4)] hover:shadow-[0_0_40px_rgba(245,0,159,0.6)]">
            Download
          </button>
        </motion.div>
      </div>
    </section>
  );
}
