import React, { useState, useEffect } from "react";
import { Plus, Trash2, X } from "lucide-react";
import { API_BASE_URL } from "@/lib/env";

export default function AdminFaqs() {
  const [faqs, setFaqs] = useState<{ id: number; question: string; answer: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const fetchFaqs = async () => {
    try {
      setLoading(true);
      // For local development, hitting the Wrangler port
      const res = await fetch(`${API_BASE_URL}/api/admin/faqs`);
      const data = await res.json();
      setFaqs(data || []);
    } catch (e) {
      console.error("Failed to fetch", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const handleAddFaq = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion || !newAnswer) return;
    try {
      await fetch(`${API_BASE_URL}/api/admin/faqs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: newQuestion, answer: newAnswer, order_index: faqs.length + 1 }),
      });
      setNewQuestion("");
      setNewAnswer("");
      setShowAdd(false);
      fetchFaqs();
    } catch (e) {
      console.error("Failed to add", e);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this FAQ?")) return;
    try {
      await fetch(`${API_BASE_URL}/api/admin/faqs/${id}`, { method: "DELETE" });
      fetchFaqs();
    } catch (e) {
      console.error("Failed to delete", e);
    }
  };

  if (loading) return <div className="p-8 text-gray-500 font-medium animate-pulse">Loading FAQs...</div>;

  return (
    <div className="p-6 sm:p-8 max-w-4xl mx-auto animate-fade-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-navy)] mb-2">FAQ Management</h1>
          <p className="text-gray-500">Add, remove, or edit the Frequently Asked Questions on your website.</p>
        </div>
        <button 
          onClick={() => setShowAdd(!showAdd)}
          className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white px-5 py-2.5 rounded-xl flex items-center gap-2 font-semibold shadow-md hover:opacity-90 transition-all shrink-0"
        >
          {showAdd ? <X size={18} /> : <Plus size={18} />}
          {showAdd ? "Cancel" : "Add New FAQ"}
        </button>
      </div>

      {showAdd && (
        <form onSubmit={handleAddFaq} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-8 animate-fade-up">
          <h3 className="text-lg font-bold text-[var(--color-navy)] mb-4">Create New FAQ</h3>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">Question</label>
              <input 
                type="text" 
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                placeholder="e.g. What services do you provide?"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">Answer</label>
              <textarea 
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                placeholder="Write the detailed answer here..."
                required
              />
            </div>
            <button type="submit" className="bg-[var(--color-navy)] text-white px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all">
              Save FAQ
            </button>
          </div>
        </form>
      )}

      <div className="space-y-4">
        {faqs.map(faq => (
          <div key={faq.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start justify-between gap-4 hover:shadow-md hover:border-[var(--color-primary)]/30 transition-all group">
            <div>
              <h4 className="font-bold text-[var(--color-navy)] text-lg mb-2">{faq.question}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
            <button 
              onClick={() => handleDelete(faq.id)}
              className="text-red-500 hover:bg-red-50 hover:text-red-600 p-2.5 rounded-lg transition-colors flex-shrink-0 opacity-50 group-hover:opacity-100"
              title="Delete FAQ"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
        {faqs.length === 0 && !showAdd && (
          <div className="text-center py-16 text-gray-500 bg-white rounded-2xl border-2 border-gray-100 border-dashed">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-navy)] mb-1">No FAQs Found</h3>
            <p className="text-sm">Click the "Add New FAQ" button to create your first question.</p>
          </div>
        )}
      </div>
    </div>
  );
}
