"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock, Mail } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login
    setTimeout(() => {
      setLoading(false);
      // Hardcoded for demo purposes
      if (email === "admin@jugaduji.com" && password === "admin123") {
        router.push("/admin");
      } else {
        alert("Invalid credentials. Try admin@jugaduji.com / admin123");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[var(--color-bg-subtle)] relative overflow-hidden px-4">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-blue-gradient)] rounded-full filter blur-[100px] opacity-60 -z-10 translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-teal-gradient)] rounded-full filter blur-[100px] opacity-60 -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="w-full max-w-md bg-white rounded-[24px] shadow-[var(--shadow-stats)] border border-gray-100 p-8 sm:p-10 relative z-10 animate-fade-up">
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src="/brandwordmark.png"
              alt="Jugaduji Digital Solutions"
              width={400}
              height={150}
              className="h-15 sm:h-18 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[var(--color-navy)] mb-2">
            Admin Portal
          </h1>
          <p className="text-sm text-gray-500">
            Sign in to manage your digital solutions platform.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[var(--color-navy)] mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all outline-none text-sm text-gray-700 bg-gray-50 focus:bg-white"
                placeholder="admin@jugaduji.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-navy)] mb-1.5">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all outline-none text-sm text-gray-700 bg-gray-50 focus:bg-white"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:opacity-90 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all mt-4 disabled:opacity-70"
            style={{
              background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
            }}
          >
            {loading ? "Signing in..." : "Sign In to Dashboard"}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-[var(--color-primary)] hover:underline"
          >
            &larr; Back to Website
          </Link>
        </div>
      </div>
    </div>
  );
}
