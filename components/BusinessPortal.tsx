
import React, { useState } from 'react';
import { Inquiry } from '../types';

const BusinessPortal: React.FC = () => {
  const [inquiries] = useState<Inquiry[]>([
    { id: 'INQ-001', clientName: 'Alice Smith', description: 'Request for full kitchen renovation quote.', status: 'New', date: '2024-05-20' },
    { id: 'INQ-002', clientName: 'Bob Builders Co.', description: 'Subcontracting inquiry for upcoming site development.', status: 'Quoted', date: '2024-05-18' },
    { id: 'INQ-003', clientName: 'Charlie Realty', description: 'Urgent repair for commercial AC unit.', status: 'Scheduled', date: '2024-05-19' },
    { id: 'INQ-004', clientName: 'Diana Prince', description: 'Initial site scoping for residential landscaping.', status: 'New', date: '2024-05-21' },
  ]);

  return (
    <div className="space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Total Inquiries</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-bold text-slate-900">24</h3>
            <span className="text-emerald-600 text-xs font-bold">+12% this month</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Conversion Rate</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-bold text-slate-900">68%</h3>
            <span className="text-blue-600 text-xs font-bold">Industry High</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Pending Responses</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-bold text-slate-900">5</h3>
            <span className="text-rose-600 text-xs font-bold">Action Needed</span>
          </div>
        </div>
      </div>

      {/* Inquiry Management */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-800">New & Active Inquiries</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">Export CSV</button>
            <button className="px-3 py-1.5 text-xs font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">Add Manually</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {inquiries.map((inq) => (
                <tr key={inq.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{inq.clientName}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 max-w-md truncate">{inq.description}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                      inq.status === 'New' ? 'bg-indigo-100 text-indigo-700' :
                      inq.status === 'Quoted' ? 'bg-blue-100 text-blue-700' :
                      inq.status === 'Scheduled' ? 'bg-emerald-100 text-emerald-700' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {inq.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{inq.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-indigo-600 text-xs font-bold hover:underline">Convert to Quote</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BusinessPortal;
