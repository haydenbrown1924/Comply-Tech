
import React from 'react';
import { User } from '../types';

interface EmployeePortalProps {
  user: User;
}

const EmployeePortal: React.FC<EmployeePortalProps> = ({ user }) => {
  const myJobs = [
    { id: 'J-122', title: 'HVAC Maintenance', client: 'Building A', time: '08:00 AM', status: 'Current' },
    { id: 'J-123', title: 'Safety Audit', client: 'West Wing', time: '01:00 PM', status: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-lg">
        <h3 className="text-lg font-bold">Good morning, {user.name.split(' ')[0]}!</h3>
        <p className="opacity-80 text-sm mt-1">You have 2 jobs assigned for today.</p>
        <button className="mt-6 bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-bold shadow-sm">
          Clock In Now
        </button>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold text-slate-800">Your Schedule Today</h4>
        {myJobs.map((job) => (
          <div key={job.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="h-12 w-12 bg-slate-50 rounded-lg flex flex-col items-center justify-center text-slate-500 border border-slate-100">
               <span className="text-[10px] font-bold uppercase tracking-tighter">May</span>
               <span className="text-lg font-bold leading-none">20</span>
            </div>
            <div className="flex-1">
              <h5 className="font-bold text-slate-900">{job.title}</h5>
              <p className="text-xs text-slate-500">{job.client} • {job.time}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
               <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                 job.status === 'Current' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
               }`}>
                 {job.status}
               </span>
               <button className="text-indigo-600 text-xs font-semibold underline">Details</button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="p-4 bg-white border border-slate-200 rounded-xl text-center shadow-sm hover:border-indigo-300 transition-colors">
          <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-sm font-bold text-slate-800">Timesheets</span>
        </button>
        <button className="p-4 bg-white border border-slate-200 rounded-xl text-center shadow-sm hover:border-indigo-300 transition-colors">
          <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span className="text-sm font-bold text-slate-800">Log Photos</span>
        </button>
      </div>
    </div>
  );
};

export default EmployeePortal;
