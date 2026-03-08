import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";

const TABS = [
  { id: "jobe", label: "JOBE" },
  { id: "staking", label: "STAKING" },
];

export default function EarnSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tabParam === "staking" ? "staking" : "jobe");

  useEffect(() => {
    setActiveTab(tabParam === "staking" ? "staking" : "jobe");
  }, [tabParam]);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setSearchParams({ tab: id });
  };

  return (
    <section id="earn" className="py-12 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
            Earn with <span className="text-[#F5009F]">NexusPrime</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Join A JOBE Or Stake Your $NEXUS To Generate Passive Income
          </p>
        </div>

        {/* Tab Container */}
        <div className="max-w-5xl mx-auto">
          <div className="flex rounded-t-2xl overflow-hidden border-x border-t border-white/10">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex-1 py-4 font-black uppercase tracking-widest text-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#F5009F] text-white"
                    : "bg-[#111] text-gray-500 hover:text-white hover:bg-[#1a1a1a]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="bg-[#111] border border-white/10 rounded-b-2xl p-8 md:p-12 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "jobe" ? <JobeContent /> : <StakingContent />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function JobeContent() {
  const benefits = [
    "Contribute in increments of 4,800 $NEXUS, with no limit to the amount of increments that can be entered into available JOBES",
    "Earn rental rewards of 10% of $NEXUS entered into JOBES",
    "Earn rental rewards each month after being in JOBES for minimum of 15 days",
    "Join available JOBES or withdraw from JOBES at any time to suit your needs",
    "NEW JOBES opened regularly"
  ];

  return (
    <div>
      <p className="text-gray-300 text-lg leading-relaxed mb-12">
        Jointly Owned NexusPrime Enterprise (<span className="text-white font-bold">JOBE</span>) is a scheme designed to make NexusPrime NFTs affordable and accessible to all. 
        By joining a JOBE, individuals can collectively own and benefit from both RENEXUS and ADNEXUS, providing a cost-effective way to own land within NexusPrime.
      </p>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
          <img 
            src="https://picsum.photos/seed/jobe_crowd/800/500" 
            alt="JOBE Community" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[#F5009F]/10 mix-blend-overlay" />
        </div>

        <div className="space-y-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex gap-4 items-start">
              <Check className="text-[#F5009F] shrink-0 mt-1" />
              <p className="text-gray-300 text-sm md:text-base">{benefit}</p>
            </div>
          ))}
          
          <div className="pt-6">
            <button className="w-full md:w-auto px-12 py-4 rounded-full border border-[#F5009F] text-white font-bold uppercase tracking-widest hover:bg-[#F5009F] transition-all duration-300 shadow-[0_0_20px_rgba(245,0,159,0.2)] hover:shadow-[0_0_30px_rgba(245,0,159,0.4)]">
              Join a Jobe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StakingContent() {
  const benefits = [
    "Variable maturity periods available to suit all with no minimum or maximum caps",
    "Earn Rewards of up to 60% APY at the end of the lock-in period",
    "Mitigate short-term price fluctuations and provide stability to holdings",
    "Contribute to network security of the blockchain",
    "New Staking pools opened regularly"
  ];

  return (
    <div>
      <p className="text-gray-300 text-lg leading-relaxed mb-12">
        <span className="text-white font-bold">Staking</span> verifies cryptocurrency transactions and allows participants to earn passive income from $NEXUS that is held. 
        Lock your $NEXUS into open staking pools for fixed periods in order to help support network operations and earn rewards from doing so, known as APY.
      </p>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
          <img 
            src="https://picsum.photos/seed/staking_vault/800/500" 
            alt="Staking Vault" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[#F5009F]/10 mix-blend-overlay" />
        </div>

        <div className="space-y-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex gap-4 items-start">
              <Check className="text-[#F5009F] shrink-0 mt-1" />
              <p className="text-gray-300 text-sm md:text-base">{benefit}</p>
            </div>
          ))}
          
          <div className="pt-6">
            <button className="w-full md:w-auto px-12 py-4 rounded-full border border-[#F5009F] text-white font-bold uppercase tracking-widest hover:bg-[#F5009F] transition-all duration-300 shadow-[0_0_20px_rgba(245,0,159,0.2)] hover:shadow-[0_0_30px_rgba(245,0,159,0.4)]">
              Join a Staking Pool
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
