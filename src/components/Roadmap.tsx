import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Check, Smartphone, Globe, Gamepad2, Users, Layout, Zap, Trophy, Shirt } from "lucide-react";

const TABS = [
  { id: "overview", label: "ROADMAP OVERVIEW" },
  { id: "released", label: "RELEASED" },
  { id: "testing", label: "IN TESTING" },
  { id: "development", label: "IN DEVELOPMENT" },
  { id: "future", label: "WHAT'S TO COME" },
];

export default function Roadmap() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  
  // Map URL friendly names to internal IDs
  const getTabId = (param: string | null) => {
    if (!param) return "overview";
    if (param === "final-testing") return "testing";
    if (param === "to-come") return "future";
    return param; // overview, released, development
  };

  const [activeTab, setActiveTab] = useState(getTabId(tabParam));

  useEffect(() => {
    setActiveTab(getTabId(tabParam));
  }, [tabParam]);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    // Update URL without reloading
    const newParams = new URLSearchParams(searchParams);
    
    // Reverse map internal IDs to URL friendly names for consistency with Navbar
    let urlName = id;
    if (id === "testing") urlName = "final-testing";
    if (id === "future") urlName = "to-come";
    
    newParams.set("tab", urlName);
    setSearchParams(newParams);
  };

  return (
    <section id="roadmap" className="py-12 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
            Roadmap <span className="text-[#F5009F]">2025</span>
          </h2>
          <p className="text-gray-400 text-lg">
            See What We Have Released, Are Testing And Are Developing.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-[#111] p-2 rounded-xl border border-white/10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#F5009F] text-white shadow-[0_0_20px_rgba(245,0,159,0.4)]"
                  : "bg-transparent text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "overview" && <OverviewContent />}
              {activeTab === "released" && <ReleasedContent />}
              {activeTab === "testing" && <TestingContent />}
              {activeTab === "development" && <DevelopmentContent />}
              {activeTab === "future" && <FutureContent />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function OverviewContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed text-lg">
          The <span className="font-bold text-white">Playlandverse Roadmap</span> outlines a clear and definitive picture of our journey, 
          showcasing the evolution of our ecosystem from its inception, to the launch of our MVP (Minimum Viable Product) and beyond. 
          The MVP now serves as the foundational base product for Playlandverse, providing a robust starting point from which all future 
          updates and enhancements will be built.
        </p>
        <div className="space-y-4">
          <div className="flex gap-4">
            <Check className="text-[#F5009F] shrink-0" />
            <p className="text-gray-400"><strong className="text-white">Released:</strong> The introduction of our MVP marks a major milestone, serving as the core framework for all upcoming developments.</p>
          </div>
          <div className="flex gap-4">
            <Check className="text-[#F5009F] shrink-0" />
            <p className="text-gray-400"><strong className="text-white">In Development:</strong> Shows a list of products/features which we are working on, and are close to testing for release.</p>
          </div>
          <div className="flex gap-4">
            <Check className="text-[#F5009F] shrink-0" />
            <p className="text-gray-400"><strong className="text-white">What's To Come:</strong> Shows what we intend to develop in the future, and invites you to share your ideas.</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <img src="https://picsum.photos/seed/roadmap_overview/800/500" alt="Roadmap Overview" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <h3 className="text-2xl font-black uppercase text-white">Our Journey</h3>
        </div>
      </div>
    </div>
  );
}

function ReleasedContent() {
  const features = [
    "Welcome Lobby", "Crypto Level", "Meme Level", "Travel Level", "Food Level", 
    "Technology Level", "Fashion Level", "Gaming Level", "BLOKBuster Interactive Quiz",
    "ReadyPlayerMe Avatar Integration", "Fully Networked Avatars (200 Per Instance)",
    "Avatar Emotes", "M3TASPACES: Live Event Space", "Presenter Holograms",
    "Networked Audio Chat", "Networked Text Chat", "Push Notifications",
    "Live Voting", "Live Ask A Question", "Multiple Instances", "Analytics",
    "Instance Manager", "Friend System", "Tannoy Announcement System", "Chat AI Bots",
    "YouTube Integration", "Twitch Integration", "X Integration", "Reddit Integration",
    "RSS Feeds", "Crypto Trading and Swaps", "Wallet Integration", "Staking in the Metaverse",
    "Refreshed REBLOK Land Sale"
  ];

  return (
    <div>
      <h3 className="text-[#F5009F] font-bold uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Unity Released Features</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
            <Check size={16} className="text-[#F5009F]" />
            <span className="text-sm font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TestingContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-[#F5009F] font-bold uppercase tracking-widest mb-4">Devices</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          We're actively testing the Playlandverse app on a range of iOS and Android devices to ensure top performance, 
          full compatibility, and a seamless experience across all screen sizes and operating systems.
        </p>
        <div className="flex gap-4">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center gap-2 w-32">
            <Smartphone className="text-[#F5009F]" size={32} />
            <span className="font-bold">iOS</span>
          </div>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center gap-2 w-32">
            <Smartphone className="text-[#F5009F]" size={32} />
            <span className="font-bold">Android</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src="https://picsum.photos/seed/mobile_testing/800/500" alt="Mobile Testing" className="rounded-2xl border border-white/10 shadow-2xl" />
      </div>
    </div>
  );
}

function DevelopmentContent() {
  const items = [
    { title: "Condensed World", desc: "A new look for the 21 levels, optimised and condensed down to form new zones and centred around the brand new M3TASPACES Arena!", icon: Globe },
    { title: "Optimised Onboarding", desc: "The Metaverse for all - An innovative and streamlined approach to accessing Playlandverse, eliminating barriers to entry.", icon: Zap },
    { title: "PLAY Games", desc: "A unique, show-stopping virtual event inspired by popular real-world shows, brought into the Metaverse for users to compete and win.", icon: Trophy },
    { title: "PLAY Party", desc: "A daily chance to 'Spin the Wheel' - win instant prizes of a variety of crypto or prompt $PLAY burns.", icon: Gamepad2 },
  ];

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, i) => (
          <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#F5009F]/50 transition-colors">
            <item.icon className="text-[#F5009F] mb-4" size={32} />
            <h4 className="text-[#F5009F] font-bold uppercase text-lg mb-2">{item.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl overflow-hidden border border-white/10 h-64 md:h-80 relative group">
        <img src="https://picsum.photos/seed/wheel_spin/1200/600" alt="BLOK Party Wheel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h3 className="text-3xl font-black uppercase text-white tracking-widest">Spin The Wheel</h3>
        </div>
      </div>
    </div>
  );
}

function FutureContent() {
  const items = [
    { title: "PLAY Arcade", desc: "New single, multiplayer, and casino-style games designed for the revamped Playlandverse Arcade.", icon: Gamepad2 },
    { title: "Virtual HQ Optimisation", desc: "Enhance the existing Virtual HQs of Tier 1 Crypto Partners through more interactive features.", icon: Layout },
    { title: "Avatar Upgrades", desc: "Enhance avatars with improved movement capabilities, along with purchasable digital wearables.", icon: Shirt },
    { title: "PLAY Player Profiles", desc: "Develop and integrate a player profile and levelling up system.", icon: Users },
  ];

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, i) => (
          <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#F5009F]/50 transition-colors">
            <item.icon className="text-[#F5009F] mb-4" size={32} />
            <h4 className="text-[#F5009F] font-bold uppercase text-lg mb-2">{item.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl overflow-hidden border border-white/10 h-64 md:h-80 relative group">
        <img src="https://picsum.photos/seed/arcade_future/1200/600" alt="Future Arcade" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
           <h3 className="text-3xl font-black uppercase text-white tracking-widest">Future Expansion</h3>
        </div>
      </div>
    </div>
  );
}
