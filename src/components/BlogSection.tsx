import React, { useState } from 'react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/portfolioData';
import { BookOpen, Clock, ArrowRight, Sparkles, Newspaper } from 'lucide-react';
import { BlogReaderModal } from './BlogReaderModal';

interface BlogSectionProps {
  onOpenBooking: (serviceType?: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenBooking }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="insights" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      {/* Header */}
      <div className="mb-10 sm:mb-14">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
          <Newspaper className="w-4 h-4 text-emerald-700" />
          <span>Insights & Analytics Architecture</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
          <span className="text-gray-400">Data-driven thinking.</span> Field notes on DAX, modeling & BI adoption.
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl">
          Practical strategies and lessons learned from deploying 60+ production Power BI models across diverse business verticals.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            id={`blog-card-${post.id}`}
            onClick={() => setSelectedPost(post)}
            className="bg-white rounded-3xl p-6 border border-black/8 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/50">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 tracking-tight leading-snug mb-2 group-hover:text-emerald-800 transition-colors">
                {post.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                {post.summary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-900 group-hover:text-emerald-700">
              <span>Read insight</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </article>
        ))}
      </div>

      {/* Article Reading Modal */}
      <BlogReaderModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
};
