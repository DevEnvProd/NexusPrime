import { useEffect, useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Calendar, Globe, Share2, ArrowLeft, Shield, Users, Trophy, Cpu, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { ARTICLES, Article } from "../data/articles";

export default function NewsDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const article = useMemo(() => {
    return ARTICLES.find((a) => a.slug === slug);
  }, [slug]);

  // Handle SEO Metadata updates dynamically when article loads
  useEffect(() => {
    if (!article) return;

    // Update document title
    document.title = `${article.title} | Playlandverse News`;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", article.metaDescription);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      metaDesc.setAttribute("content", article.metaDescription);
      document.head.appendChild(metaDesc);
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", article.keywords);
    } else {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      metaKeywords.setAttribute("content", article.keywords);
      document.head.appendChild(metaKeywords);
    }

    // Update open graph properties
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", article.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", article.summary);

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", article.image);

    // Scroll to top of the page on render
    window.scrollTo({ top: 0, behavior: "instant" });

    return () => {
      // Restore default title on unmount
      document.title = "Playlandverse | The Next Generation of Metaverse Gaming";
    };
  }, [article]);

  const recommendedArticles = useMemo(() => {
    if (!article) return [];
    // Get 3 other articles in the same category, or just others
    const filtered = ARTICLES.filter((a) => a.slug !== article.slug);
    const related = filtered.filter((a) => a.category === article.category);
    const pool = related.length >= 3 ? related : filtered;
    
    // Pick 3 pseudo-randomly based on seed
    return pool.slice(0, 3);
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
        <Cpu className="w-16 h-16 text-[#F5009F] mb-6 animate-pulse" />
        <h1 className="text-3xl font-black uppercase mb-4">Intelligence File Lost</h1>
        <p className="text-gray-500 max-w-md mb-8 text-sm">
          The requested article file or database slug does not exist on our servers. It may have been relocated or updated.
        </p>
        <Link 
          to="/news"
          className="px-6 py-3 rounded-xl bg-[#F5009F] hover:bg-[#d00086] text-white font-bold text-xs uppercase tracking-wider transition-all"
        >
          Return to Media Hub
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="min-h-screen bg-black text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#F5009F]/10 via-black to-black opacity-30 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Detail layout container with main column and sidebar */}
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main article body column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Breadcrumbs */}
            <Link 
              to="/news" 
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#F5009F] transition-colors mb-4 group font-semibold"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              Back to Media Hub
            </Link>

            {/* Article Header Metadata */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4 text-xs tracking-widest uppercase font-mono text-[#F5009F]">
                <span className="px-3 py-1 bg-[#F5009F]/10 rounded-full border border-[#F5009F]/20 font-bold">
                  {article.category}
                </span>
                <span className="flex items-center gap-1.5 text-gray-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  })}
                </span>
                <span className="flex items-center gap-1.5 text-gray-400">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none text-white">
                {article.title}
              </h1>

              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                {article.summary}
              </p>

              {/* Author & Share section */}
              <div className="flex items-center justify-between border-y border-white/10 py-5 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F5009F] to-purple-600 flex items-center justify-center font-bold text-sm tracking-wider text-white shadow-lg shadow-[#F5009F]/20">
                    PLV
                  </div>
                  <div>
                    <span className="block font-bold text-sm text-white">{article.author}</span>
                    <span className="block text-xs text-gray-500 font-mono">Platform Analyst Division</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs uppercase tracking-wider font-bold hover:bg-[#F5009F]/10 hover:border-[#F5009F]/30 transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-green-500">Link Copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4 text-[#F5009F]" />
                      <span>Share Broadcast</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Main Featured Image */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(245,0,159,0.05)] aspect-[21/9] max-h-[450px]">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            {/* Main Article Body Render */}
            <div 
              className="font-sans text-gray-300 text-lg leading-relaxed space-y-6 news-article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-10">
            
            {/* Quick Fact Box */}
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 space-y-6">
              <h4 className="font-black text-white uppercase tracking-wider text-sm border-b border-white/10 pb-3">
                Report Blueprint
              </h4>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <Trophy className="text-[#F5009F] w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-gray-500 font-mono">Segment Scope</span>
                    <span className="text-sm text-white font-bold">{article.category} Analysis</span>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Shield className="text-[#F5009F] w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-gray-500 font-mono">Security Check</span>
                    <span className="text-sm text-white font-bold">Audited SSL & DNS Protocols</span>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Users className="text-[#F5009F] w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-gray-500 font-mono">Target Platform</span>
                    <span className="text-sm text-white font-bold">Winbox Ecosystem Hubs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Related Articles list */}
            {recommendedArticles.length > 0 && (
              <div className="space-y-6">
                <h4 className="font-black text-white uppercase tracking-wider text-sm border-b border-white/10 pb-3">
                  Related Intelligence
                </h4>
                
                <div className="space-y-4">
                  {recommendedArticles.map((rec) => (
                    <Link 
                      key={rec.slug}
                      to={`/news/${rec.slug}`}
                      className="flex gap-4 p-3 rounded-xl border border-white/5 hover:border-[#F5009F]/30 bg-[#111]/30 hover:bg-[#111]/80 transition-all duration-300 group"
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                        <img 
                          src={rec.image} 
                          alt={rec.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="space-y-1 min-w-0 flex flex-col justify-center">
                        <span className="block text-[9px] uppercase font-mono tracking-widest text-[#F5009F]">
                          {rec.category}
                        </span>
                        <h5 className="text-sm font-bold text-white uppercase tracking-tight line-clamp-2 leading-tight group-hover:text-[#F5009F] transition-colors">
                          {rec.title}
                        </h5>
                        <span className="block text-[10px] text-gray-500 font-mono">
                          {new Date(rec.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                          })}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </article>
  );
}
