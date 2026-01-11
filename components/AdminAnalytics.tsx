
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

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const newBiz: BusinessConfig = {
      id: `biz-${Date.now()}`,
      name: newBizName,
      ownerEmail: newBizEmail,
      enabledModules: ['business'],
      status: 'Active'
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
      {/* Header Card */}
      <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden border border-slate-800">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2">Platform Administration</h2>
          <p className="text-slate-400 max-w-lg mb-8">Manage customer subscriptions, module access, and global platform revenue.</p>
          <div className="flex flex-wrap gap-12">
            <div>
              <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500 mb-2">Global Monthly Revenue</p>
              <p className="text-4xl font-bold text-indigo-400">$142,850 <span className="text-sm font-normal text-emerald-400 ml-2">↑ 14%</span></p>
            </div>
            <div className="border-l border-slate-800 pl-12">
              <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500 mb-2">Managed Clients</p>
              <p className="text-4xl font-bold text-white">{businesses.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section Header */}
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Client Portfolio</h3>
          <p className="text-sm text-slate-500">Enable or disable modules to adjust client billing.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          Add New Customer
        </button>
      </div>

      {/* Business Cards */}
      <div className="grid grid-cols-1 gap-8">
        {businesses.map((biz) => (
          <div key={biz.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
            {/* Left: Client Info */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-slate-100 bg-slate-50/50 md:w-80 shrink-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-2xl bg-white shadow-sm border border-slate-200 text-indigo-600 flex items-center justify-center font-black text-xl">
                  {biz.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 leading-tight">{biz.name}</h4>
                  <p className="text-xs text-slate-500 truncate w-32">{biz.ownerEmail}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 uppercase font-bold tracking-tighter">Status</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold">{biz.status}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 uppercase font-bold tracking-tighter">Plan Value</span>
                  <span className="font-black text-slate-900">${(biz.enabledModules.length * 149).toLocaleString()}/mo</span>
                </div>
                <div className="pt-4">
                  <button className="w-full py-2.5 text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                    Edit Client Details
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right: Module Management */}
            <div className="p-8 flex-1">
              <div className="flex items-center justify-between mb-6">
                <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Subscription Module Access</h5>
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                  {biz.enabledModules.length} Modules Active
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {ALL_MODULES.map((mod) => {
                  const isEnabled = biz.enabledModules.includes(mod.id);
                  const isCore = mod.id === 'business'; // Business hub is usually core
                  return (
                    <button
                      key={mod.id}
                      disabled={isCore}
                      onClick={() => toggleModule(biz, mod.id)}
                      className={`flex items-center justify-between p-4 rounded-2xl text-sm font-bold border transition-all text-left group ${
                        isEnabled 
                          ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-100' 
                          : 'bg-white border-slate-100 text-slate-400 hover:border-slate-300 hover:text-slate-600'
                      } ${isCore ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <span>{mod.name}</span>
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center border ${
                        isEnabled ? 'bg-white border-white text-indigo-600' : 'bg-slate-50 border-slate-200 text-transparent'
                      }`}>
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for adding business */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-10 border-b border-slate-100 bg-slate-50/80">
              <h3 className="text-2xl font-black text-slate-900">Onboard Client</h3>
              <p className="text-sm text-slate-500 mt-1">Start a new Comply Technologies subscription.</p>
            </div>
            <form onSubmit={handleCreate} className="p-10 space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Company Name</label>
                <input 
                  required
                  value={newBizName}
                  onChange={(e) => setNewBizName(e.target.value)}
                  type="text" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium"
                  placeholder="e.g. Apex Civil"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Owner Contact Email</label>
                <input 
                  required
                  value={newBizEmail}
                  onChange={(e) => setNewBizEmail(e.target.value)}
                  type="email" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium"
                  placeholder="director@company.com"
                />
              </div>
              <div className="flex gap-4 pt-6">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-4 bg-slate-100 text-slate-600 font-bold rounded-2xl hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-6 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95"
                >
                  Add Business
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
