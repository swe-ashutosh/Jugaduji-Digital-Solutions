import React, { useState, useEffect } from "react";
import { Plus, Trash2, X, Monitor, Smartphone, Palette, Cloud, Zap, Activity } from "lucide-react";
import { API_BASE_URL } from "@/lib/env";

export const AVAILABLE_ICONS = [
  { name: "Monitor", component: Monitor },
  { name: "Smartphone", component: Smartphone },
  { name: "Palette", component: Palette },
  { name: "Cloud", component: Cloud },
  { name: "Zap", component: Zap },
  { name: "Activity", component: Activity },
];

export const THEMES = [
  { value: "blue", label: "Blue", bg: "bg-blue-50", text: "text-blue-600", hover: "hover:border-blue-600" },
  { value: "teal", label: "Teal", bg: "bg-teal-50", text: "text-teal-600", hover: "hover:border-teal-600" },
  { value: "orange", label: "Orange", bg: "bg-orange-50", text: "text-orange-500", hover: "hover:border-orange-500" },
  { value: "purple", label: "Purple", bg: "bg-purple-50", text: "text-purple-600", hover: "hover:border-purple-600" },
];

export default function AdminServices() {
  const [services, setServices] = useState<{id: number, title: string, description: string, icon_name: string, color_theme: string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [iconName, setIconName] = useState("Monitor");
  const [colorTheme, setColorTheme] = useState("blue");

  const fetchServices = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/api/admin/services`);
      const data = await res.json();
      setServices(data || []);
    } catch (e) {
      console.error("Failed to fetch", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleAddService = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;
    try {
      await fetch(`${API_BASE_URL}/api/admin/services`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, icon_name: iconName, color_theme: colorTheme, order_index: services.length + 1 }),
      });
      setTitle("");
      setDescription("");
      setIconName("Monitor");
      setColorTheme("blue");
      setShowAdd(false);
      fetchServices();
    } catch (e) {
      console.error("Failed to add", e);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this Service?")) return;
    try {
      await fetch(`${API_BASE_URL}/api/admin/services/${id}`, { method: "DELETE" });
      fetchServices();
    } catch (e) {
      console.error("Failed to delete", e);
    }
  };

  if (loading) return <div className="p-8 text-gray-500 font-medium animate-pulse">Loading Services...</div>;

  return (
    <div className="p-6 sm:p-8 max-w-5xl mx-auto animate-fade-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-navy)] mb-2">Services Management</h1>
          <p className="text-gray-500">Add or remove the core services displayed on your homepage.</p>
        </div>
        <button 
          onClick={() => setShowAdd(!showAdd)}
          className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white px-5 py-2.5 rounded-xl flex items-center gap-2 font-semibold shadow-md hover:opacity-90 transition-all shrink-0"
        >
          {showAdd ? <X size={18} /> : <Plus size={18} />}
          {showAdd ? "Cancel" : "Add New Service"}
        </button>
      </div>

      {showAdd && (
        <form onSubmit={handleAddService} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-8 animate-fade-up">
          <h3 className="text-lg font-bold text-[var(--color-navy)] mb-4">Create New Service</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">Service Title</label>
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-[var(--color-primary)] transition-all"
                placeholder="e.g. Web Development"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">Short Description</label>
              <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-[var(--color-primary)] transition-all"
                placeholder="Fast, responsive and scalable web solutions."
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">Icon (Select one)</label>
              <select 
                value={iconName}
                onChange={(e) => setIconName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-[var(--color-primary)] transition-all"
              >
                {AVAILABLE_ICONS.map(i => <option key={i.name} value={i.name}>{i.name}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">Color Theme</label>
              <select 
                value={colorTheme}
                onChange={(e) => setColorTheme(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-[var(--color-primary)] transition-all"
              >
                {THEMES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>
            
            <div className="md:col-span-2 mt-2">
              <button type="submit" className="bg-[var(--color-navy)] text-white px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all">
                Save Service
              </button>
            </div>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map(svc => {
          const theme = THEMES.find(t => t.value === svc.color_theme) || THEMES[0];
          const IconComp = AVAILABLE_ICONS.find(i => i.name === svc.icon_name)?.component || Monitor;
          
          return (
            <div key={svc.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-all group">
              <div className={`w-14 h-14 ${theme.bg} ${theme.text} rounded-2xl flex items-center justify-center shrink-0`}>
                <IconComp size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[var(--color-navy)] text-lg mb-1">{svc.title}</h4>
                <p className="text-gray-500 text-sm line-clamp-2">{svc.description}</p>
              </div>
              <button 
                onClick={() => handleDelete(svc.id)}
                className="text-red-500 hover:bg-red-50 hover:text-red-600 p-2.5 rounded-lg transition-colors opacity-50 group-hover:opacity-100"
                title="Delete Service"
              >
                <Trash2 size={18} />
              </button>
            </div>
          )
        })}
        {services.length === 0 && !showAdd && (
          <div className="col-span-1 md:col-span-2 text-center py-16 text-gray-500 bg-white rounded-2xl border-2 border-gray-100 border-dashed">
            <h3 className="text-lg font-bold text-[var(--color-navy)] mb-1">No Services Found</h3>
            <p className="text-sm">Click the "Add New Service" button to create your first service.</p>
          </div>
        )}
      </div>
    </div>
  );
}
