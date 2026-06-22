import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Dashboard() {
  return (
    <div className="space-y-lg">

      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg custom-shadow relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-lg">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Welcome back, Kavindu 👋</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-xs">You're making great progress this semester. Keep the momentum!</p>
          </div>
          <div className="w-full md:w-80">
            <div className="flex justify-between items-end mb-xs">
              <span className="text-label-sm font-label-sm text-primary uppercase">Semester Progress</span>
              <span className="text-title-lg font-title-lg text-primary">65%</span>
            </div>
            <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
              <div className="progress-bar-fill h-full rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-md">
        <div className="bg-white border border-outline-variant rounded-lg p-md custom-shadow">
          <p className="text-label-sm text-outline font-bold uppercase">Current GPA</p>
          <div className="flex items-end gap-sm mt-xs">
            <span className="font-headline-md text-headline-md text-primary">3.72</span>
            <span className="text-label-md text-on-secondary-fixed-variant bg-secondary-fixed px-2 py-0.5 rounded flex items-center gap-xs">
              <span className="material-symbols-outlined text-[14px]">trending_up</span>+0.05
            </span>
          </div>
        </div>
        <div className="bg-white border border-outline-variant rounded-lg p-md custom-shadow">
          <p className="text-label-sm text-outline font-bold uppercase">Target GPA</p>
          <div className="mt-xs">
            <div className="flex items-center justify-between">
              <span className="font-headline-md text-headline-md text-on-surface">3.80</span>
              <span className="text-label-sm text-secondary font-bold">98% to Goal</span>
            </div>
          </div>
        </div>
        <div className="bg-white border border-outline-variant rounded-lg p-md custom-shadow">
          <p className="text-label-sm text-outline font-bold uppercase">Pending Assignments</p>
          <div className="mt-xs">
            <span className="font-headline-md text-headline-md text-error">5</span>
            <p className="text-label-sm text-on-surface-variant">2 due this week</p>
          </div>
        </div>
        <div className="bg-white border border-outline-variant rounded-lg p-md custom-shadow">
          <p className="text-label-sm text-outline font-bold uppercase">Upcoming Exams</p>
          <div className="mt-xs">
            <span className="font-headline-md text-headline-md text-on-surface">3</span>
            <p className="text-label-sm text-on-surface-variant">Next: Machine Learning</p>
          </div>
        </div>
        <div className="bg-white border border-outline-variant rounded-lg p-md custom-shadow">
          <p className="text-label-sm text-outline font-bold uppercase">Total Subjects</p>
          <div className="mt-xs">
            <span className="font-headline-md text-headline-md text-on-surface">6</span>
            <p className="text-label-sm text-on-surface-variant">Active this semester</p>
          </div>
        </div>
        <div className="bg-white border border-outline-variant rounded-lg p-md custom-shadow">
          <p className="text-label-sm text-outline font-bold uppercase">Completed Tasks</p>
          <div className="mt-xs">
            <span className="font-headline-md text-headline-md text-on-surface">84%</span>
            <div className="h-1.5 w-full bg-surface-container mt-xs rounded-full overflow-hidden">
              <div className="bg-primary h-full" style={{ width: '84%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">

        <div className="lg:col-span-2 space-y-lg">
          <div className="bg-white border border-outline-variant rounded-xl p-lg custom-shadow">
            <div className="flex justify-between items-center mb-lg">
              <h3 className="font-title-lg text-title-lg">GPA Trend Analysis</h3>
              <Select defaultValue="overall">
                <SelectTrigger className="w-36 bg-surface border-outline-variant rounded-lg text-label-md">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="overall">Overall Trend</SelectItem>
                  <SelectItem value="lastyear">Last Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="h-64 flex items-end gap-md pb-md relative">
              <div className="absolute inset-0 flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200">
                  <path d="M0,150 Q80,140 100,130 T200,110 T300,105 T400,80 T500,70" fill="none" stroke="#0058be" strokeLinecap="round" strokeWidth="3"></path>
                  <path d="M0,150 Q80,140 100,130 T200,110 T300,105 T400,80 T500,70 V200 H0 Z" fill="url(#blue-grad)" opacity="0.1"></path>
                  <defs>
                    <linearGradient id="blue-grad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#0058be"></stop>
                      <stop offset="100%" stopColor="transparent"></stop>
                    </linearGradient>
                  </defs>
                  {[[0,150],[100,130],[200,110],[300,105],[400,80],[500,70]].map(([cx,cy],i) => (
                    <circle key={i} cx={cx} cy={cy} fill="#0058be" r="4"></circle>
                  ))}
                </svg>
              </div>
              <div className="flex w-full justify-between mt-auto z-10 px-xs text-[10px] font-bold text-outline uppercase tracking-wider">
                {['Sem 1','Sem 2','Sem 3','Sem 4','Sem 5','Sem 6'].map(s => <span key={s}>{s}</span>)}
              </div>
            </div>
          </div>

          <div className="bg-white border border-outline-variant rounded-xl p-lg custom-shadow">
            <h3 className="font-title-lg text-title-lg mb-lg">Subject Performance</h3>
            <div className="space-y-md">
              {[
                ['Database Systems','92%','bg-primary'],
                ['Software Engineering','88%','bg-secondary'],
                ['Computer Networks','75%','bg-primary opacity-70'],
                ['Machine Learning','94%','bg-secondary opacity-80'],
                ['Web Development','81%','bg-primary opacity-60'],
              ].map(([subj, pct, color]) => (
                <div key={subj} className="space-y-xs">
                  <div className="flex justify-between text-label-md">
                    <span>{subj}</span>
                    <span className="font-bold">{pct}</span>
                  </div>
                  <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                    <div className={`${color} h-full`} style={{ width: pct }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-lg">
          <div className="bg-white border border-outline-variant rounded-xl p-lg custom-shadow">
            <h3 className="font-title-lg text-title-lg mb-lg">Assignment Status</h3>
            <div className="relative w-40 h-40 mx-auto mb-lg">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" fill="none" r="16" stroke="#f1f5f9" strokeWidth="4"></circle>
                <circle cx="18" cy="18" fill="none" r="16" stroke="#0058be" strokeDasharray="75, 100" strokeLinecap="round" strokeWidth="4"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-headline-md text-headline-md">15</span>
                <span className="text-label-sm text-outline">Left</span>
              </div>
            </div>
            <div className="space-y-sm">
              <div className="flex items-center justify-between text-body-md">
                <div className="flex items-center gap-sm">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span>Completed</span>
                </div>
                <span className="font-bold">45</span>
              </div>
              <div className="flex items-center justify-between text-body-md">
                <div className="flex items-center gap-sm">
                  <span className="w-3 h-3 rounded-full bg-surface-container"></span>
                  <span>Pending</span>
                </div>
                <span className="font-bold">15</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-outline-variant rounded-xl p-lg custom-shadow">
            <h3 className="font-title-lg text-title-lg mb-lg">Academic Goals</h3>
            <div className="bg-surface-container-low p-md rounded-lg flex items-center gap-lg">
              <div className="relative w-16 h-16 shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" fill="none" r="16" stroke="#ffffff" strokeWidth="3"></circle>
                  <circle cx="18" cy="18" fill="none" r="16" stroke="#6b38d4" strokeDasharray="90, 100" strokeLinecap="round" strokeWidth="3"></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
                </div>
              </div>
              <div>
                <p className="font-body-md text-body-md font-bold text-on-surface">Dean's List Goal</p>
                <p className="text-label-sm text-on-surface-variant">90% Milestones achieved for this semester</p>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-lg font-bold text-on-surface">
              View All Goals
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">

        <div className="lg:col-span-1 bg-white border border-outline-variant rounded-xl p-lg custom-shadow">
          <div className="flex justify-between items-center mb-md">
            <h3 className="font-title-lg text-title-lg">Upcoming Activities</h3>
            <Button variant="link" className="text-label-sm text-primary font-bold p-0 h-auto">See All</Button>
          </div>
          <div className="space-y-md">
            {[
              { month: 'OCT', day: '18', bg: 'bg-error-container text-error', title: 'Machine Learning Midterm', sub: '10:30 AM • Friday' },
              { month: 'OCT', day: '20', bg: 'bg-primary-container text-on-primary-container', title: 'Software Engineering Project', sub: 'Due by 11:59 PM' },
              { month: 'OCT', day: '22', bg: 'bg-surface-container text-on-surface-variant', title: 'Database Quiz 4', sub: '02:00 PM • Sunday' },
            ].map(({ month, day, bg, title, sub }, i) => (
              <div key={title} className="flex gap-md">
                <div className={`w-12 h-12 ${bg} rounded-lg flex flex-col items-center justify-center shrink-0`}>
                  <span className="text-label-sm font-bold">{month}</span>
                  <span className="text-title-lg leading-tight">{day}</span>
                </div>
                <div className={`flex-1 ${i < 2 ? 'border-b border-outline-variant pb-md' : ''}`}>
                  <p className="font-body-md font-bold text-on-surface">{title}</p>
                  <p className="text-label-sm text-on-surface-variant flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[14px]">{i === 1 ? 'calendar_today' : 'schedule'}</span> {sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1 bg-white border border-outline-variant rounded-xl p-lg custom-shadow">
          <h3 className="font-title-lg text-title-lg mb-lg">Weekly Productivity</h3>
          <div className="h-40 flex items-end justify-between gap-sm px-md mb-lg">
            {[['60%','primary','6h'],['40%','primary','4h'],['85%','secondary','8.5h'],['55%','primary','5.5h'],['70%','primary','7h'],['20%','surface-container-highest','2h'],['15%','surface-container-highest','1.5h']].map(([h, color, label]) => (
              <div key={label} className="flex-1 bg-surface-container relative group" style={{ height: '100%' }}>
                <div className={`absolute bottom-0 left-0 right-0 bg-${color} rounded-t-sm transition-all duration-300`} style={{ height: h }}></div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">{label}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-outline font-bold uppercase">
            {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => <span key={d}>{d}</span>)}
          </div>
        </div>

        <div className="lg:col-span-1 bg-surface-container-low border border-outline-variant rounded-xl p-lg flex flex-col justify-between">
          <h3 className="font-title-lg text-title-lg mb-lg">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-md flex-1">
            {[
              { icon: 'school', label: 'Add Semester' },
              { icon: 'book', label: 'Add Subject' },
              { icon: 'edit_note', label: 'Add Assignment' },
              { icon: 'calculate', label: 'Calculate GPA' },
            ].map(({ icon, label }) => (
              <Button key={label} variant="outline" className="bg-white h-auto py-md flex flex-col items-center justify-center gap-xs hover:border-primary transition-all active:scale-95 group">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">{icon}</span>
                <span className="text-label-md font-bold">{label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
