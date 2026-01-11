
import React from 'react';

const LaborPortal: React.FC = () => {
  const staff = [
    { name: 'Dave Worker', role: 'Lead Technician', hours: '38.5', status: 'Working' },
    { name: 'Sarah Jones', role: 'Apprentice', hours: '40.0', status: 'On Break' },
    { name: 'Mike Ross', role: 'Project Manager', hours: '42.0', status: 'Offline' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4">Worker Status</h3>
          <div className="space-y-4">
            {staff.map((person, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
                    {person.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{person.name}</p>
                    <p className="text-xs text-slate-500">{person.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-1">{person.status}</p>
                  <div className={`h-2 w-full rounded-full bg-slate-200 overflow-hidden`}>
                     <div className={`h-full ${person.status === 'Working' ? 'bg-emerald-500' : person.status === 'On Break' ? 'bg-amber-500' : 'bg-slate-400'} w-full`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
           <div>
            <h3 className="font-bold text-slate-800 mb-2">Payroll Summary</h3>
            <p className="text-xs text-slate-500 mb-6">Estimated spend for current period: May 15 - May 30</p>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Gross Wages</span>
                <span className="font-bold">$12,450.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Superannuation</span>
                <span className="font-bold">$1,369.50</span>
              </div>
              <div className="flex justify-between text-sm pt-3 border-t font-bold text-indigo-600">
                <span>Total Liability</span>
                <span>$13,819.50</span>
              </div>
            </div>
           </div>
           <button className="mt-8 w-full py-3 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors">
             Generate ABA Payment File
           </button>
        </div>
      </div>
    </div>
  );
};

export default LaborPortal;
