import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const WORDS = ["CREATE", "LEARN", "EARN", "PLAY"];

export default function InfoSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[#F5009F] blur-[100px] opacity-20" />
            <img
              src="https://picsum.photos/seed/vruser/600/600"
              alt="VR User"
              className="relative z-10 rounded-2xl w-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-8 leading-tight">
              What is <br />
              <span className="text-[#F5009F]">Playlandverse?</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Playlandverse is the one-stop shop for everything Cryptocurrency and NFTs. 
              Learn the basics or study advanced topics, earn money, play games, 
              make connections, and much more in an immersive virtual environment!
            </p>

            <div className="mt-12 relative">
               <img 
                src="https://picsum.photos/seed/laptop/800/500" 
                alt="Laptop View" 
                className="rounded-xl border border-white/10 shadow-2xl"
               />
            </div>
          </motion.div>
        </div>

        {/* Big Text Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center h-[20vw] flex items-center justify-center relative"
        >
          <AnimatePresence mode="wait">
            <motion.h2 
              key={WORDS[index]}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="text-[15vw] font-black text-[#F5009F] leading-none tracking-tighter uppercase select-none absolute w-full"
            >
              {WORDS[index]}
            </motion.h2>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
