
import React from 'react';
import { UserRole, User } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

interface DashboardProps {
  user: User;
}

const data = [
  { name: 'Mon', jobs: 4, revenue: 2400 },
  { name: 'Tue', jobs: 3, revenue: 1398 },
  { name: 'Wed', jobs: 2, revenue: 9800 },
  { name: 'Thu', jobs: 5, revenue: 3908 },
  { name: 'Fri', jobs: 8, revenue: 4800 },
  { name: 'Sat', jobs: 3, revenue: 3800 },
  { name: 'Sun', jobs: 1, revenue: 4300 },
];

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <div className="space-y-6">
      {/* Metric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Active Jobs', value: '12', trend: '+2', color: 'blue' },
          { label: 'Inquiries', value: '5', trend: 'New', color: 'indigo' },
          { label: 'Revenue (MTD)', value: '$24.5k', trend: '+12%', color: 'emerald' },
          { label: 'Compliance Score', value: '98%', trend: 'Good', color: 'amber' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
            <div className="mt-2 flex items-baseline justify-between">
              <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                stat.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                stat.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                'bg-slate-100 text-slate-600'
              }`}>
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-800">Job Productivity</h3>
            <select className="text-sm border-slate-200 rounded-lg">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="jobs" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Action Feed */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { type: 'Quote', msg: 'Quote #452 accepted by HomeBase', time: '2h ago' },
              { type: 'Safety', msg: 'Hazard reported at Site B', time: '4h ago' },
              { type: 'Job', msg: 'Worker Dave started "AC Repair"', time: '6h ago' },
              { type: 'Asset', msg: 'Vehicle #123 service logged', time: '1d ago' },
            ].map((activity, i) => (
              <div key={i} className="flex gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500 shrink-0"></div>
                <div>
                  <p className="text-sm text-slate-800">{activity.msg}</p>
                  <p className="text-xs text-slate-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-2 text-sm text-indigo-600 font-medium hover:bg-indigo-50 rounded-lg transition-colors">
            View All Logs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
