import React, { useState } from "react";
import { Zap, Menu, X, ShieldCheck, Compass, Sparkles, User, Layers, Activity } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

/**
 * Navbar Component
 * Global top navigation bar with brand identity, live status, navigation links, and view switchers.
 */
export const Navbar = ({ currentView, onOpenAuth, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "3D City Twin" },
    { id: "explore", label: "Explore Hubs" },
    { id: "charging", label: "EV Telemetry", icon: <Zap className="w-3 h-3 text-cyan-400" /> },
    { id: "admin", label: "Admin Grid" },
    { id: "design-system", label: "Design Tokens" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#080C14]/85 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => onNavigate?.("home")}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 p-[1.5px] shadow-glow-emerald group-hover:scale-105 transition-transform duration-200">
            <div className="h-full w-full bg-[#080C14] rounded-[10px] flex items-center justify-center">
              <Zap className="h-5 w-5 text-emerald-400 fill-emerald-400/20 group-hover:text-emerald-300 transition-colors" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-white">
                PARK<span className="text-emerald-400">VOLT</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                v1.0
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium tracking-wide">
              SMART PARKING & EV INFRASTRUCTURE
            </p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate?.(link.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 ${
                currentView === link.id
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-md"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </button>
          ))}
        </nav>

        {/* Live System Pill & Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Badge variant="emerald" size="sm" dot>
            Socket Gateway Online
          </Badge>

          <Button
            variant="outline"
            size="sm"
            icon={<User className="w-4 h-4 text-slate-400" />}
            onClick={() => onOpenAuth?.("login")}
          >
            Alex (DL 01 EV)
          </Button>

          <Button
            variant="primary"
            size="sm"
            icon={<Sparkles className="w-4 h-4" />}
            onClick={() => onNavigate?.("explore")}
          >
            Find Slots
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/60 border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.08] bg-[#0B101D] px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <Badge variant="emerald" size="sm" dot>
              Socket Gateway Online
            </Badge>
          </div>
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate?.(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 text-sm rounded-lg flex items-center gap-2 ${
                  currentView === link.id
                    ? "bg-emerald-500/20 text-emerald-400 font-bold"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </button>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <Button
              variant="outline"
              size="md"
              className="w-full justify-center"
              onClick={() => {
                onOpenAuth?.("login");
                setMobileMenuOpen(false);
              }}
            >
              Alex Rivera (Account)
            </Button>
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => {
                onNavigate?.("explore");
                setMobileMenuOpen(false);
              }}
            >
              Explore Smart Bays
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
