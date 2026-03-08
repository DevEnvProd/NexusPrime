import { motion } from "motion/react";
import { TrendingUp, Gamepad2, Vote, Store } from "lucide-react";

const FEATURES = [
  {
    title: "Earn",
    description: "Join a JOBE or stake your $NEXUS to generate passive income.",
    buttonText: "Earn Now",
    icon: TrendingUp,
    image: "https://picsum.photos/seed/crypto/600/400",
  },
  {
    title: "Play",
    description: "Create your own unique identity and enter the Home of Crypto.",
    buttonText: "Play Now",
    icon: Gamepad2,
    image: "https://picsum.photos/seed/gaming/600/400",
  },
  {
    title: "DAO",
    description: "Become a governor and have your say through NexusPrime's voting system.",
    buttonText: "Vote Now",
    icon: Vote,
    image: "https://picsum.photos/seed/vote/600/400",
  },
  {
    title: "NFT's",
    description: "Own revenue generating LAND or ASSET NFT's.",
    buttonText: "Purchase Now",
    icon: Store,
    image: "https://picsum.photos/seed/nft/600/400",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group rounded-3xl overflow-hidden aspect-[16/9] border border-white/10"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
                <div className="mb-4 text-white">
                  <feature.icon size={48} className="mx-auto mb-4 text-[#F5009F]" />
                  <h3 className="text-4xl font-black uppercase tracking-wide mb-2">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-8 max-w-md text-lg font-medium">
                  {feature.description}
                </p>

                <button className="bg-transparent border border-[#F5009F] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-[#F5009F] transition-all duration-300">
                  {feature.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
