
import React, { useState, useEffect } from 'react';
import { UserRole, User, BusinessConfig, ModuleId } from './types';
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

const INITIAL_BUSINESSES: BusinessConfig[] = [
  { 
    id: 'biz-ace', 
    name: 'Ace Construction', 
    ownerEmail: 'john.business@example.com', 
    enabledModules: ['business', 'quoting', 'scheduling', 'assets', 'labor', 'materials', 'safety'],
    status: 'Active'
  },
  { 
    id: 'biz-fast', 
    name: 'Fast Electrical', 
    ownerEmail: 'fast.elec@example.com', 
    enabledModules: ['business', 'scheduling', 'safety'],
    status: 'Active'
  }
];

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<string>('dashboard');
  const [businesses, setBusinesses] = useState<BusinessConfig[]>(() => {
    const saved = localStorage.getItem('comply_businesses');
    return saved ? JSON.parse(saved) : INITIAL_BUSINESSES;
  });

  useEffect(() => {
    localStorage.setItem('comply_businesses', JSON.stringify(businesses));
  }, [businesses]);

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

  const handleAddBusiness = (newBiz: BusinessConfig) => {
    setBusinesses([...businesses, newBiz]);
  };

  const handleUpdateModules = (bizId: string, modules: ModuleId[]) => {
    setBusinesses(businesses.map(b => b.id === bizId ? { ...b, enabledModules: modules } : b));
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  // Get current user's business config
  const userBiz = businesses.find(b => b.id === user.businessId || b.name === user.businessName);
  const enabledModules = userBiz?.enabledModules || [];

  const renderContent = () => {
    // If not Admin, check if current view is restricted
    if (user.role !== UserRole.ADMIN && currentView !== 'dashboard') {
      if (!enabledModules.includes(currentView as ModuleId)) {
        return <div className="p-8 text-center text-slate-500 italic">This module is not enabled for your subscription.</div>;
      }
    }

    switch (currentView) {
      case 'dashboard':
        return <Dashboard user={user} />;
      case 'analytics':
        return <AdminAnalytics businesses={businesses} onAddBusiness={handleAddBusiness} onUpdateModules={handleUpdateModules} />;
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
        enabledModules={enabledModules}
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
