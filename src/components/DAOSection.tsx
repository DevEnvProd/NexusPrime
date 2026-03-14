import { motion } from "motion/react";
import { Vote, Lock, AlertTriangle, TrendingUp } from "lucide-react";

export default function DAOSection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tighter"
          >
            Stake, Earn <span className="text-[#F5009F]">Make A Difference</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-400 font-medium max-w-4xl mx-auto"
          >
            Become A Governor And Have Your Say Through Playlandverse's Voting System
          </motion.p>
        </div>

        {/* Main Content Card */}
        <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12">
          
          {/* Intro Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">What is the Playlandverse DAO?</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              DAO stands for Decentralized Autonomous Organization. It's a system that allows <strong className="text-white">$PLAY</strong> token holders to vote on the direction 
              of Playlandverse. Anyone who holds $PLAY tokens can participate in the Playlandverse DAO and have a say on proposals raised.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl min-h-[300px]">
              <img 
                src="https://picsum.photos/seed/nexus_dao_voting/800/600" 
                alt="Playlandverse Voting Terminal" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Details */}
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Vote className="text-[#F5009F]" />
                  How do I get involved?
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  In order to vote on a proposal raised in the DAO, you must first own <span className="text-[#F5009F] font-bold">$PLAY tokens</span> on any of the supported blockchains.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <TrendingUp className="text-[#F5009F]" />
                  How does voting work?
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  To participate in voting, a proposal is initiated with multiple choice questions. Each $PLAY token represents a single vote, 
                  and the majority determines the outcome.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-12">
            <div className="flex gap-4 items-start mb-4">
              <Lock className="text-[#F5009F] shrink-0 mt-1" />
              <p className="text-gray-300 leading-relaxed">
                Voters are required to lock their $PLAY tokens for a specified period after voting. While users can withdraw their stake during the 
                voting period, a <span className="text-[#F5009F] font-bold">30% fine</span> is imposed on the tokens. The staked $PLAY remains locked in the contract for a designated period 
                after the voting period concludes. Voters receive APY (Annual Percentage Yield) as a reward during this period.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="px-12 py-4 rounded-full border border-[#F5009F] text-white font-bold uppercase tracking-widest hover:bg-[#F5009F] transition-all duration-300 shadow-[0_0_20px_rgba(245,0,159,0.2)] hover:shadow-[0_0_30px_rgba(245,0,159,0.4)]">
              Vote In DAO
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
