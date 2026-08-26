import React from 'react';
import { BlogPost } from '../types';
import { X, BookOpen, Clock, Calendar, ArrowRight, Sparkles, CheckCircle2, Share2 } from 'lucide-react';

interface BlogReaderModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onOpenBooking: (serviceType?: string) => void;
}

export const BlogReaderModal: React.FC<BlogReaderModalProps> = ({ post, onClose, onOpenBooking }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white text-gray-900 rounded-3xl border border-gray-200 shadow-2xl overflow-hidden flex flex-col my-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 bg-gray-50 border-b border-gray-100">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
            <span className="bg-emerald-100/80 px-2.5 py-1 rounded-full">{post.category}</span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-500 flex items-center gap-1">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-tight mb-3">
              {post.title}
            </h2>
            <div className="flex items-center gap-3 text-xs text-gray-500 pb-4 border-b border-gray-100">
              <div className="w-6 h-6 rounded-full bg-[#0d4a36] text-white flex items-center justify-center text-[10px] font-bold">
                KM
              </div>
              <span className="font-semibold text-gray-800">By Kido Muhammed</span>
              <span>·</span>
              <span>{post.date}</span>
            </div>
          </div>

          {/* Lead Summary */}
          <div className="bg-[#0d4a36]/5 p-4 rounded-2xl border border-[#0d4a36]/15 text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
            {post.summary}
          </div>

          {/* Content Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Architect's Key Takeaways</span>
            </h4>
            <div className="space-y-2">
              {post.keyTakeaways.map((takeaway, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-8 py-4 bg-gray-50 border-t border-gray-100">
          <span className="text-xs text-gray-500">Need help applying this to your company's reports?</span>
          <button
            onClick={() => {
              onClose();
              onOpenBooking(`Strategy session: ${post.title}`);
            }}
            className="px-5 py-2.5 bg-[#0d4a36] hover:bg-[#083627] text-white text-xs sm:text-sm font-bold rounded-xl transition-colors shadow-sm flex items-center gap-1.5"
          >
            <span>Book 30-min Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-300" />
          </button>
        </div>
      </div>
    </div>
  );
};
