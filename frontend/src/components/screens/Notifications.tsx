import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Notifications() {
  return (
    <div className="space-y-lg">

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-lg">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-xs">Notification Center</h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">Stay informed about assignments, exams, GPA updates, academic goals, and important university activities.</p>
        </div>
        <div className="flex items-center gap-sm">
          <Button variant="outline" className="flex items-center gap-xs rounded-xl">
            <span className="material-symbols-outlined text-[20px]">done_all</span>
            Mark All as Read
          </Button>
          <Button variant="outline" className="flex items-center gap-xs rounded-xl">
            <span className="material-symbols-outlined text-[20px]">settings</span>
            Notification Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-md mb-xl">
        {[
          { label: 'Total Notifications', value: '156', icon: 'bar_chart', iconBg: 'bg-surface-container-low', iconColor: 'text-primary' },
          { label: 'Unread', value: '8', valueColor: 'text-secondary', icon: 'mark_email_unread', iconBg: 'bg-secondary-fixed', iconColor: 'text-on-secondary-fixed-variant' },
          { label: 'Deadlines', value: '4', valueColor: 'text-error', icon: 'timer', iconBg: 'bg-error-container', iconColor: 'text-on-error-container' },
          { label: 'Exams', value: '2', valueColor: 'text-primary', icon: 'school', iconBg: 'bg-primary-fixed', iconColor: 'text-on-primary-fixed-variant' },
          { label: 'Goal Updates', value: '3', valueColor: 'text-secondary', icon: 'emoji_events', iconBg: 'bg-secondary-fixed', iconColor: 'text-on-secondary-fixed-variant' },
          { label: 'GPA Alerts', value: '2', valueColor: 'text-on-surface', icon: 'trending_up', iconBg: 'bg-surface-container-high', iconColor: 'text-tertiary' },
        ].map(({ label, value, valueColor, icon, iconBg, iconColor }) => (
          <div key={label} className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl shadow-sm hover:shadow-md transition-shadow group">
            <p className="text-label-sm text-on-surface-variant mb-xs">{label}</p>
            <div className="flex items-end justify-between">
              <span className={`text-headline-md font-bold ${valueColor || 'text-on-surface'}`}>{value}</span>
              <div className={`w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center ${iconColor} group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-[20px]">{icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tab bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-lg mb-lg border-b border-outline-variant overflow-x-auto">
        <div className="flex items-center gap-xl whitespace-nowrap">
          <button className="pb-md border-b-2 border-primary text-primary font-semibold text-body-md flex items-center gap-sm">
            All Notifications
            <Badge className="px-sm py-[2px] bg-primary text-on-primary text-[10px] rounded-full border-0">156</Badge>
          </button>
          {['Assignments','Exams','GPA Updates','Academic Goals','System'].map(tab => (
            <button key={tab} className="pb-md border-b-2 border-transparent text-on-surface-variant hover:text-on-surface transition-colors font-medium text-body-md">{tab}</button>
          ))}
        </div>
        <div className="flex items-center gap-md pb-md md:pb-0">
          <div className="flex items-center gap-sm px-md py-xs bg-white border border-outline-variant rounded-lg cursor-pointer hover:border-primary transition-colors">
            <span className="text-label-md text-on-surface-variant">Sort by:</span>
            <span className="text-label-md font-bold text-on-surface">Latest</span>
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </div>
          <div className="flex items-center gap-sm px-md py-xs bg-white border border-outline-variant rounded-lg cursor-pointer hover:border-primary transition-colors">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            <span className="text-label-md font-bold text-on-surface">Filter</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">

        <div className="lg:col-span-8 space-y-md">

          {/* Critical notification */}
          <div className="group relative bg-white border border-outline-variant p-lg rounded-xl flex gap-md hover:shadow-lg transition-all border-l-4 border-l-error">
            <div className="absolute top-md right-md flex flex-col items-end gap-sm">
              <span className="text-label-sm text-on-surface-variant">2 Hours Ago</span>
              <Badge className="bg-error-container text-error border-0 text-[10px] uppercase tracking-wide">Critical</Badge>
            </div>
            <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary flex-shrink-0">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>assignment</span>
            </div>
            <div className="flex-1 pr-24">
              <div className="flex items-center gap-sm mb-xs">
                <h3 className="font-bold text-body-lg text-on-surface">Assignment Reminder</h3>
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <p className="text-body-md text-on-surface-variant leading-relaxed mb-md">
                Database Systems <span className="font-semibold text-on-surface">Assignment 02: Normalization &amp; SQL Optimization</span> is due tomorrow at 11:59 PM. You haven't submitted your draft yet.
              </p>
              <div className="flex gap-sm">
                <Button size="sm" className="px-md py-sm">Submit Now</Button>
                <Button variant="ghost" size="sm" className="px-md py-sm text-primary">View Details</Button>
              </div>
            </div>
          </div>

          {/* High notification */}
          <div className="group relative bg-white border border-outline-variant p-lg rounded-xl flex gap-md hover:shadow-lg transition-all border-l-4 border-l-primary/30">
            <div className="absolute top-md right-md flex flex-col items-end gap-sm">
              <span className="text-label-sm text-on-surface-variant">Today, 10:15 AM</span>
              <Badge className="bg-primary-fixed text-primary border-0 text-[10px] uppercase tracking-wide">High</Badge>
            </div>
            <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary flex-shrink-0">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>quiz</span>
            </div>
            <div className="flex-1 pr-24">
              <div className="flex items-center gap-sm mb-xs">
                <h3 className="font-bold text-body-lg text-on-surface">Exam Scheduled</h3>
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Software Engineering Final Exam is scheduled for <span className="font-semibold text-on-surface">Wednesday, Dec 18</span> in Main Hall A. Preparation materials are now available in the subject folder.
              </p>
            </div>
          </div>

          {/* Read notification — GPA */}
          <div className="group bg-surface-container-low/30 border border-outline-variant p-lg rounded-xl flex gap-md opacity-80 hover:opacity-100 transition-all">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant">
                <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-xs">
                <h3 className="font-bold text-body-lg text-on-surface">GPA Milestone Achieved</h3>
                <span className="text-label-sm text-on-surface-variant">Yesterday</span>
              </div>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Your Cumulative GPA has officially increased from <span className="font-bold text-error">3.65</span> to <span className="font-bold text-primary">3.72</span> following the results of Semester 4.
              </p>
              <div className="mt-md p-md bg-white/50 rounded-xl border border-outline-variant/30 flex items-center justify-between">
                <div className="flex items-center gap-md">
                  <div className="w-10 h-10 rounded-full border-4 border-secondary border-r-outline-variant animate-spin-slow"></div>
                  <div>
                    <p className="text-label-sm text-on-surface-variant">Goal: Dean's List (3.80)</p>
                    <p className="text-label-md font-bold">92% Completed</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary">chevron_right</span>
              </div>
            </div>
          </div>

          {/* Goal notification */}
          <div className="group bg-surface-container-low/30 border border-outline-variant p-lg rounded-xl flex gap-md opacity-80 hover:opacity-100 transition-all">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-xs">
                <h3 className="font-bold text-body-lg text-on-surface">Goal Update: Academic Research</h3>
                <span className="text-label-sm text-on-surface-variant">2 Days Ago</span>
              </div>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                You have successfully added 12 sources to your "AI Ethics Research Paper" goal. Keep going to reach your target of 20 citations.
              </p>
            </div>
          </div>

          <Button variant="outline" className="w-full py-md text-primary font-bold text-body-md border-2 border-dashed border-outline-variant rounded-xl hover:border-primary hover:bg-primary/5 transition-all">
            Load Older Notifications
          </Button>
        </div>

        <div className="lg:col-span-4 space-y-lg">

          <div className="bg-white border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
            <div className="p-lg border-b border-outline-variant flex items-center justify-between">
              <h3 className="font-bold text-on-surface flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary">event_upcoming</span>
                Upcoming Focus
              </h3>
              <Button variant="link" className="text-label-sm text-primary font-bold p-0 h-auto">View Calendar</Button>
            </div>
            <div className="p-lg space-y-md">
              {[
                { month: 'Dec', day: '12', title: 'DB Systems Assignment', sub: 'Due in 24 hours', subColor: 'text-error' },
                { month: 'Dec', day: '15', title: 'Networking Lab Exam', sub: '09:00 AM • Lab 04', subColor: 'text-on-surface-variant' },
                { month: 'Dec', day: '18', title: 'Final: Software Engineering', sub: '02:00 PM • Hall A', subColor: 'text-on-surface-variant' },
              ].map(({ month, day, title, sub, subColor }) => (
                <div key={day} className="flex items-center gap-md">
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex flex-col items-center justify-center font-black leading-none border border-outline-variant">
                    <span className="text-[10px] uppercase font-bold text-on-surface-variant">{month}</span>
                    <span className="text-lg text-on-surface">{day}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-label-md font-bold text-on-surface truncate">{title}</p>
                    <p className={`text-label-sm ${subColor}`}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-outline-variant rounded-2xl p-lg shadow-sm">
            <h3 className="font-bold text-on-surface mb-lg flex items-center gap-sm">
              <span className="material-symbols-outlined text-secondary">pie_chart</span>
              Volume Analytics
            </h3>
            <div className="relative w-40 h-40 mx-auto mb-lg flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" fill="none" r="16" stroke="#f1f5f9" strokeWidth="4"></circle>
                <circle cx="18" cy="18" fill="none" r="16" stroke="#0058be" strokeDasharray="45, 100" strokeWidth="4"></circle>
                <circle cx="18" cy="18" fill="none" r="16" stroke="#6b38d4" strokeDasharray="25, 100" strokeDashoffset="-45" strokeWidth="4"></circle>
                <circle cx="18" cy="18" fill="none" r="16" stroke="#ba1a1a" strokeDasharray="15, 100" strokeDashoffset="-70" strokeWidth="4"></circle>
                <circle cx="18" cy="18" fill="none" r="16" stroke="#424754" strokeDasharray="15, 100" strokeDashoffset="-85" strokeWidth="4"></circle>
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-title-lg font-black text-on-surface leading-none">156</span>
                <span className="text-label-sm text-on-surface-variant">Total</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-sm">
              {[
                ['bg-primary','Assignments (45%)'],
                ['bg-secondary','Exams (25%)'],
                ['bg-error','Urgent (15%)'],
                ['bg-tertiary','System (15%)'],
              ].map(([color, label]) => (
                <div key={label} className="flex items-center gap-xs">
                  <div className={`w-2 h-2 rounded-full ${color}`}></div>
                  <span className="text-label-sm text-on-surface-variant">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-outline-variant rounded-2xl p-lg shadow-sm">
            <h3 className="font-bold text-on-surface mb-lg flex items-center gap-sm">
              <span className="material-symbols-outlined text-tertiary">history</span>
              History
            </h3>
            <div className="relative space-y-lg before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-outline-variant">
              {[
                { color: 'bg-primary', icon: 'add', title: 'New Semester Started', sub: 'Fall 2024 Academic Year', date: 'Sept 1, 2024' },
                { color: 'bg-secondary', icon: 'menu_book', title: 'Subject Added', sub: 'Discrete Mathematics (DM102)', date: 'Sept 5, 2024' },
                { color: 'bg-tertiary', icon: 'settings', title: 'Preference Updated', sub: 'Switched to Dark Theme Auto', date: 'Aug 28, 2024' },
              ].map(({ color, icon, title, sub, date }) => (
                <div key={title} className="relative pl-8">
                  <div className={`absolute left-0 top-1 w-6 h-6 rounded-full ${color} flex items-center justify-center border-4 border-white shadow-sm`}>
                    <span className="material-symbols-outlined text-[12px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                  </div>
                  <p className="text-label-md font-bold text-on-surface">{title}</p>
                  <p className="text-label-sm text-on-surface-variant">{sub}</p>
                  <p className="text-[10px] text-outline mt-1 uppercase">{date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-auto px-lg py-lg border-t border-outline-variant text-center">
        <p className="text-label-sm text-on-surface-variant">© 2024 Student Success Platform • Version 2.4.0 • <a className="text-primary hover:underline" href="#">Privacy Policy</a></p>
      </footer>
    </div>
  );
}
