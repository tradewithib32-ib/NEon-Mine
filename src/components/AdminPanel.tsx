import React from 'react';

interface AdminPanelProps {
  onLogout: () => void;
}

export function AdminPanel({ onLogout }: AdminPanelProps) {
  return (
    <div className="flex flex-col h-screen w-full bg-[#050508] text-slate-300 font-sans p-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
        <button 
          onClick={onLogout} 
          className="px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/50 rounded-lg hover:bg-red-500/20 transition-colors"
        >
          Logout
        </button>
      </div>
      <div className="bg-[#0a0a12] border border-white/5 rounded-2xl p-8">
        <h2 className="text-xl font-semibold text-white mb-4">System Monitor</h2>
        <p className="text-slate-400">Monitoring all user activities...</p>
        {/* Placeholder for future activity monitoring implementation */}
      </div>
    </div>
  );
}
