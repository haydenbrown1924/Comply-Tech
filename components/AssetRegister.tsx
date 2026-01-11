
import React from 'react';
import { Asset } from '../types';

const AssetRegister: React.FC = () => {
  const assets: Asset[] = [
    { id: '1', name: 'Ford Ranger XLT', serialNumber: 'VIN-923841', lastService: '2024-01-15', status: 'Operational' },
    { id: '2', name: 'Hilti Jackhammer', serialNumber: 'SN-44122', lastService: '2024-03-20', status: 'Maintenance' },
    { id: '3', name: 'Scaffolding Set A', serialNumber: 'INV-102', lastService: '2023-11-05', status: 'Operational' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
        <div className="flex gap-10">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1">Total Assets</p>
            <p className="text-2xl font-bold">142</p>
          </div>
          <div className="border-l pl-10 border-slate-100">
            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1">In Maintenance</p>
            <p className="text-2xl font-bold text-amber-600">4</p>
          </div>
          <div className="border-l pl-10 border-slate-100">
            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1">Avg Life Left</p>
            <p className="text-2xl font-bold">82%</p>
          </div>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
          Add New Asset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assets.map((asset) => (
          <div key={asset.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-5 border-b border-slate-100 flex justify-between items-start">
              <div>
                <h4 className="font-bold text-slate-900">{asset.name}</h4>
                <p className="text-xs text-slate-500">{asset.serialNumber}</p>
              </div>
              <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                asset.status === 'Operational' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
              }`}>
                {asset.status}
              </span>
            </div>
            <div className="p-5 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Last Service</span>
                <span className="text-slate-900 font-medium">{asset.lastService}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Assigned To</span>
                <span className="text-slate-900 font-medium">Site Team B</span>
              </div>
              <div className="pt-4 flex gap-2">
                <button className="flex-1 py-2 bg-slate-100 text-slate-700 rounded text-xs font-semibold hover:bg-slate-200 transition-colors">
                  Log Maintenance
                </button>
                <button className="flex-1 py-2 bg-slate-100 text-slate-700 rounded text-xs font-semibold hover:bg-slate-200 transition-colors">
                  View History
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetRegister;
