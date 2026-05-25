"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  FileText,
  Settings,
  LogOut,
  Bell,
  Menu,
} from "lucide-react";

import AdminFaqs from "./components/AdminFaqs";
import AdminServices from "./components/AdminServices";
import AdminBlogs from "./components/AdminBlogs";
import AdminSettings from "./components/AdminSettings";

export default function AdminDashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleLogout = () => {
    // Basic logout simulation
    router.push("/admin/login");
  };

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "FAQs", icon: FileText },
    { label: "Services", icon: Briefcase },
    { label: "Blog Posts", icon: FileText },
    { label: "Clients", icon: Users },
    { label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? "w-64" : "w-20"
          } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col fixed h-full z-20`}
      >
        <div className="h-19 flex items-center justify-center border-b border-gray-100">
          <Link href="/">
            {sidebarOpen ? (
              <Image
                src="/brandwordmark.png"
                alt="Jugaduji"
                width={120}
                height={30}
                className="h-6 w-auto"
              />
            ) : (
              <Image
                src="/jugadujibrandlogo.png"
                alt="J"
                width={30}
                height={30}
                className="w-8 h-8 object-contain"
              />
            )}
          </Link>
        </div>

        <nav className="flex-1 py-6 px-3 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${activeTab === item.label
                  ? "bg-[var(--color-primary)] text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
                } ${!sidebarOpen && "justify-center"}`}
              title={!sidebarOpen ? item.label : ""}
            >
              <item.icon size={20} className={activeTab === item.label ? "text-white" : "text-gray-500"} />
              {sidebarOpen && <span className="font-medium text-sm">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button
            onClick={handleLogout}
            className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors ${!sidebarOpen && "justify-center"
              }`}
            title={!sidebarOpen ? "Logout" : ""}
          >
            <LogOut size={20} />
            {sidebarOpen && <span className="font-medium text-sm">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-20"}`}>
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-500 hover:text-gray-700"
            >
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-semibold text-[var(--color-navy)]">Overview</h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-gray-600 relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white font-bold text-sm shadow-sm">
              AD
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        {activeTab === "Dashboard" && (
          <div className="p-6 sm:p-8 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-navy)] mb-2">
              Welcome back, Admin 👋
            </h1>
            <p className="text-gray-500">
              Here is what is happening with your website today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Views", value: "12,450", change: "+14%", positive: true },
              { label: "Active Services", value: "6", change: "0%", positive: true },
              { label: "New Leads", value: "48", change: "+22%", positive: true },
              { label: "Bounce Rate", value: "42%", change: "-5%", positive: true },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-3xl font-bold text-[var(--color-navy)]">{stat.value}</h3>
                  <span
                    className={`text-sm font-medium ${stat.positive ? "text-green-600" : "text-red-600"
                      }`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-bold text-[var(--color-navy)] mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: "New Contact Submission", time: "2 hours ago", from: "John Doe" },
                { action: "System Update", time: "5 hours ago", from: "System" },
                { action: "Blog Post Published", time: "1 day ago", from: "Admin" },
              ].map((activity, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between pb-4 border-b border-gray-50 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-medium text-[var(--color-navy)]">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500">by {activity.from}</p>
                  </div>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

        {/* FAQs Management */}
        {activeTab === "FAQs" && <AdminFaqs />}

        {/* Services Management */}
        {activeTab === "Services" && <AdminServices />}

        {/* Blog Posts Management */}
        {activeTab === "Blog Posts" && <AdminBlogs />}

        {/* Settings Management */}
        {activeTab === "Settings" && <AdminSettings />}

        {/* Placeholder for other tabs */}
        {activeTab !== "Dashboard" && activeTab !== "FAQs" && activeTab !== "Services" && activeTab !== "Blog Posts" && activeTab !== "Settings" && (
          <div className="p-6 sm:p-8 flex items-center justify-center min-h-[500px]">
            <div className="text-center text-gray-500">
              <h2 className="text-xl font-bold text-[var(--color-navy)]">{activeTab} Module</h2>
              <p className="mt-2 text-sm">This module is currently under construction.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
