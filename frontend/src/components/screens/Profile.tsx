import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function Profile() {
  return (
    <div className="space-y-lg">

      <section className="glass-card rounded-xl p-lg flex flex-col md:flex-row items-center md:items-start gap-lg shadow-sm">
        <div className="relative">
          <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
            <img
              className="w-full h-full object-cover"
              alt="Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNY74A7_3zGDxoNGV029a3yUPI8QWtjzAx6Ou-QWfjOw_SP9C6hmP7XukMNuESB9GNQS9T773Lv3FUUM-sERbEbbNIcNpJtfglMoAeWCydAD7k_yc7C-zNOD2TMySzCYobP6WnKeXopHoCJIcm_t5Fz8WWr6zHHphanX8iS4CDMtsTIsLRiemFmHY01bqOq8uHX86VymjY-3epJGVdyDuzRu1-fQXoq2QlPhv6hNxvqFJ7a_LXrNtU_5jxcpnSRBN0YkJwifGqxoyo"
            />
          </div>
          <Button size="icon" className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl border-4 border-white shadow-md hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-body-lg">photo_camera</span>
          </Button>
        </div>

        <div className="flex-1 space-y-2 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-sm">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Kavindu Peiris</h2>
            <Badge className="bg-secondary-fixed text-on-secondary-fixed-variant border-0 w-fit mx-auto md:mx-0">First Class Honours</Badge>
          </div>
          <p className="font-title-lg text-title-lg text-on-surface-variant">BSc Hons Software Engineering</p>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-md text-outline">
            {[
              { icon: 'badge', text: 'SE2023XXXX' },
              { icon: 'location_on', text: 'Colombo, Sri Lanka' },
              { icon: 'mail', text: 'kavindu.p@edu.eduportal.com' },
            ].map(({ icon, text }) => (
              <div key={icon} className="flex items-center gap-xs">
                <span className="material-symbols-outlined text-body-md">{icon}</span>
                <span className="font-body-md text-body-md">{text}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-sm pt-md justify-center md:justify-start">
            <Button className="flex items-center gap-sm">
              <span className="material-symbols-outlined">edit</span>
              Edit Profile
            </Button>
            <Button variant="outline" className="flex items-center gap-sm">
              <span className="material-symbols-outlined">lock</span>
              Change Password
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-sm px-lg py-md border-l border-outline-variant hidden xl:flex">
          <div className="relative w-24 h-24">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle className="text-surface-container-high stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeWidth="8"></circle>
              <circle className="text-primary stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeDasharray="251.2" strokeDashoffset="37.6" strokeLinecap="round" strokeWidth="8"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-headline-md text-headline-md text-primary">85%</span>
            </div>
          </div>
          <span className="font-label-md text-label-md text-on-surface-variant">Profile Complete</span>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
        {[
          { icon: 'auto_graph', iconBg: 'bg-primary-fixed', iconColor: 'text-primary', label: 'Current GPA', value: '3.72', sub: '+0.04 vs Last Sem', hoverBorder: 'hover:border-primary' },
          { icon: 'monitoring', iconBg: 'bg-secondary-fixed', iconColor: 'text-secondary', label: 'Overall CGPA', value: '3.68', sub: 'Consistent', hoverBorder: 'hover:border-secondary' },
          { icon: 'school', iconBg: 'bg-surface-container-high', iconColor: 'text-on-surface-variant', label: 'Completed Credits', value: '78 / 120', sub: '65% Progress', hoverBorder: '' },
          { icon: 'military_tech', iconBg: 'bg-tertiary-fixed', iconColor: 'text-tertiary', label: 'Academic Goals', value: '05 Achieved', sub: 'On Track', hoverBorder: '' },
        ].map(({ icon, iconBg, iconColor, label, value, sub, hoverBorder }) => (
          <div key={label} className={`glass-card p-lg rounded-xl shadow-sm group ${hoverBorder} transition-colors`}>
            <div className="flex justify-between items-start mb-sm">
              <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center ${iconColor}`}>
                <span className="material-symbols-outlined">{icon}</span>
              </div>
              <span className="text-on-surface-variant font-label-md text-label-md">{sub}</span>
            </div>
            <p className="font-label-md text-label-md text-outline uppercase tracking-wider">{label}</p>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">{value}</h3>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">

        <div className="lg:col-span-2 space-y-lg">

          <section className="glass-card rounded-xl p-lg shadow-sm">
            <div className="flex items-center justify-between mb-lg">
              <h3 className="font-title-lg text-title-lg text-on-surface">Personal Information</h3>
              <Button variant="link" className="text-primary font-label-md text-label-md p-0 h-auto">Manage Privacy</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              {[
                { label: 'Full Name', value: 'Kavindu Ravishka Peiris', border: false },
                { label: 'Date of Birth', value: 'September 12, 2001', border: false },
                { label: 'Primary Contact', value: '+94 77 123 4567', border: false },
                { label: 'Personal Email', value: 'kavindupeiris.dev@gmail.com', border: false },
              ].map(({ label, value }) => (
                <div key={label} className="space-y-sm">
                  <Label className="font-label-md text-label-md text-outline uppercase">{label}</Label>
                  <div className="p-md bg-surface-container-low rounded-lg font-body-md text-body-md">{value}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card rounded-xl p-lg shadow-sm">
            <div className="flex items-center justify-between mb-lg">
              <h3 className="font-title-lg text-title-lg text-on-surface">Academic Information</h3>
              <span className="material-symbols-outlined text-outline">verified</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              {[
                { label: 'Faculty', value: 'Faculty of Computing' },
                { label: 'Academic Advisor', value: 'Dr. Amal Perera' },
                { label: 'Enrollment Year', value: '2023 - Intake A' },
                { label: 'Scholarship', value: 'Merit Scholarship (50%)' },
              ].map(({ label, value }) => (
                <div key={label} className="space-y-sm">
                  <Label className="font-label-md text-label-md text-outline uppercase">{label}</Label>
                  <div className="p-md border border-outline-variant rounded-lg font-body-md text-body-md">{value}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card rounded-xl overflow-hidden shadow-sm">
            <div className="flex border-b border-outline-variant bg-surface-container-low overflow-x-auto">
              {['General','Security','Notifications','Preferences'].map((tab, i) => (
                <button key={tab} className={`px-lg py-md font-label-md text-label-md whitespace-nowrap ${i === 0 ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:bg-surface-container'}`}>
                  {tab}
                </button>
              ))}
            </div>
            <div className="p-lg space-y-lg">
              {[
                { title: 'Two-Factor Authentication', desc: 'Add an extra layer of security to your account.', checked: true },
                { title: 'Email Notifications', desc: 'Receive weekly academic summary and deadline alerts.', checked: true },
                { title: 'Profile Visibility', desc: 'Allow recruiters to see your academic progress.', checked: false },
              ].map(({ title, desc, checked }) => (
                <div key={title} className="flex items-center justify-between">
                  <div>
                    <h4 className="font-body-lg text-body-lg text-on-surface font-semibold">{title}</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">{desc}</p>
                  </div>
                  <Switch defaultChecked={checked} />
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-lg">

          <section className="glass-card rounded-xl p-lg shadow-sm">
            <h3 className="font-title-lg text-title-lg text-on-surface mb-lg">Achievements &amp; Milestones</h3>
            <div className="flex flex-wrap gap-md">
              {[
                { icon: 'star', iconColor: 'text-primary', bg: 'bg-primary-container/10 border-primary/20', label: "Dean's List", sub: 'Sem 1 & 2' },
                { icon: 'trophy', iconColor: 'text-secondary', bg: 'bg-secondary-container/10 border-secondary/20', label: 'Top Scorer', sub: 'Algorithms' },
                { icon: 'workspace_premium', iconColor: 'text-tertiary', bg: 'bg-tertiary-container/10 border-tertiary/20', label: 'GPA > 3.5', sub: 'High Achiever' },
                { icon: 'local_fire_department', iconColor: 'text-outline', bg: 'bg-surface-container-high border-outline-variant opacity-50 grayscale', label: 'Perfect Attendance', sub: 'Locked' },
              ].map(({ icon, iconColor, bg, label, sub }) => (
                <div key={label} className={`flex flex-col items-center p-md border rounded-xl w-[calc(50%-8px)] text-center ${bg}`}>
                  <span className={`material-symbols-outlined font-headline-md mb-2 ${iconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                  <span className={`font-label-md text-label-md font-bold ${iconColor}`}>{label}</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">{sub}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card rounded-xl p-lg shadow-sm">
            <h3 className="font-title-lg text-title-lg text-on-surface mb-lg">Academic Progress</h3>
            <div className="relative py-lg flex justify-center">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-surface-container-high" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12"></circle>
                  <circle className="text-primary" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552.92" strokeDashoffset="193.5" strokeLinecap="round" strokeWidth="12"></circle>
                  <circle className="text-surface-container-high" cx="96" cy="96" fill="transparent" r="70" stroke="currentColor" strokeWidth="10"></circle>
                  <circle className="text-secondary" cx="96" cy="96" fill="transparent" r="70" stroke="currentColor" strokeDasharray="439.8" strokeDashoffset="87.9" strokeLinecap="round" strokeWidth="10"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-headline-md text-headline-md text-on-surface">65%</span>
                  <span className="font-label-md text-label-md text-outline">Overall</span>
                </div>
              </div>
            </div>
            <div className="space-y-md">
              <div className="flex items-center gap-sm">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <span className="flex-1 font-body-md text-body-md text-on-surface-variant">Credits Completed</span>
                <span className="font-label-md text-label-md text-on-surface font-bold">78/120</span>
              </div>
              <div className="flex items-center gap-sm">
                <span className="w-3 h-3 rounded-full bg-secondary"></span>
                <span className="flex-1 font-body-md text-body-md text-on-surface-variant">Module Success Rate</span>
                <span className="font-label-md text-label-md text-on-surface font-bold">92%</span>
              </div>
            </div>
          </section>

          <section className="bg-inverse-surface text-on-primary-container rounded-xl p-lg shadow-xl overflow-hidden relative">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            <h3 className="font-title-lg text-title-lg mb-md relative z-10">Platform Activity</h3>
            <div className="space-y-md relative z-10">
              <div className="flex justify-between items-center">
                <span className="font-body-md text-body-md opacity-80">Study Time this Week</span>
                <span className="font-label-md text-label-md">24.5h</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div className="bg-inverse-primary h-full w-[70%]"></div>
              </div>
              <p className="font-label-md text-label-md opacity-60">You are in the top 5% of active students in your batch.</p>
              <Button variant="ghost" className="w-full py-2 bg-white/10 hover:bg-white/20 text-white font-label-md mt-sm">
                View Insights
              </Button>
            </div>
          </section>
        </div>
      </div>

      <section className="glass-card rounded-xl p-lg shadow-sm">
        <div className="flex items-center justify-between mb-lg">
          <h3 className="font-title-lg text-title-lg text-on-surface">Academic Goals</h3>
          <Button variant="link" className="flex items-center gap-xs text-primary font-label-md text-label-md p-0 h-auto">
            <span className="material-symbols-outlined text-[16px]">add_task</span>
            Set New Goal
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {[
            { title: 'Graduate with First Class', pct: '85%', color: 'text-primary', barColor: 'bg-gradient-to-r from-primary to-secondary', desc: 'Target GPA: 3.7+ | Current: 3.72' },
            { title: 'IELTS Target 8.0', pct: '40%', color: 'text-tertiary', barColor: 'bg-tertiary', desc: 'Scheduled for December 2024' },
          ].map(({ title, pct, color, barColor, desc }) => (
            <div key={title} className="p-md border border-outline-variant rounded-xl space-y-md">
              <div className="flex justify-between">
                <h4 className="font-body-lg text-body-lg font-semibold text-on-surface">{title}</h4>
                <span className={`font-label-md text-label-md ${color}`}>{pct}</span>
              </div>
              <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                <div className={`h-full ${barColor} rounded-full`} style={{ width: pct }}></div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card rounded-xl p-lg shadow-sm">
        <h3 className="font-title-lg text-title-lg text-on-surface mb-lg">Recent Activities</h3>
        <div className="space-y-lg relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant">
          {[
            { bg: 'bg-primary-container', color: 'text-on-primary-container', icon: 'calculate', title: 'GPA Recalculated', time: '2 hours ago', desc: 'Semester 3 results have been audited. Your CGPA increased by 0.02.' },
            { bg: 'bg-secondary-container', color: 'text-on-secondary-container', icon: 'upload_file', title: 'Assignment Submitted', time: 'Yesterday', desc: 'Advanced Database Systems - Module Project (Final Version)' },
            { bg: 'bg-surface-container-highest', color: 'text-on-surface-variant', icon: 'notifications_active', title: 'Preference Updated', time: 'Oct 24, 2023', desc: 'You enabled Desktop Notifications for Exam Reminders.' },
          ].map(({ bg, color, icon, title, time, desc }, i) => (
            <div key={title} className="flex gap-lg relative">
              <div className={`w-9 h-9 rounded-full ${bg} flex items-center justify-center ${color} z-10 shrink-0`}>
                <span className="material-symbols-outlined text-body-md">{icon}</span>
              </div>
              <div className={`flex-1 ${i < 2 ? 'pb-lg' : ''}`}>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-body-lg text-body-lg font-semibold">{title}</h4>
                  <span className="font-label-md text-label-md text-outline">{time}</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="flex flex-col md:flex-row justify-between items-center gap-lg border-t border-outline-variant pt-lg mt-xl">
        <p className="font-body-md text-body-md text-outline">Last login: Today at 09:42 AM from Colombo, SL</p>
        <div className="flex gap-md">
          <Button variant="outline" className="flex items-center gap-sm">
            <span className="material-symbols-outlined">download</span>
            Download Academic Summary
          </Button>
          <Button variant="destructive" className="flex items-center gap-sm">
            <span className="material-symbols-outlined">logout</span>
            Log Out
          </Button>
        </div>
      </footer>
    </div>
  );
}
