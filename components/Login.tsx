
import React from 'react';
import { UserRole, User } from '../types';

interface LoginProps {
  onLogin: (user: User) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const roles = [
    {
      id: 'admin-1',
      name: 'Software Manager',
      role: UserRole.ADMIN,
      description: 'Manage the entire platform and view cross-business analytics.',
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 'owner-1',
      name: 'John Business',
      role: UserRole.BUSINESS_OWNER,
      businessName: 'Ace Construction',
      description: 'Manage business inquiries, quotes, scheduling, and labor.',
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 'worker-1',
      name: 'Dave Worker',
      role: UserRole.WORKER,
      businessName: 'Ace Construction',
      description: 'Receive jobs, manage site safety, and log hours.',
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-2xl shadow-xl border border-slate-200">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-xl bg-indigo-600 text-white font-bold text-2xl shadow-lg">
            CT
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-slate-900">Comply Technologies</h2>
          <p className="mt-2 text-sm text-slate-600">Select a portal to continue</p>
        </div>
        
        <div className="mt-8 space-y-4">
          {roles.map((profile) => (
            <button
              key={profile.id}
              onClick={() => onLogin({
                id: profile.id,
                name: profile.name,
                email: `${profile.name.toLowerCase().replace(' ', '.')}@example.com`,
                role: profile.role,
                businessName: profile.businessName
              })}
              className="w-full flex items-center p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-left hover:border-indigo-300 hover:shadow-md group"
            >
              <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-white transition-colors">
                {profile.icon}
              </div>
              <div className="ml-4">
                <p className="text-sm font-semibold text-slate-900">{profile.name}</p>
                <p className="text-xs text-slate-500">{profile.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="pt-4 text-center">
          <p className="text-xs text-slate-400">© 2024 Comply Technologies Platform</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
