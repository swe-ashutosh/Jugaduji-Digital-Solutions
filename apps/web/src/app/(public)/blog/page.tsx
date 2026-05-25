"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, User, ArrowRight, FileText } from "lucide-react";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Technology", "Design", "Marketing", "SEO"];

  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:8787/api/blogs");
        const data = await res.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16 md:pt-24 pb-16">
      {/* ─── Hero Section ─── */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f0f4fa] to-white py-16 lg:py-20 mb-12">
        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-8 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm px-4 py-2 mb-6 rounded-full text-xs font-semibold">
            <span className="text-[var(--color-primary)]">📚 Knowledge Hub</span>
            <span className="text-[var(--color-secondary)]">Insights & Strategies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-navy)] mb-6 tracking-tight">
            Blog & <span className="text-[var(--color-primary)]">Insights</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Stay up to date with the latest technological developments, digital marketing models, SEO best practices, and UI/UX design trends.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 z-0"
          style={{
            background: "linear-gradient(to top, #ffffff, transparent)",
          }}
          aria-hidden="true"
        />
      </section>

      {/* ─── Search & Category Filter Bar ─── */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-8 mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeCategory === cat
                    ? "bg-[var(--color-primary)] text-white shadow-sm"
                    : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-3.5 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-[var(--color-navy)] focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-colors"
            />
          </div>
        </div>
      </section>

      {/* ─── Blog Cards Grid ─── */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-8 mb-24">
        {loading ? (
          <div className="text-center py-20 text-gray-500 font-medium animate-pulse">
            Loading articles...
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-gray-500 font-medium">No articles matched your filters. Try a different query!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link 
                href={`/blog/${post.id}`} 
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 flex flex-col group cursor-pointer"
              >
                {/* Featured Image */}
                <div className="h-48 relative overflow-hidden bg-gray-100">
                  {post.image_url ? (
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
                      <FileText size={48} className="opacity-30" />
                    </div>
                  )}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-[var(--color-primary)] px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </div>

                {/* Text Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-[11px] text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(post.created_at).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.read_time}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[var(--color-navy)] mb-3 leading-snug group-hover:text-[var(--color-primary)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="border-t border-gray-50 pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-50 text-[var(--color-primary)] flex items-center justify-center font-bold text-[10px]">
                        {post.author ? post.author.split(" ").map((n: string) => n[0]).join("") : "A"}
                      </div>
                      <span className="text-[11px] font-semibold text-gray-600">{post.author}</span>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-bold text-[var(--color-primary)] group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="max-w-[1060px] mx-auto px-4 sm:px-8">
        <div className="relative bg-gradient-to-br from-teal-800 to-teal-950 rounded-[28px] p-8 sm:p-12 text-white text-center overflow-hidden shadow-[var(--shadow-lg)]">
          <h3 className="text-xl sm:text-2xl font-extrabold mb-3">Need Custom Content or Digital Strategy?</h3>
          <p className="text-sm text-gray-300 max-w-md mx-auto mb-6">
            Partner with Jugaduji Digital Solutions to architect high-performance websites and run digital campaigns that perform.
          </p>
          <Link href="/contact" className="btn-cta-green">
            Schedule a Consult <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
