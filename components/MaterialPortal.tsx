
import React from 'react';

const MaterialPortal: React.FC = () => {
  const inventory = [
    { name: 'Copper Pipe 15mm', stock: '240m', min: '50m', price: '$8.20/m' },
    { name: 'PVC Junction Box', stock: '12', min: '15', price: '$4.50 ea' },
    { name: 'Structural Timber', stock: '85 pcs', min: '20 pcs', price: '$12.00 ea' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold">New Purchase Order</button>
        <button className="px-4 py-2 bg-white border rounded-lg text-sm font-bold">Inventory Audit</button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Item Description</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Current Stock</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Reorder Level</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Price</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {inventory.map((item, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm font-bold text-slate-900">{item.name}</td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  <span className={`${parseInt(item.stock) < parseInt(item.min) ? 'text-rose-600 font-bold' : ''}`}>
                    {item.stock}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">{item.min}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{item.price}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-indigo-600 text-xs font-bold">Order More</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MaterialPortal;
