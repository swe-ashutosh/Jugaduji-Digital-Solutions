"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;

  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:8787/api/blogs/${id}`);
        if (!res.ok) {
          router.push("/blog");
          return;
        }
        const data = await res.json();
        setPost(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id, router]);

  if (loading) return <div className="pt-32 text-center text-gray-500 font-medium animate-pulse">Loading Article...</div>;
  if (!post) return <div className="pt-32 text-center text-gray-500">Article not found.</div>;

  return (
    <div className="pt-16 md:pt-24 pb-20 max-w-[900px] mx-auto px-4 sm:px-8">
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline mb-8">
        <ArrowLeft size={16} /> Back to Insights
      </Link>

      <article className="animate-fade-up">
        {/* Category & Metadata */}
        <span className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
          {post.category}
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-navy)] mt-6 mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 border-y border-gray-100 py-4 mb-8">
          <span className="flex items-center gap-1.5"><Calendar size={16} /> {new Date(post.created_at).toLocaleDateString()}</span>
          <span className="flex items-center gap-1.5"><Clock size={16} /> {post.read_time}</span>
          <span className="flex items-center gap-1.5"><User size={16} /> {post.author}</span>
        </div>

        {/* Featured Image */}
        {post.image_url && (
          <div className="w-full h-[250px] sm:h-[400px] rounded-3xl overflow-hidden mb-10 shadow-lg bg-gray-100">
            <img src={post.image_url} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Dynamic Rich Text Content */}
        <div 
          className="prose max-w-none text-gray-700 leading-relaxed text-base sm:text-lg select-text content-rich"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
