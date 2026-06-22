import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Input } from './ui/input';

const navItems = [
  { path: '/', icon: 'dashboard', label: 'Dashboard' },
  { path: '/semesters', icon: 'calendar_month', label: 'Semesters' },
  { path: '/subjects', icon: 'menu_book', label: 'Subjects' },
  { path: '/assignments', icon: 'assignment', label: 'Assignments' },
  { path: '/exams', icon: 'quiz', label: 'Exams' },
  { path: '/analytics', icon: 'analytics', label: 'GPA & Analytics' },
];

const accountItems = [
  { path: '/notifications', icon: 'notifications', label: 'Notifications' },
  { path: '/profile', icon: 'person', label: 'Profile' },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-container-lowest border-r border-outline-variant shadow-sm z-50 flex flex-col py-lg">
        <div className="px-lg mb-xl">
          <div className="flex items-center justify-center py-2">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKg_dwDTQen7folavczNqKFcVIow23KG-gN5z3gefHEmMw2G2t7IelmH5dSGhAt0nzl0ciFkc61oeDeHO2jiay1nbSTNUqEPjR6W_9Nog_l1qbPmCOFvsVYnGgHSBfH9mqQxfFvLXepnlPuLzkzEQt601MoUjY5z8ytd3MM9InW32k1oZh9kAD1v7e-2FoLHp7Wgl1Yw2B3pJ4QOuaQYIGmb9S-76mprm-nZ81WCLUrySgorH7HLO0guu3Fx94r8iae-HV3XfX2dTp" alt="Gradify Logo" className="h-10 w-auto object-contain mb-xs" />
          </div>
          <p className="text-label-md font-label-md text-on-surface-variant text-center mt-2">Track. Improve. Succeed.</p>
        </div>

        <nav className="flex-1 px-md space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-md px-md py-sm rounded-lg transition-all duration-200 ease-in-out font-body-md",
                  isActive
                    ? "text-primary font-bold border-r-4 border-primary bg-surface-container-low"
                    : "text-on-surface-variant hover:bg-surface-container-highest"
                )}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            );
          })}

          <div className="pt-lg pb-sm border-t border-outline-variant mt-lg mx-md">
            <span className="text-label-sm font-label-sm text-outline uppercase tracking-wider">Account</span>
          </div>

          {accountItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-md px-md py-sm rounded-lg transition-all duration-200 ease-in-out font-body-md",
                  isActive
                    ? "text-primary font-bold border-r-4 border-primary bg-surface-container-low"
                    : "text-on-surface-variant hover:bg-surface-container-highest"
                )}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="px-md mt-auto">
          <button className="w-full py-md bg-primary text-on-primary rounded-lg font-label-md flex items-center justify-center gap-sm hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-[18px]">add</span>
            New Entry
          </button>
        </div>
      </aside>

      {/* Header */}
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface-container-lowest border-b border-outline-variant shadow-sm z-40 flex items-center justify-between px-lg">
        <div className="flex items-center w-1/3">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline z-10 pointer-events-none">search</span>
            <Input 
                className="w-full bg-surface-container-low border-none rounded-lg pl-10 pr-4 h-10 text-body-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0" 
                placeholder="Search subjects, assignments, exams..." 
                type="text" 
            />
          </div>
        </div>
        
        <div className="flex items-center gap-lg">
          <button className="text-on-surface-variant hover:text-primary transition-colors relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">help</span>
          </button>
          <div className="flex items-center gap-md cursor-pointer hover:opacity-80 transition-opacity pl-2 border-l border-outline-variant">
            <div className="text-right hidden sm:block">
              <p className="font-label-md text-on-surface font-bold">Kavindu W.</p>
              <p className="text-[10px] text-on-surface-variant">Undergraduate</p>
            </div>
            <img 
              className="w-10 h-10 rounded-full border border-outline-variant object-cover" 
              alt="Profile" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7PGh3QgnHWbvv9I8Vt4YG8a7M5OESpeGBYr7T8hDQlESrY0CjCqEBNf0xPoXap0VKyLZ7yhxozW-S44mvoQgCreyJWSa-Vz72GLxbskCdITgaDtNuTMHRhT48OVxkvcobWB0bZLDRdX9WLVIAgNMCxc-R8YWod2wUTids5TZ_8pQkuJhtncvf7yvhXMzqkXSGPnTu2GzLmO1J_GZ8elpQwKV0uVRi_TS4A4W0CUPJdAwoGn8ilU5C7UpcFQBrBfldd2VsUZmnpHuM" 
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-64 pt-16 min-h-screen">
        <div className="p-lg lg:p-xl max-w-[1600px] mx-auto">
           <Outlet />
        </div>
      </main>
    </div>
  );
}
