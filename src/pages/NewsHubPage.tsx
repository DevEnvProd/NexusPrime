import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Calendar, Search, SlidersHorizontal, BookOpen, Clock, ArrowRight } from "lucide-react";
import { ARTICLES, Article } from "../data/articles";

export default function NewsHubPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = new Set(ARTICLES.map((a) => a.category));
    return ["All", ...Array.from(cats)];
  }, []);

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.keywords.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Latest first
  }, [searchQuery, selectedCategory]);

  const featuredArticle = useMemo(() => {
    // Pick the most recent article as featured
    return ARTICLES.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 relative overflow-hidden">
      {/* Visual background ambient details */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F5009F]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Hub Header */}
        <div className="max-w-3xl mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5009F]/10 border border-[#F5009F]/20 text-xs font-mono uppercase tracking-widest text-[#F5009F] mb-4"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5009F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5009F]"></span>
            </span>
            Official Media Center
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6"
          >
            Playlandverse <span className="text-[#F5009F]">Chronicle</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-light leading-relaxed"
          >
            Stay updated with audited global platform intelligence, integration dispatches, and deep tutorials regarding our dynamic gaming alliance systems.
          </motion.p>
        </div>

        {/* Featured Article Hero (Only show if no search filter is active to keep UI clean) */}
        {!searchQuery && selectedCategory === "All" && featuredArticle && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16 rounded-3xl overflow-hidden border border-white/10 bg-[#111] hover:border-[#F5009F]/30 transition-all duration-500 shadow-[0_0_50px_rgba(245,0,159,0.05)]"
          >
            <Link to={`/news/${featuredArticle.slug}`} className="grid lg:grid-cols-12 gap-0 group">
              <div className="lg:col-span-7 relative overflow-hidden aspect-[16/10] lg:aspect-auto">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#111]/40 lg:to-[#111]" />
                <span className="absolute top-6 left-6 bg-[#F5009F] text-white text-xs font-mono font-bold uppercase px-3 py-1 rounded-full">
                  Featured Release
                </span>
              </div>
              <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center space-y-6 bg-[#111]">
                <div className="flex items-center gap-4 text-xs font-mono text-[#F5009F]">
                  <span className="uppercase tracking-widest font-bold">{featuredArticle.category}</span>
                  <span className="text-gray-500">•</span>
                  <span className="flex items-center gap-1.5 text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(featuredArticle.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })}
                  </span>
                </div>
                <h2 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight leading-tight group-hover:text-[#F5009F] transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {featuredArticle.summary}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5 text-sm">
                  <span className="text-gray-500 font-mono">{featuredArticle.readTime}</span>
                  <span className="inline-flex items-center gap-2 text-[#F5009F] font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                    Read Intelligence <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row gap-6 items-stretch md:items-center justify-between mb-12 border-b border-white/10 pb-8">
          {/* Categories Tab List */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-xl text-xs uppercase font-bold tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#F5009F] text-white shadow-[0_0_15px_rgba(245,0,159,0.3)]"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Field */}
          <div className="relative min-w-[280px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search platform news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-[#F5009F] transition-colors font-sans"
            />
          </div>
        </div>

        {/* Articles Grid (Bento Grid Style) */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                className="group flex flex-col bg-[#111]/60 border border-white/10 rounded-2xl overflow-hidden hover:border-[#F5009F]/30 hover:bg-[#111] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(245,0,159,0.03)]"
              >
                <Link to={`/news/${article.slug}`} className="flex flex-col h-full">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 to-transparent" />
                    <span className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
                        <Calendar className="w-3 h-3 text-[#F5009F]" />
                        <span>
                          {new Date(article.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                          })}
                        </span>
                        <span>•</span>
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-lg font-black uppercase text-white tracking-tight leading-snug group-hover:text-[#F5009F] transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                        {article.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#F5009F] transition-colors">
                      <span>Full Broadcast</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 border border-dashed border-white/10 rounded-3xl bg-white/5">
            <BookOpen className="w-12 h-12 text-[#F5009F] mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-bold uppercase mb-2">No Platform Reports Found</h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              We couldn't find any reports matching your category selection or search keywords. Please adjust your search criteria and try again.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
