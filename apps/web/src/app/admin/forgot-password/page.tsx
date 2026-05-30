"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";
import { API_BASE_URL } from "@/lib/env";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        alert("An error occurred. Please try again.");
      }
    } catch (e) {
      alert("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
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

        {!success ? (
          <>
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-[var(--color-navy)] mb-2">
                Forgot Password
              </h1>
              <p className="text-sm text-gray-500">
                Enter your admin email address to receive a password reset link.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
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

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:opacity-90 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all mt-4 disabled:opacity-70"
                style={{
                  background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
                }}
              >
                {loading ? "Sending..." : "Send Reset Link"}
                {!loading && <ArrowRight size={18} />}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[var(--color-navy)] mb-2">
                Check Your Email
              </h1>
              <p className="text-sm text-gray-500">
                If an account exists for <span className="font-semibold text-gray-700">{email}</span>, 
                you will receive a password reset link shortly.
              </p>
            </div>
            <Link
              href="/admin/login"
              className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-[var(--color-navy)] font-semibold py-3 px-6 rounded-xl transition-all"
            >
              Return to Login
            </Link>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link
            href="/admin/login"
            className="text-sm font-medium text-[var(--color-primary)] hover:underline"
          >
            &larr; Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
