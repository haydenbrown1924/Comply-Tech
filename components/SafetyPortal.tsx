
import React from 'react';

const SafetyPortal: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="p-6 bg-rose-50 border border-rose-100 rounded-xl text-left hover:bg-rose-100 transition-colors">
          <div className="h-12 w-12 bg-rose-600 rounded-lg flex items-center justify-center text-white mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h4 className="font-bold text-rose-900">Report Incident</h4>
          <p className="text-sm text-rose-700 mt-1">Log injuries or near misses immediately.</p>
        </button>

        <button className="p-6 bg-amber-50 border border-amber-100 rounded-xl text-left hover:bg-amber-100 transition-colors">
          <div className="h-12 w-12 bg-amber-600 rounded-lg flex items-center justify-center text-white mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 className="font-bold text-amber-900">Hazard Register</h4>
          <p className="text-sm text-amber-700 mt-1">Identify and track workplace risks.</p>
        </button>

        <button className="p-6 bg-emerald-50 border border-emerald-100 rounded-xl text-left hover:bg-emerald-100 transition-colors">
          <div className="h-12 w-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h4 className="font-bold text-emerald-900">SHMS Compliance</h4>
          <p className="text-sm text-emerald-700 mt-1">Safety Health Management System docs.</p>
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold">Latest Compliance Log</h3>
          <button className="text-sm text-indigo-600 font-semibold">Download Audit Report</button>
        </div>
        <div className="p-6 overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              <tr>
                <th className="pb-4">Type</th>
                <th className="pb-4">Reporter</th>
                <th className="pb-4">Date</th>
                <th className="pb-4">Severity</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100">
              {[
                { type: 'Hazard', reporter: 'Dave W.', date: 'May 15, 2024', severity: 'Medium', status: 'In Review' },
                { type: 'Injury', reporter: 'Sam R.', date: 'May 10, 2024', severity: 'High', status: 'Closed' },
                { type: 'Incident', reporter: 'Admin', date: 'May 08, 2024', severity: 'Low', status: 'Open' },
              ].map((log, i) => (
                <tr key={i} className="group hover:bg-slate-50 transition-colors">
                  <td className="py-4 font-medium text-slate-900">{log.type}</td>
                  <td className="py-4 text-slate-600">{log.reporter}</td>
                  <td className="py-4 text-slate-600">{log.date}</td>
                  <td className="py-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                      log.severity === 'High' ? 'bg-rose-100 text-rose-700' :
                      log.severity === 'Medium' ? 'bg-amber-100 text-amber-700' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {log.severity}
                    </span>
                  </td>
                  <td className="py-4 text-slate-600">{log.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SafetyPortal;
