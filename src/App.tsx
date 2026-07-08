/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="flex flex-col h-screen w-full bg-[#050508] text-slate-300 overflow-hidden font-sans">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0a0a12]/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">NEON<span className="text-cyan-400">MINE</span></h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Secure Enterprise Mining</p>
          </div>
        </div>
        <nav className="flex gap-8 text-sm font-medium">
          <a href="#" className="text-cyan-400 border-b-2 border-cyan-400 pb-1">Dashboard</a>
          <a href="#" className="hover:text-white transition-colors">Cloud Mining</a>
          <a href="#" className="hover:text-white transition-colors">Wallet</a>
          <a href="#" className="hover:text-white transition-colors">Referral</a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-xs font-semibold text-white">tanvir_admin</span>
            <span className="flex items-center gap-1 text-[10px] text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> 2FA Secured
            </span>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-white/10 bg-slate-800"></div>
        </div>
      </header>

      <main className="flex-1 flex gap-4 p-4 overflow-hidden">
        {/* Sidebar Activity & Chat */}
        <aside className="w-64 flex flex-col gap-4">
          <div className="flex-1 bg-[#0a0a12] border border-white/5 rounded-2xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Live Support</h3>
              <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-400 text-[10px] rounded">Active</span>
            </div>
            <div className="flex-1 overflow-hidden space-y-3 text-[11px]">
              <div className="bg-white/5 p-2 rounded-lg border-l-2 border-cyan-500">
                <p className="text-slate-400 font-semibold">System</p>
                <p>Withdrawal request #842 approved.</p>
              </div>
              <div className="bg-white/5 p-2 rounded-lg">
                <p className="text-slate-400 font-semibold">Sarah L.</p>
                <p>How do I upgrade to the Diamond plan?</p>
              </div>
              <div className="bg-white/5 p-2 rounded-lg">
                <p className="text-slate-400 font-semibold">Support Bot</p>
                <p>Welcome! We are online 24/7.</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5">
              <input type="text" placeholder="Type a message..." className="w-full bg-[#050508] border border-white/10 rounded-lg py-2 px-3 text-xs outline-none focus:border-cyan-500/50 transition-colors" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 border border-indigo-500/30 rounded-2xl p-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2">Referral Program</h3>
            <p className="text-[11px] text-slate-400 mb-3">Invite friends and earn 15% of their mining rewards.</p>
            <div className="flex gap-2">
              <div className="flex-1 bg-black/40 border border-white/5 rounded px-2 py-1.5 text-[10px] font-mono truncate">neon-mine.io/ref/tanvir</div>
              <button className="bg-indigo-500 hover:bg-indigo-400 text-white p-1.5 rounded transition-colors">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              </button>
            </div>
          </div>
        </aside>

        {/* Central Mining Dashboard */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Key Metrics Row */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-[#0a0a12] border border-white/5 p-4 rounded-2xl">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Active Hashrate</p>
              <h4 className="text-2xl font-bold text-white">142.5 <span className="text-cyan-400 text-sm">TH/s</span></h4>
              <div className="mt-2 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="bg-cyan-500 h-full w-3/4 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
              </div>
            </div>
            <div className="bg-[#0a0a12] border border-white/5 p-4 rounded-2xl">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Total Balance</p>
              <h4 className="text-2xl font-bold text-white">0.4829 <span className="text-amber-400 text-sm">BTC</span></h4>
              <p className="text-[10px] text-emerald-400 mt-1">≈ $21,492.50 USD</p>
            </div>
            <div className="bg-[#0a0a12] border border-white/5 p-4 rounded-2xl">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Active Workers</p>
              <h4 className="text-2xl font-bold text-white uppercase">12 <span className="text-emerald-400 text-xs">Online</span></h4>
              <p className="text-[10px] text-slate-600 mt-1">Next block in 4m 12s</p>
            </div>
            <div className="bg-cyan-500 border border-cyan-400 p-4 rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.2)] group cursor-pointer">
              <p className="text-[10px] text-white/80 uppercase tracking-widest mb-1">Quick Action</p>
              <h4 className="text-lg font-bold text-white">Withdraw Funds</h4>
              <p className="text-[10px] text-white/60 mt-1">Instant Gateway Active</p>
            </div>
          </div>

          {/* Analytics Graph Section */}
          <div className="flex-1 bg-[#0a0a12] border border-white/5 rounded-2xl p-6 relative flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-bold text-white">Mining Performance</h2>
                <p className="text-xs text-slate-500">Real-time hashrate and efficiency metrics</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] text-slate-400">1H</button>
                <button className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-md text-[10px] text-cyan-400">24H</button>
                <button className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] text-slate-400">7D</button>
              </div>
            </div>
            
            <div className="flex-1 w-full relative flex items-end gap-2">
              <div className="h-[40%] flex-1 bg-cyan-500/10 border-t border-cyan-500/50"></div>
              <div className="h-[65%] flex-1 bg-cyan-500/10 border-t border-cyan-500/50 shadow-[0_-5px_15px_rgba(6,182,212,0.1)]"></div>
              <div className="h-[55%] flex-1 bg-cyan-500/10 border-t border-cyan-500/50"></div>
              <div className="h-[80%] flex-1 bg-cyan-500/20 border-t-2 border-cyan-500 shadow-[0_-5px_20px_rgba(6,182,212,0.3)]"></div>
              <div className="h-[70%] flex-1 bg-cyan-500/10 border-t border-cyan-500/50"></div>
              <div className="h-[85%] flex-1 bg-cyan-500/20 border-t-2 border-cyan-500 shadow-[0_-5px_20px_rgba(6,182,212,0.3)]"></div>
              <div className="h-[60%] flex-1 bg-cyan-500/10 border-t border-cyan-500/50"></div>
              <div className="h-[75%] flex-1 bg-cyan-500/20 border-t-2 border-cyan-500"></div>
              <div className="h-[45%] flex-1 bg-cyan-500/10 border-t border-cyan-500/50"></div>
            </div>
            
            <div className="absolute bottom-16 right-10 flex gap-6 text-[10px] text-slate-500">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-500"></span> Hashrate</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-indigo-500"></span> Difficulty</span>
            </div>
          </div>

          {/* Recent Activity Table */}
          <div className="bg-[#0a0a12] border border-white/5 rounded-2xl p-4">
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-3">Recent System Activity</h3>
            <table className="w-full text-xs">
              <thead>
                <tr className="text-left text-slate-600">
                  <th className="pb-2 font-medium">Operation</th>
                  <th className="pb-2 font-medium">Address / Node</th>
                  <th className="pb-2 font-medium">Amount</th>
                  <th className="pb-2 font-medium text-right">Status</th>
                </tr>
              </thead>
              <tbody className="text-slate-400 divide-y divide-white/5">
                <tr>
                  <td className="py-2">Mining Payout</td>
                  <td className="py-2 font-mono">3J98t1WpEx...u7r</td>
                  <td className="py-2 text-white">+0.0024 BTC</td>
                  <td className="py-2 text-right text-emerald-400">Completed</td>
                </tr>
                <tr>
                  <td className="py-2">Withdrawal</td>
                  <td className="py-2 font-mono">1BvBMSEYst...fP2</td>
                  <td className="py-2 text-white">-0.0500 BTC</td>
                  <td className="py-2 text-right text-amber-400">Pending...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Contextual Panel */}
        <aside className="w-64 flex flex-col gap-4">
          <div className="bg-gradient-to-b from-[#1a1a2e] to-[#0a0a12] border border-white/5 rounded-2xl p-5 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/50 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 className="text-sm font-bold text-white">Security Check</h3>
            <p className="text-[11px] text-slate-400 mt-2">AES-256 Encryption active. Your data is backed up to secure cloud storage every 15 minutes.</p>
            <button className="mt-4 w-full py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold hover:bg-white/10 transition-colors">Security Settings</button>
          </div>

          <div className="flex-1 bg-[#0a0a12] border border-white/5 rounded-2xl p-4">
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-4">System Performance</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-slate-400">Global Hashrate</span>
                  <span className="text-cyan-400">98% Normal</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full">
                  <div className="h-full w-[98%] bg-cyan-400"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-slate-400">Network Latency</span>
                  <span className="text-emerald-400">24ms</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full">
                  <div className="h-full w-[25%] bg-emerald-400"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-slate-400">DB Query Speed</span>
                  <span className="text-blue-400">0.002s</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full">
                  <div className="h-full w-[15%] bg-blue-400"></div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Bottom Status Bar */}
      <footer className="px-6 py-2 bg-[#0a0a12] border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Server Status: Operational
          </span>
          <span>Block Height: 812,442</span>
          <span>Difficulty: 64.67 T</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="uppercase tracking-widest">Push Notifications: Enabled</span>
          <span className="text-slate-400">Version 2.4.0-PRO</span>
        </div>
      </footer>
    </div>
  );
}
