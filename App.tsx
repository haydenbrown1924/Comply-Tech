
import React, { useState, useEffect } from 'react';
import { UserRole, User } from './types';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AdminAnalytics from './components/AdminAnalytics';
import BusinessPortal from './components/BusinessPortal';
import EmployeePortal from './components/EmployeePortal';
import AssetRegister from './components/AssetRegister';
import QuotingPortal from './components/QuotingPortal';
import SchedulingPortal from './components/SchedulingPortal';
import SafetyPortal from './components/SafetyPortal';
import LaborPortal from './components/LaborPortal';
import MaterialPortal from './components/MaterialPortal';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<string>('dashboard');

  // Handle auto-login for demo or persistence
  useEffect(() => {
    const savedUser = localStorage.getItem('comply_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (selectedUser: User) => {
    setUser(selectedUser);
    localStorage.setItem('comply_user', JSON.stringify(selectedUser));
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('comply_user');
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard user={user} />;
      case 'analytics':
        return <AdminAnalytics />;
      case 'business':
        return <BusinessPortal />;
      case 'worker':
        return <EmployeePortal user={user} />;
      case 'assets':
        return <AssetRegister />;
      case 'quoting':
        return <QuotingPortal />;
      case 'scheduling':
        return <SchedulingPortal />;
      case 'safety':
        return <SafetyPortal />;
      case 'labor':
        return <LaborPortal />;
      case 'materials':
        return <MaterialPortal />;
      default:
        return <Dashboard user={user} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar 
        role={user.role} 
        activeView={currentView} 
        onViewChange={setCurrentView} 
        onLogout={handleLogout}
        userName={user.name}
      />
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 capitalize">
              {currentView.replace(/([A-Z])/g, ' $1').trim()}
            </h1>
            <p className="text-slate-500">Welcome back, {user.name}</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider">
               {user.role.replace('_', ' ')}
             </div>
             {user.businessName && (
               <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                 {user.businessName}
               </div>
             )}
          </div>
        </header>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
