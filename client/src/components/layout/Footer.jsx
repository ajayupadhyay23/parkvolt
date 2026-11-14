import React from "react";
import { Zap, ShieldCheck, Heart, Terminal, Cpu } from "lucide-react";

/**
 * Footer Component
 * Architectural and system status footer for ParkVolt.
 */
export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#05080F] text-slate-400 py-12 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Col 1: Brand & Mission */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
              <Zap className="h-4 w-4 text-emerald-400" />
            </div>
            <span className="font-bold text-lg text-white">
              PARK<span className="text-emerald-400">VOLT</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            High-performance real-time IoT smart parking reservation and electric vehicle charging grid management platform.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>MERN Stack + Socket.IO v4.8</span>
          </div>
        </div>

        {/* Col 2: Architectural Modules */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
            Modules
          </h4>
          <ul className="space-y-2 text-xs">
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">
              Dynamic Slot Availability Engine
            </li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">
              EV Charging Session Telemetry
            </li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">
              Razorpay Order & Webhook Engine
            </li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">
              Interactive 3D Miniature City
            </li>
          </ul>
        </div>

        {/* Col 3: Academic & Interview Highlights */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
            Academic Viva Highlights
          </h4>
          <ul className="space-y-2 text-xs">
            <li className="text-slate-400">Concurrency Locking & Slot Collision Prevention</li>
            <li className="text-slate-400">Full Duplex Socket.IO State Synchronization</li>
            <li className="text-slate-400">HMAC-SHA256 Payment Verification</li>
            <li className="text-slate-400">Atomic MongoDB Transactions</li>
          </ul>
        </div>

        {/* Col 4: Live Health & Node Status */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
            System Telemetry
          </h4>
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Frontend Client</span>
              <span className="text-emerald-400 font-mono font-medium">Vite + React 18</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Design System</span>
              <span className="text-cyan-400 font-mono font-medium">Tailwind CSS</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">State Management</span>
              <span className="text-amber-400 font-mono font-medium">Zustand Store</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>
          &copy; {new Date().getFullYear()} ParkVolt Architecture. Built for academic viva and industry readiness.
        </div>
        <div className="flex items-center gap-2">
          <span>Engineered with precision for BTech Computer Science</span>
        </div>
      </div>
    </footer>
  );
};
