import { ReactNode } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';

interface AppLayoutProps {
  children: ReactNode;
  hideNav?: boolean;
  hideSidebar?: boolean;
}

export default function AppLayout({ 
  children, 
  hideNav = false,
  hideSidebar = false 
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {!hideNav && <Navbar />}
      <div className="flex flex-1">
        {!hideSidebar && <Sidebar />}
        <main className="flex-1 pt-2 pb-8 overflow-auto">
          <div className="container mx-auto px-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}