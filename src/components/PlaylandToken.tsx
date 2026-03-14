import { Check, ExternalLink, Coins, Vote, TrendingUp, Lock } from "lucide-react";
import { motion } from "motion/react";

export default function PlaylandToken() {
  const utilities = [
    {
      title: "Purchase",
      desc: "Use $PLAY for all transactions within Playlandverse, including digital wearable NFTs, REPLAY (Real Estate), and ADPLAY (Advertising).",
      icon: Coins,
    },
    {
      title: "Govern",
      desc: "Use held $PLAY tokens to participate in the Playlandverse DAO and have a say on proposals raised, shaping the future of the metaverse.",
      icon: Vote,
    },
    {
      title: "Invest",
      desc: "Lock $PLAY tokens into staking pools and JOPES to support the network and earn passive income rewards.",
      icon: TrendingUp,
    },
    {
      title: "Access",
      desc: "Utilize $PLAY tokens to join exclusive live events, access VIP areas, and unlock unique content unavailable to non-holders.",
      icon: Lock,
    },
  ];

  const exchanges = [
    { name: "KuCoin", color: "text-[#23af91]" },
    { name: "Gate.io", color: "text-[#0d85da]" },
    { name: "OKX", color: "text-white" },
    { name: "QuickSwap", color: "text-[#44d7b6]" },
    { name: "Uniswap", color: "text-[#ff007a]" },
    { name: "PancakeSwap", color: "text-[#d1884f]" },
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tighter"
          >
            $<span className="text-[#F5009F]">PLAY</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-400 font-medium max-w-3xl mx-auto"
          >
            The Utility Token And Native Currency Of Playlandverse
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Visual */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-square lg:aspect-auto lg:h-full min-h-[400px]">
              <img 
                src="https://picsum.photos/seed/nexus_token_utility/800/800" 
                alt="Playlandverse Metaverse" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-4 mb-4">
                  <span className="px-3 py-1 bg-[#F5009F] text-white text-xs font-bold uppercase rounded-full">Multichain</span>
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase rounded-full">BSC</span>
                  <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold uppercase rounded-full">Polygon</span>
                  <span className="px-3 py-1 bg-blue-400 text-white text-xs font-bold uppercase rounded-full">Arbitrum</span>
                </div>
                <p className="text-white font-bold text-lg">Powering the Future of Virtual Reality</p>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8">
              <div className="prose prose-invert">
                <p className="text-gray-300 text-lg leading-relaxed">
                  The <strong className="text-white">$PLAY</strong> token is the Native currency of Playlandverse and serves as the utility token within the metaverse, facilitating all transactions. 
                  $PLAY is a multichain token, currently operating across Binance Smart Chain (BSC), Polygon and Arbitrum. 
                  Along with this, $PLAY is listed across tier 1 CEX's and a host of DEX's, bringing significant benefits to holders by enhancing accessibility, liquidity, and simplicity to the cryptocurrency ecosystem.
                </p>
              </div>

              <div className="space-y-6">
                {utilities.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 items-start group"
                  >
                    <div className="bg-white/5 p-3 rounded-lg border border-white/10 group-hover:border-[#F5009F] transition-colors shrink-0">
                      <item.icon className="text-[#F5009F]" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Exchanges Section */}
        <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-black uppercase mb-2">
            $PLAY is publicly listed
          </h3>
          <p className="text-gray-400 mb-12">Across a number of exchanges on multiple networks</p>

          <div className="flex flex-col items-center gap-12">
            {/* CoinMarketCap - Featured */}
            <div className="opacity-80 hover:opacity-100 transition-opacity">
               <span className="text-3xl font-bold flex items-center gap-2">
                 <span className="text-blue-500">Ⓜ</span> CoinMarketCap
               </span>
            </div>

            {/* Exchange Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-4xl mx-auto">
              {exchanges.map((ex, i) => (
                <div key={i} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <span className={`text-2xl font-black uppercase tracking-wider ${ex.color}`}>{ex.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <p className="text-xs text-gray-600 leading-relaxed">
            <strong className="text-gray-500">No Investment Advice:</strong> The information provided does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of this content as such. Playlandverse does not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
