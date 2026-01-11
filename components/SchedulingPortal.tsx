
import React from 'react';

const SchedulingPortal: React.FC = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-4">
          <h3 className="font-bold text-lg">May 2024</h3>
          <div className="flex border rounded-lg overflow-hidden">
            <button className="p-2 hover:bg-slate-50 border-r">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="p-2 hover:bg-slate-50">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold">Week</button>
          <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold">Month</button>
          <button className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold">List</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50">
          {days.map(day => (
            <div key={day} className="p-4 text-center text-xs font-bold text-slate-500 uppercase tracking-widest">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 h-[600px]">
          {Array.from({ length: 35 }).map((_, i) => (
            <div key={i} className="border-r border-b border-slate-100 p-2 group hover:bg-slate-50 transition-colors">
              <span className="text-xs text-slate-400 font-medium group-hover:text-indigo-600">{i - 3 > 0 && i - 3 <= 31 ? i - 3 : ''}</span>
              {i === 15 && (
                <div className="mt-2 p-2 bg-indigo-50 border-l-2 border-indigo-600 rounded text-[10px] font-bold text-indigo-700 truncate cursor-pointer">
                  HVAC Repair #122
                </div>
              )}
              {i === 22 && (
                <div className="mt-2 p-2 bg-emerald-50 border-l-2 border-emerald-600 rounded text-[10px] font-bold text-emerald-700 truncate cursor-pointer">
                  Concrete Pour
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchedulingPortal;
