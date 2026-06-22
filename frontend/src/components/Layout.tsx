import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Input } from './ui/input'

const navItems = [
  { path: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
  { path: '/semesters', icon: 'calendar_month', label: 'Semesters' },
  { path: '/subjects', icon: 'menu_book', label: 'Subjects' },
  { path: '/assignments', icon: 'assignment', label: 'Assignments' },
  { path: '/exams', icon: 'quiz', label: 'Exams' },
  { path: '/analytics', icon: 'analytics', label: 'GPA & Analytics' },
]

const accountItems = [
  { path: '/notifications', icon: 'notifications', label: 'Notifications' },
  { path: '/profile', icon: 'person', label: 'Profile' },
]

export default function Layout() {
  const location = useLocation()
  const onDashboard = location.pathname === '/dashboard'

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <aside className="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col border-r border-outline-variant bg-surface-container-lowest py-lg shadow-sm lg:flex">
        <div className="px-lg mb-xl">
          <div className="flex items-center justify-center py-2">
            <img src="/src/assets/hero.png" alt="Gradify Logo" className="mb-xs h-12 w-auto object-contain" />
          </div>
          <p className="mt-2 text-center text-label-md font-label-md text-on-surface-variant">Track. Improve. Succeed.</p>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-md">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center gap-md rounded-lg px-md py-sm font-body-md transition-all duration-200 ease-in-out',
                  isActive
                    ? 'border-r-4 border-primary bg-surface-container-low font-bold text-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-highest',
                )}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            )
          })}

          <div className="mx-md mt-lg border-t border-outline-variant pb-sm pt-lg">
            <span className="text-label-sm font-label-sm uppercase tracking-wider text-outline">Account</span>
          </div>

          {accountItems.map((item) => {
            const isActive = location.pathname === item.path

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center gap-md rounded-lg px-md py-sm font-body-md transition-all duration-200 ease-in-out',
                  isActive
                    ? 'border-r-4 border-primary bg-surface-container-low font-bold text-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-highest',
                )}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </nav>

        <div className="mt-auto px-md">
          <button className="flex w-full items-center justify-center gap-sm rounded-lg bg-primary py-md font-label-md text-on-primary transition-opacity hover:opacity-90">
            <span className="material-symbols-outlined text-[18px]">add</span>
            New Entry
          </button>
        </div>
      </aside>

      <header className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b border-outline-variant bg-surface-container-lowest px-lg shadow-sm lg:left-64 lg:w-[calc(100%-16rem)]">
        <div className="flex w-1/3 items-center">
          <div className="relative w-full">
            <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-outline">search</span>
            <Input
              className="h-10 w-full rounded-lg border-none bg-surface-container-low pl-10 pr-4 text-body-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0"
              placeholder="Search subjects, assignments, exams..."
              type="text"
            />
          </div>
        </div>

        <div className="flex items-center gap-lg">
          <button className="relative text-on-surface-variant transition-colors hover:text-primary">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full border-2 border-white bg-error"></span>
          </button>
          <button className="text-on-surface-variant transition-colors hover:text-primary">
            <span className="material-symbols-outlined">help</span>
          </button>
          <div className="flex cursor-pointer items-center gap-md border-l border-outline-variant pl-2 transition-opacity hover:opacity-80">
            <div className="hidden text-right sm:block">
              <p className="font-label-md font-bold text-on-surface">Kavindu W.</p>
              <p className="text-[10px] text-on-surface-variant">Undergraduate</p>
            </div>
            <img
              className="h-10 w-10 rounded-full border border-outline-variant object-cover"
              alt="Profile"
              src="/src/assets/hero.png"
            />
          </div>
        </div>
      </header>

      <main className="min-h-screen pt-16 lg:ml-64">
        <div className="mx-auto max-w-[1600px] p-lg lg:p-xl">
          <Outlet />
        </div>
        {onDashboard ? null : null}
      </main>
    </div>
  )
}
