
import React, { useState } from 'react';
import { BusinessConfig, ALL_MODULES, ModuleId } from '../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

interface AdminAnalyticsProps {
  businesses: BusinessConfig[];
  onAddBusiness: (biz: BusinessConfig) => void;
  onUpdateModules: (bizId: string, modules: ModuleId[]) => void;
}

const platformData = [
  { month: 'Jan', revenue: 45000, users: 120 },
  { month: 'Feb', revenue: 52000, users: 145 },
  { month: 'Mar', revenue: 48000, users: 160 },
  { month: 'Apr', revenue: 61000, users: 195 },
  { month: 'May', revenue: 75000, users: 230 },
  { month: 'Jun', revenue: 89000, users: 310 },
];

const AdminAnalytics: React.FC<AdminAnalyticsProps> = ({ businesses, onAddBusiness, onUpdateModules }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBizName, setNewBizName] = useState('');
  const [newBizEmail, setNewBizEmail] = useState('');
  const [selectedBiz, setSelectedBiz] = useState<BusinessConfig | null>(null);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const newBiz: BusinessConfig = {
      id: `biz-${Date.now()}`,
      name: newBizName,
      ownerEmail: newBizEmail,
      enabledModules: ['business'], // Default core module
      status: 'Pending'
    };
    onAddBusiness(newBiz);
    setNewBizName('');
    setNewBizEmail('');
    setIsModalOpen(false);
  };

  const toggleModule = (biz: BusinessConfig, modId: ModuleId) => {
    const exists = biz.enabledModules.includes(modId);
    const newModules = exists 
      ? biz.enabledModules.filter(m => m !== modId)
      : [...biz.enabledModules, modId];
    onUpdateModules(biz.id, newModules);
  };

  return (
    <div className="space-y-8 pb-20">
      <div className="bg-gradient-to-r from-slate-900 to-indigo-900 rounded-2xl p-8 text-white shadow-xl">
        <h2 className="text-2xl font-bold mb-2">System Management</h2>
        <p className="opacity-70 max-w-lg">As the Software Manager, you control client onboarding and modular feature access for the entire Comply Technologies platform.</p>
        <div className="flex gap-10 mt-8">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-widest opacity-50 mb-1">Total MRR</p>
            <p className="text-3xl font-bold">$124,500</p>
          </div>
          <div className="border-l border-white/10 pl-10">
            <p className="text-[10px] uppercase font-bold tracking-widest opacity-50 mb-1">Active Projects</p>
            <p className="text-3xl font-bold">{businesses.length}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-slate-800">Business Management</h3>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:bg-indigo-700 transition-all active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          Add New Customer
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {businesses.map((biz) => (
          <div key={biz.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group hover:border-indigo-200 transition-colors">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg">
                  {biz.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{biz.name}</h4>
                  <p className="text-sm text-slate-500">{biz.ownerEmail}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  biz.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {biz.status}
                </span>
                <button className="p-2 text-slate-400 hover:text-slate-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Module Access Control (Payment Structure)</p>
              <div className="flex flex-wrap gap-3">
                {ALL_MODULES.map((mod) => {
                  const isEnabled = biz.enabledModules.includes(mod.id);
                  return (
                    <button
                      key={mod.id}
                      onClick={() => toggleModule(biz, mod.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                        isEnabled 
                          ? 'bg-indigo-50 border-indigo-200 text-indigo-700 shadow-sm' 
                          : 'bg-white border-slate-100 text-slate-400 hover:border-slate-300'
                      }`}
                    >
                      <div className={`w-3 h-3 rounded-full ${isEnabled ? 'bg-indigo-500 animate-pulse' : 'bg-slate-200'}`}></div>
                      {mod.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold mb-4">Market Traction</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={platformData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#6366f1" fillOpacity={1} fill="url(#colorRev)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
           <h3 className="font-bold mb-4">Feature Popularity</h3>
           <div className="space-y-4">
              {ALL_MODULES.slice(1).map((mod, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium text-slate-600">{mod.name}</span>
                    <span className="text-slate-400">85% Utilization</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${95 - (i * 10)}%` }}></div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Modal for adding business */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-8 border-b border-slate-100 bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900">Add New Customer</h3>
              <p className="text-sm text-slate-500 mt-1">Onboard a new business to Comply Technologies.</p>
            </div>
            <form onSubmit={handleCreate} className="p-8 space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Business Name</label>
                <input 
                  required
                  value={newBizName}
                  onChange={(e) => setNewBizName(e.target.value)}
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  placeholder="e.g. Acme Industries"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Owner Email</label>
                <input 
                  required
                  value={newBizEmail}
                  onChange={(e) => setNewBizEmail(e.target.value)}
                  type="email" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  placeholder="owner@example.com"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-4 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-all active:scale-95"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAnalytics;
