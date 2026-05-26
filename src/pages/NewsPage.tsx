import { motion } from "motion/react";
import { Calendar, Globe, Share2, ArrowLeft, Shield, Users, Trophy, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewsPage() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Playlandverse Partnered with Winbox | Earn to Play Launch",
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Article link copied to clipboard!");
    }
  };

  return (
    <article className="min-h-screen bg-black text-white pt-32 pb-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#F5009F]/10 via-black to-black opacity-40 pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Breadcrumb / Back Navigation */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#F5009F] transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Hub
        </Link>

        {/* Article Metadata Header */}
        <div className="space-y-6 mb-12">
          <div className="flex flex-wrap items-center gap-4 text-xs tracking-widest uppercase font-mono text-[#F5009F]">
            <span className="px-3 py-1 bg-[#F5009F]/10 rounded-full border border-[#F5009F]/20">Global Collaboration Dispatch</span>
            <span className="flex items-center gap-1.5 text-gray-400">
              <Calendar className="w-3.5 h-3.5" />
              May 26, 2026
            </span>
            <span className="flex items-center gap-1.5 text-gray-400">
              <Globe className="w-3.5 h-3.5" />
              BVI / Kuala Lumpur
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none text-white">
            Playlandverse Partners with <span className="text-[#F5009F]">Winbox</span> to Launch Revolutionary 'Earn to Play' Metaverse Ecosystem
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
            The milestone partnership integrates Playlandverse’s immersive real-time gaming virtual environment with the robust transactional mechanics of Winbox, introducing decentralized amusement pipelines.
          </p>

          {/* Author/Share Row */}
          <div className="flex items-center justify-between border-y border-white/10 py-4 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F5009F] to-purple-600 flex items-center justify-center font-bold text-sm tracking-wider">
                PLV
              </div>
              <div>
                <span className="block font-bold text-sm text-white">Editorial Syndicate</span>
                <span className="block text-xs text-gray-500 font-mono">Core Protocol Communications</span>
              </div>
            </div>
            
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs uppercase tracking-wider font-bold hover:bg-[#F5009F]/10 hover:border-[#F5009F]/30 transition-all"
            >
              <Share2 className="w-3.5 h-3.5 text-[#F5009F]" />
              Share Broadcast
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 mb-16 shadow-[0_0_50px_rgba(245,0,159,0.1)]">
          <img 
            src="https://picsum.photos/seed/winbox_alliance/1200/630" 
            alt="Playlandverse and Winbox strategic system integration" 
            className="w-full h-auto object-cover aspect-[21/9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Article Body - Clean, High-Contrast Editorial Design */}
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Main Column */}
          <div className="lg:col-span-3 space-y-8 font-sans text-lg text-gray-300 leading-relaxed">
            
            <p className="first-letter:text-6xl first-letter:font-black first-letter:text-[#F5009F] first-letter:mr-3 first-letter:float-left first-letter:leading-none">
              In a major integration designed to reshape play-to-earn structures, play-and-earn developer Playlandverse has officially completed a strategic synergy with global amusement distribution engine <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F5009F] underline font-bold decoration-[#F5009F] decoration-2 underline-offset-4 transition-all">Winbox</a>. The enterprise initiative establishes the ground-level rails for an updated 'Earn to Play' architecture designed to bring direct web3 value distributions to active players, with multiple nodes coming online immediately.
            </p>

            <p>
              By fusing real-time spatial metaverse worlds with transactional high-performance systems, the new ecosystem bypasses legacy registration queues, creating low-barrier gaming options. Players can seamlessly participate in various activities inside Playlandverse and directly receive transactional distributions processed by the secure infrastructure of <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F5009F] underline font-bold decoration-[#F5009F] decoration-2 underline-offset-4 transition-all">Winbox</a>.
            </p>

            <h3 className="text-2xl font-black uppercase text-white tracking-tight pt-4 flex items-center gap-2">
              <Cpu className="text-[#F5009F] w-6 h-6" />
              Mechanics of the Ecosystem
            </h3>

            <p>
              Unlike standard GameFi systems that rely on artificial inflationary mechanics, 'Earn to Play' rewards are linked to structural utility. Within this corporate alliance, the <strong className="text-white">$PLAY token</strong> acts as the ecosystem's currency, supported by external transaction processors. 
            </p>

            <blockquote className="border-l-4 border-[#F5009F] bg-white/5 px-8 py-6 rounded-r-2xl italic my-8 text-white/90">
              "This core alignment changes the dynamic of player actions inside virtual environments. Collaborating with Winbox allows us to offer transaction throughput with instant transfers, securing a fast gaming workflow for our growing global audience base."
              <cite className="block text-sm uppercase tracking-wider font-mono font-bold text-[#F5009F] mt-4 not-italic">
                — Head of Systems, Playlandverse Core Dev
              </cite>
            </blockquote>

            <h3 className="text-2xl font-black uppercase text-white tracking-tight pt-4 flex items-center gap-2">
              <Shield className="text-[#F5009F] w-6 h-6" />
              Strategic Optimization and Security
            </h3>

            <p>
              Security remains highly integrated. Playlandverse leverages advanced smart contracts and multichain bridges, while transactional tasks are completed through <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F5009F] underline font-bold decoration-[#F5009F] decoration-2 underline-offset-4 transition-all">Winbox</a> digital gateways. This reduces the risk of transaction delays and eliminates third-party platform vulnerabilities natively during live play sessions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 pt-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <h5 className="font-bold text-white uppercase text-sm tracking-wider text-[#F5009F]">Automated Routing</h5>
                <p className="text-sm text-gray-400">Smart routing algorithms send spatial gaming rewards to integrated personal wallets without requiring manual claims or complex conversions.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <h5 className="font-bold text-white uppercase text-sm tracking-wider text-[#F5009F]">Fast Transaction Settlers</h5>
                <p className="text-sm text-gray-400">With support from high-frequency databases at Winbox, thousands of in-game actions are settled concurrently within 1.2 seconds.</p>
              </div>
            </div>

            <p>
              With the alliance launch, users can access these specialized pools, joint ventures, and new mini-games starting today through official application versions. The integration guarantees consistent uptime for gamers looking to make the transition into the play-and-earn landscape. For complete access guidelines and active node registrations, users can visit the digital systems at <a href="https://winbox666.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F5009F] underline font-bold decoration-[#F5009F] decoration-2 underline-offset-4 transition-all">Winbox</a>.
            </p>

          </div>

          {/* Sidebar / Quick Facts */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 space-y-6">
              <h4 className="font-black text-white uppercase tracking-wider text-sm border-b border-white/10 pb-3">
                Integration Pulse
              </h4>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <Trophy className="text-[#F5009F] w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-500 font-mono">Launch Segment</span>
                    <span className="text-sm text-white font-bold">Earn-to-Play Alpha Pool</span>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Users className="text-[#F5009F] w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-500 font-mono">Primary Network Partner</span>
                    <span className="text-sm text-white font-bold">Winbox Portal Nodes</span>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Shield className="text-[#F5009F] w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-500 font-mono">Consensus Framework</span>
                    <span className="text-sm text-white font-bold">Encrypted API Bridges</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a 
                  href="https://winbox666.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full text-center py-3 rounded-xl bg-[#F5009F] hover:bg-[#d00086] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(245,0,159,0.3)] hover:shadow-[0_0_20px_rgba(245,0,159,0.5)]"
                >
                  Visit Winbox Systems
                </a>
              </div>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
              <h4 className="font-black text-white uppercase tracking-wider text-sm border-b border-white/10 pb-3 mb-4">
                Global Release Calendar
              </h4>
              <ul className="space-y-3 text-xs text-gray-400 font-mono">
                <li><strong className="text-white">Q2 2026:</strong> Shared Node Launch</li>
                <li><strong className="text-white">Q3 2026:</strong> Dynamic Gaming Suite Integration</li>
                <li><strong className="text-white">Q4 2026:</strong> Yield Distribution Upgrades</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </article>
  );
}
