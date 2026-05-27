import React, { useState, useEffect } from "react";
import { Save, User, Lock, Eye, EyeOff, Upload } from "lucide-react";
import { API_BASE_URL } from "@/lib/env";

export default function AdminSettings() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/api/admin/settings`);
      const data = await res.json();
      if (data) {
        setProfilePhoto(data.profile_photo || "");
        setPassword(data.admin_password || "");
        setConfirmPassword(data.admin_password || "");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match!" });
      return;
    }

    try {
      setSaving(true);
      setMessage(null);
      const res = await fetch(`${API_BASE_URL}/api/admin/settings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          admin_password: password,
          profile_photo: profilePhoto,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage({ type: "success", text: "Settings saved successfully!" });
      } else {
        setMessage({ type: "error", text: data.error || "Failed to save settings." });
      }
    } catch (e) {
      setMessage({ type: "error", text: "Server connection failed." });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-8 text-gray-500 font-medium animate-pulse">Loading settings...</div>;
  }

  return (
    <div className="p-6 sm:p-8 max-w-4xl mx-auto animate-fade-up">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-navy)] mb-2">Profile & Settings</h1>
        <p className="text-gray-500">Configure your administrator account details, profile picture, and security.</p>
      </div>

      {message && (
        <div className={`p-4 rounded-xl mb-6 text-sm font-semibold border ${
          message.type === "success" 
            ? "bg-green-50 border-green-200 text-green-700" 
            : "bg-red-50 border-red-200 text-red-700"
        }`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile Photo Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-[var(--color-navy)] mb-4 flex items-center gap-2">
            <User size={20} className="text-[var(--color-primary)]" />
            Profile Photo
          </h3>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full border border-gray-200 bg-gray-50 overflow-hidden shrink-0 flex items-center justify-center relative shadow-inner">
              {profilePhoto ? (
                <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <span className="text-2xl font-bold text-gray-400">AD</span>
              )}
            </div>
            <div className="flex-1 w-full space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Upload Profile Photo</label>
                <div className="relative flex items-center gap-3">
                  <label className="flex items-center gap-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 px-4 py-2.5 rounded-xl cursor-pointer text-sm font-semibold text-gray-600 transition-colors">
                    <Upload size={16} />
                    Choose File
                    <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                  </label>
                  <span className="text-xs text-gray-400">PNG, JPG or WEBP. Max 2MB.</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Or Paste Photo URL</label>
                <input
                  type="text"
                  value={profilePhoto}
                  onChange={(e) => setProfilePhoto(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-[var(--color-primary)] transition-all text-sm"
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Change Password Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-[var(--color-navy)] mb-4 flex items-center gap-2">
            <Lock size={20} className="text-[var(--color-primary)]" />
            Security Settings
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">New Admin Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-[var(--color-primary)] transition-all"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-[var(--color-primary)] transition-all"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:opacity-90 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all disabled:opacity-75"
        >
          <Save size={18} />
          {saving ? "Saving Changes..." : "Save Settings"}
        </button>
      </form>
    </div>
  );
}
