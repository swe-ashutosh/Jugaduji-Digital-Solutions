import React, { useState, useEffect, useRef } from "react";
import { Plus, Trash2, X, Bold, Italic, Link2, Image as ImageIcon, Heading1, Heading2, AlignLeft, AlignCenter, Trash, FileText, Upload } from "lucide-react";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);

  // Form states
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Technology");
  const [readTime, setReadTime] = useState("5 min read");
  const [author, setAuthor] = useState("Ashutosh Kushwaha");
  const [featuredImage, setFeaturedImage] = useState(""); // URL or Base64
  const [excerpt, setExcerpt] = useState("");

  const editorRef = useRef<HTMLDivElement>(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8787/api/blogs");
      const data = await res.json();
      setBlogs(data || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleCommand = (command: string, value: string = "") => {
    document.execCommand(command, false, value);
  };

  const handleFontSizeChange = (size: string) => {
    // Standard command "fontSize" takes 1-7. We can map custom sizes.
    document.execCommand("fontSize", false, size);
  };

  const insertLink = () => {
    const url = prompt("Enter the link URL (e.g., https://example.com):");
    if (url) {
      handleCommand("createLink", url);
    }
  };

  const insertImageLink = () => {
    const url = prompt("Enter the image URL:");
    if (url) {
      handleCommand("insertImage", url);
    }
  };

  const handleInlineImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleCommand("insertImage", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFeaturedImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFeaturedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const contentHtml = editorRef.current?.innerHTML || "";
    if (!title || !contentHtml) {
      alert("Title and content are required!");
      return;
    }

    try {
      const res = await fetch("http://localhost:8787/api/admin/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content: contentHtml,
          image_url: featuredImage,
          category,
          excerpt: excerpt || title.substring(0, 100),
          read_time: readTime,
          author,
        }),
      });

      if (res.ok) {
        setTitle("");
        setFeaturedImage("");
        setExcerpt("");
        if (editorRef.current) editorRef.current.innerHTML = "";
        setShowAdd(false);
        fetchBlogs();
      } else {
        alert("Failed to save blog post");
      }
    } catch (e) {
      console.error(e);
      alert("Server connection failed");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    try {
      await fetch(`http://localhost:8787/api/admin/blogs/${id}`, { method: "DELETE" });
      fetchBlogs();
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) return <div className="p-8 text-gray-500 font-medium animate-pulse">Loading Blogs...</div>;

  return (
    <div className="p-6 sm:p-8 max-w-6xl mx-auto animate-fade-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-navy)] mb-2">Blog Management</h1>
          <p className="text-gray-500">Create, edit, or delete articles and news insights.</p>
        </div>
        <button 
          onClick={() => setShowAdd(!showAdd)}
          className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white px-5 py-2.5 rounded-xl flex items-center gap-2 font-semibold shadow-md hover:opacity-90 transition-all shrink-0"
        >
          {showAdd ? <X size={18} /> : <Plus size={18} />}
          {showAdd ? "Cancel" : "Create New Post"}
        </button>
      </div>

      {showAdd && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-8 space-y-6 animate-fade-up">
          <h3 className="text-lg font-bold text-[var(--color-navy)] border-b pb-3">Create Blog Post</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Title */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">Blog Title</label>
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-[var(--color-primary)] transition-all"
                placeholder="e.g. 5 Tech Trends for 2026"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">Category</label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-[var(--color-primary)] transition-all"
              >
                <option value="Technology">Technology</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="SEO">SEO</option>
              </select>
            </div>

            {/* Read Time */}
            <div>
              <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">Read Time</label>
              <input 
                type="text" 
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-[var(--color-primary)] transition-all"
                placeholder="e.g. 5 min read"
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">Author</label>
              <input 
                type="text" 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-[var(--color-primary)] transition-all"
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">Short Excerpt (SEO Summary)</label>
              <input 
                type="text" 
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-[var(--color-primary)] transition-all"
                placeholder="Enter a 1-sentence teaser..."
              />
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Upload Featured Image</label>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 px-4 py-2.5 rounded-xl cursor-pointer text-sm font-semibold text-gray-600 transition-colors shadow-sm">
                  <Plus size={16} />
                  Choose Image
                  <input type="file" accept="image/*" onChange={handleFeaturedImageUpload} className="hidden" />
                </label>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Or Paste Image URL</label>
              <input
                type="text"
                value={featuredImage}
                onChange={(e) => setFeaturedImage(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-[var(--color-primary)] transition-all text-sm shadow-sm"
                placeholder="https://images.unsplash.com/photo-..."
              />
            </div>
            {featuredImage && (
              <div className="md:col-span-2 mt-2">
                <p className="text-xs font-bold text-gray-400 mb-2">Preview:</p>
                <img src={featuredImage} alt="Featured Preview" className="h-32 rounded-lg object-cover border" />
              </div>
            )}
          </div>

          {/* WYSIWYG Content Editor */}
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
            {/* Toolbar */}
            <div className="bg-gray-50 border-b border-gray-200 p-2 flex flex-wrap gap-1.5 items-center">
              <button type="button" onClick={() => handleCommand("bold")} className="p-2 text-gray-600 hover:bg-gray-200 rounded transition" title="Bold"><Bold size={16} /></button>
              <button type="button" onClick={() => handleCommand("italic")} className="p-2 text-gray-600 hover:bg-gray-200 rounded transition" title="Italic"><Italic size={16} /></button>
              <div className="w-[1px] h-6 bg-gray-300 mx-1" />
              
              <button type="button" onClick={() => handleCommand("formatBlock", "H1")} className="p-2 text-gray-600 hover:bg-gray-200 rounded transition font-bold" title="Heading 1"><Heading1 size={16} /></button>
              <button type="button" onClick={() => handleCommand("formatBlock", "H2")} className="p-2 text-gray-600 hover:bg-gray-200 rounded transition font-bold" title="Heading 2"><Heading2 size={16} /></button>
              <button type="button" onClick={() => handleCommand("formatBlock", "P")} className="p-2 text-gray-600 hover:bg-gray-200 rounded transition" title="Paragraph"><AlignLeft size={16} /></button>
              <div className="w-[1px] h-6 bg-gray-300 mx-1" />

              <select 
                onChange={(e) => handleFontSizeChange(e.target.value)}
                defaultValue="3"
                className="bg-white border rounded px-2 py-1 text-xs text-gray-600 outline-none"
              >
                <option value="2">Small Size</option>
                <option value="3">Normal Size</option>
                <option value="5">Large Size</option>
                <option value="7">Extra Large</option>
              </select>
              
              <div className="w-[1px] h-6 bg-gray-300 mx-1" />
              <button type="button" onClick={insertLink} className="p-2 text-gray-600 hover:bg-gray-200 rounded transition" title="Insert Link"><Link2 size={16} /></button>
              
              {/* Inline image upload / insertion */}
              <button type="button" onClick={insertImageLink} className="p-2 text-gray-600 hover:bg-gray-200 rounded transition" title="Insert Image Link"><ImageIcon size={16} /></button>
              <label className="p-2 text-gray-600 hover:bg-gray-200 rounded transition cursor-pointer" title="Upload Inline Image">
                <Upload size={16} className="inline-block" />
                <input type="file" accept="image/*" onChange={handleInlineImageUpload} className="hidden" />
              </label>
            </div>
            
            {/* Editor Area */}
            <div 
              ref={editorRef}
              contentEditable 
              className="min-h-[300px] p-6 outline-none prose max-w-none text-gray-800"
              style={{ minHeight: "350px" }}
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3">
            <button 
              type="button" 
              onClick={() => setShowAdd(false)}
              className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white px-8 py-2.5 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
            >
              Publish Post
            </button>
          </div>
        </form>
      )}

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map(post => (
          <div key={post.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col group relative">
            <div className="h-44 bg-gray-100 relative">
              {post.image_url ? (
                <img src={post.image_url} alt={post.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
                  <FileText size={48} className="opacity-30" />
                </div>
              )}
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-[var(--color-primary)] px-3 py-1 rounded-full uppercase">
                {post.category}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-[var(--color-navy)] text-lg mb-2 line-clamp-2">{post.title}</h4>
                <p className="text-gray-500 text-xs mb-4">{post.read_time} • {post.author}</p>
                <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed mb-4">{post.excerpt}</p>
              </div>

              <div className="border-t pt-4 flex items-center justify-between">
                <span className="text-xs text-gray-400">Created: {new Date(post.created_at).toLocaleDateString()}</span>
                <button 
                  onClick={() => handleDelete(post.id)}
                  className="text-red-500 hover:bg-red-50 hover:text-red-600 p-2 rounded-lg transition-colors flex items-center gap-1 text-xs font-semibold"
                >
                  <Trash2 size={14} />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {blogs.length === 0 && !showAdd && (
          <div className="col-span-1 md:col-span-3 text-center py-16 text-gray-500 bg-white rounded-2xl border-2 border-gray-100 border-dashed">
            <h3 className="text-lg font-bold text-[var(--color-navy)] mb-1">No Blog Posts Found</h3>
            <p className="text-sm">Click the "Create New Post" button to publish your first article.</p>
          </div>
        )}
      </div>
    </div>
  );
}
