import { Outlet } from 'react-router';
import { Header } from './layout/Header';
import { Sidebar } from './layout/Sidebar';
import { BettingSlip } from './betting/BettingSlip';
import { Toaster } from './ui/sonner';
import { useState } from 'react';

export function Root() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className="flex-1 p-4 md:p-6 lg:ml-64">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
        <BettingSlip />
      </div>
      <Toaster />
    </div>
  );
}