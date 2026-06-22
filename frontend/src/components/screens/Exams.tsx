import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function Exams() {
  return (
    <div className="space-y-lg">

      <div className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-md">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Exam Management</h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">Manage exam schedules, track exam performance, monitor upcoming assessments, and analyze academic results.</p>
        </div>
        <div className="flex gap-sm">
          <Select defaultValue="sem5">
            <SelectTrigger className="w-52 bg-surface border-outline-variant rounded-lg">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sem5">Semester 5 (Current)</SelectItem>
              <SelectItem value="sem4">Semester 4</SelectItem>
            </SelectContent>
          </Select>
          <Button className="flex items-center gap-2 px-6 shadow-md">
            <span className="material-symbols-outlined">add</span>
            Add Exam
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-md mb-xl">
        <div className="glass-card p-md rounded-xl shadow-sm flex flex-col justify-between">
          <span className="text-label-md text-on-surface-variant">Total Exams</span>
          <div className="flex items-baseline gap-2">
            <span className="font-headline-md text-headline-md text-on-surface">24</span>
            <span className="text-label-sm text-primary font-bold">+2 New</span>
          </div>
        </div>
        <div className="glass-card p-md rounded-xl shadow-sm border-l-4 border-primary">
          <span className="text-label-md text-on-surface-variant">Upcoming</span>
          <div className="flex items-baseline gap-2">
            <span className="font-headline-md text-headline-md text-primary">04</span>
          </div>
        </div>
        <div className="glass-card p-md rounded-xl shadow-sm border-l-4 border-secondary">
          <span className="text-label-md text-on-surface-variant">Completed</span>
          <div className="flex items-baseline gap-2">
            <span className="font-headline-md text-headline-md text-secondary">20</span>
          </div>
        </div>
        <div className="glass-card p-md rounded-xl shadow-sm">
          <span className="text-label-md text-on-surface-variant">Avg. Score</span>
          <div className="flex items-baseline gap-2">
            <span className="font-headline-md text-headline-md text-on-surface">82%</span>
            <span className="text-label-sm text-green-600">↑ 3.2%</span>
          </div>
        </div>
        <div className="glass-card p-md rounded-xl shadow-sm">
          <span className="text-label-md text-on-surface-variant">Highest Score</span>
          <div className="flex items-baseline gap-2">
            <span className="font-headline-md text-headline-md text-on-surface">94%</span>
          </div>
        </div>
        <div className="glass-card p-md rounded-xl shadow-sm bg-primary/5 border-primary/20">
          <span className="text-label-md text-primary font-bold">Next Exam</span>
          <div className="flex flex-col">
            <span className="font-headline-md text-headline-md text-primary">5 Days</span>
            <span className="text-label-sm text-on-surface-variant">Remaining</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-gutter">

        <div className="col-span-12 lg:col-span-8 space-y-gutter">

          <div className="flex flex-wrap items-center gap-md bg-white p-md rounded-xl border border-outline-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-on-surface-variant">filter_list</span>
              <span className="text-label-md text-on-surface-variant uppercase font-bold">Filters</span>
            </div>
            <Select defaultValue="all-subjects">
              <SelectTrigger className="w-44 bg-surface-container-low border-none rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-subjects">Subject: All</SelectItem>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="se">Software Eng</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-types">
              <SelectTrigger className="w-36 bg-surface-container-low border-none rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-types">Type: All</SelectItem>
                <SelectItem value="mid">Mid-term</SelectItem>
                <SelectItem value="final">Final</SelectItem>
                <SelectItem value="practical">Practical</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-status">
              <SelectTrigger className="w-36 bg-surface-container-low border-none rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-status">Status: All</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="bg-white rounded-xl border border-outline-variant overflow-hidden shadow-sm">
            <div className="p-lg border-b border-outline-variant flex justify-between items-center">
              <h3 className="font-title-lg text-title-lg text-on-surface">Recent &amp; Upcoming Exams</h3>
              <Button variant="link" className="text-primary font-bold text-label-md flex items-center gap-1 p-0 h-auto">
                View Full History <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Button>
            </div>
            <Table>
              <TableHeader className="bg-surface-container-low text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
                <TableRow>
                  <TableHead className="px-lg py-4">Subject</TableHead>
                  <TableHead className="px-lg py-4">Type</TableHead>
                  <TableHead className="px-lg py-4">Date &amp; Time</TableHead>
                  <TableHead className="px-lg py-4">Venue</TableHead>
                  <TableHead className="px-lg py-4">Result</TableHead>
                  <TableHead className="px-lg py-4">Status</TableHead>
                  <TableHead className="px-lg py-4 text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-outline-variant">
                <TableRow className="hover:bg-surface-container-lowest transition-colors">
                  <TableCell className="px-lg py-5">
                    <div className="flex flex-col">
                      <span className="font-bold text-on-surface">Database Systems</span>
                      <span className="text-label-sm text-on-surface-variant">CS302</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-lg py-5">
                    <Badge className="bg-blue-50 text-blue-700 border border-blue-100">Mid Exam</Badge>
                  </TableCell>
                  <TableCell className="px-lg py-5">
                    <div className="flex flex-col">
                      <span className="text-body-md font-medium">July 15, 2024</span>
                      <span className="text-label-sm text-on-surface-variant">09:00 AM - 11:00 AM</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-lg py-5 text-body-md">Hall A-102</TableCell>
                  <TableCell className="px-lg py-5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-on-surface">88/100</span>
                      <Badge className="bg-purple-50 text-purple-700 border-0">A</Badge>
                    </div>
                  </TableCell>
                  <TableCell className="px-lg py-5">
                    <span className="inline-flex items-center gap-1.5 text-secondary font-bold text-label-sm">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Completed
                    </span>
                  </TableCell>
                  <TableCell className="px-lg py-5 text-right">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-surface-container-lowest transition-colors">
                  <TableCell className="px-lg py-5">
                    <div className="flex flex-col">
                      <span className="font-bold text-on-surface">Software Engineering</span>
                      <span className="text-label-sm text-on-surface-variant">SE401</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-lg py-5">
                    <Badge className="bg-purple-50 text-purple-700 border border-purple-100">Final Exam</Badge>
                  </TableCell>
                  <TableCell className="px-lg py-5">
                    <div className="flex flex-col text-primary font-bold">
                      <span className="text-body-md">Aug 02, 2024</span>
                      <span className="text-label-sm uppercase">In 5 Days</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-lg py-5 text-body-md">Main Auditorium</TableCell>
                  <TableCell className="px-lg py-5 text-on-surface-variant text-label-md">Pending</TableCell>
                  <TableCell className="px-lg py-5">
                    <span className="inline-flex items-center gap-1.5 text-primary font-bold text-label-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span> Upcoming
                    </span>
                  </TableCell>
                  <TableCell className="px-lg py-5 text-right">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm h-full">
              <div className="flex items-center justify-between mb-lg">
                <h3 className="font-title-lg text-title-lg">August 2024</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-label-sm mb-4">
                {['M','T','W','T','F','S','S'].map((d, i) => (
                  <div key={i} className={`text-on-surface-variant font-bold ${i >= 5 ? 'text-error' : ''}`}>{d}</div>
                ))}
                <div className="h-10 flex items-center justify-center text-on-tertiary-fixed-variant">29</div>
                <div className="h-10 flex items-center justify-center text-on-tertiary-fixed-variant">30</div>
                <div className="h-10 flex items-center justify-center text-on-tertiary-fixed-variant">31</div>
                <div className="h-10 flex items-center justify-center bg-purple-100 text-purple-700 font-bold rounded-lg border border-purple-200 relative group cursor-pointer">
                  01
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-on-surface text-white p-2 rounded text-[10px] hidden group-hover:block z-10 w-24">SE401 Final Prep</div>
                </div>
                <div className="h-10 flex items-center justify-center bg-purple-600 text-white font-black rounded-lg shadow-md relative">02</div>
                <div className="h-10 flex items-center justify-center text-on-surface">03</div>
                <div className="h-10 flex items-center justify-center text-on-surface">04</div>
                <div className="h-10 flex items-center justify-center text-on-surface">05</div>
                <div className="h-10 flex items-center justify-center bg-blue-100 text-blue-700 font-bold rounded-lg border border-blue-200">06</div>
                <div className="h-10 flex items-center justify-center text-on-surface">07</div>
                <div className="h-10 flex items-center justify-center bg-green-100 text-green-700 font-bold rounded-lg border border-green-200">08</div>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4 border-t border-outline-variant">
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 bg-blue-500 rounded-full"></span><span className="text-label-sm">Mid</span></div>
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 bg-purple-600 rounded-full"></span><span className="text-label-sm">Final</span></div>
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 bg-green-500 rounded-full"></span><span className="text-label-sm">Practical</span></div>
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 bg-orange-500 rounded-full"></span><span className="text-label-sm">Viva</span></div>
              </div>
            </div>

            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm h-full">
              <div className="flex items-center justify-between mb-lg">
                <h3 className="font-title-lg text-title-lg">Performance Trend</h3>
                <span className="text-label-sm text-on-surface-variant">Last 4 Semesters</span>
              </div>
              <div className="h-40 flex items-end justify-between gap-2 px-2 relative">
                <div className="absolute inset-0 top-4 bottom-0 left-2 right-2">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 50">
                    <path d="M0,45 Q15,35 25,38 T50,20 T75,15 T100,10" fill="none" stroke="#3B82F6" strokeWidth="2"></path>
                    {[[0,45],[25,38],[50,20],[75,15],[100,10]].map(([cx,cy],i) => (
                      <circle key={i} cx={cx} cy={cy} fill="#3B82F6" r="1.5"></circle>
                    ))}
                  </svg>
                </div>
                {['S1','S2','S3','S4','S5'].map((s) => (
                  <div key={s} className="flex flex-col items-center gap-2 flex-1 pt-32">
                    <span className={`text-[10px] ${s === 'S5' ? 'font-bold text-primary' : 'text-on-surface-variant'}`}>{s}</span>
                  </div>
                ))}
              </div>
              <p className="text-body-md text-on-surface-variant mt-4 text-center">Consistent 12% improvement in GP over the last year.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm">
              <h3 className="font-title-lg text-title-lg mb-lg">Marks Distribution</h3>
              <div className="flex items-center gap-lg">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                    <circle className="stroke-surface-container" cx="18" cy="18" fill="none" r="16" strokeWidth="4"></circle>
                    <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="65, 100" strokeWidth="4"></circle>
                    <circle className="stroke-secondary" cx="18" cy="18" fill="none" r="16" strokeDasharray="25, 100" strokeDashoffset="-65" strokeWidth="4"></circle>
                    <circle className="stroke-error" cx="18" cy="18" fill="none" r="16" strokeDasharray="10, 100" strokeDashoffset="-90" strokeWidth="4"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-title-lg font-bold">82</span>
                    <span className="text-label-sm text-on-surface-variant">Avg</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  {[['bg-primary','Theory','65%'],['bg-secondary','Practical','25%'],['bg-error','Assignments','10%']].map(([color,label,pct]) => (
                    <div key={label} className="flex items-center justify-between">
                      <div className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${color}`}></span><span className="text-label-md">{label}</span></div>
                      <span className="text-label-md font-bold">{pct}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm">
              <h3 className="font-title-lg text-title-lg mb-lg">Performance by Subject</h3>
              <div className="space-y-4">
                {[['Database Systems','92%','bg-primary'],['Software Engineering','84%','bg-primary'],['Networking','78%','bg-secondary']].map(([subj,pct,color]) => (
                  <div key={subj}>
                    <div className="flex justify-between text-label-md mb-1">
                      <span>{subj}</span>
                      <span className="font-bold">{pct}</span>
                    </div>
                    <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                      <div className={`h-full ${color}`} style={{ width: pct }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-gutter">
          <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm">
            <h3 className="font-title-lg text-title-lg mb-lg flex items-center justify-between">
              Upcoming Focus
              <span className="material-symbols-outlined text-primary">schedule</span>
            </h3>
            <div className="space-y-md">
              <div className="p-md rounded-lg bg-surface-container-low border border-primary/20 relative overflow-hidden group hover:border-primary transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-on-surface">Database Systems Final</h4>
                    <p className="text-label-sm text-on-surface-variant">CS302 • Dr. Alice Vance</p>
                  </div>
                  <Badge className="bg-primary text-on-primary border-0 text-[10px] font-bold">5 DAYS</Badge>
                </div>
                <div className="flex items-center gap-4 text-label-sm text-on-surface-variant">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">calendar_today</span> Aug 02</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Hall B</span>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-primary/20 w-full">
                  <div className="h-full bg-primary" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="p-md rounded-lg bg-surface-container-low border border-outline-variant hover:border-secondary transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-on-surface">Operating Systems Viva</h4>
                    <p className="text-label-sm text-on-surface-variant">CS305 • Dr. Bob Smith</p>
                  </div>
                  <Badge className="bg-secondary text-on-secondary border-0 text-[10px] font-bold">12 DAYS</Badge>
                </div>
                <div className="flex items-center gap-4 text-label-sm text-on-surface-variant">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">calendar_today</span> Aug 09</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Lab 4</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm">
            <h3 className="font-title-lg text-title-lg mb-lg">Study Planner</h3>
            <div className="space-y-lg">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <span className="text-label-md text-on-surface-variant block">Revision Progress</span>
                    <span className="font-headline-md text-headline-md text-on-surface">68%</span>
                  </div>
                  <span className="text-label-sm text-primary font-bold">Target: 85%</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-3 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{ width: '68%' }}></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-md">
                <div className="bg-surface-container-low p-md rounded-lg text-center">
                  <span className="text-label-sm text-on-surface-variant block">Study Hours</span>
                  <span className="text-title-lg font-bold">42.5h</span>
                  <span className="text-[10px] text-green-600 font-bold block">↑ 4h this week</span>
                </div>
                <div className="bg-surface-container-low p-md rounded-lg text-center">
                  <span className="text-label-sm text-on-surface-variant block">Mock Tests</span>
                  <span className="text-title-lg font-bold">12</span>
                  <span className="text-[10px] text-on-surface-variant block">Last Score: 88%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm">
            <h3 className="font-title-lg text-title-lg mb-lg">Grade Distribution</h3>
            <div className="flex items-end justify-between h-32 gap-1 mb-4 px-2">
              {[['A+','60%','8'],['A','90%','12'],['A-','40%','4'],['B+','20%','2'],['B','10%','1']].map(([grade,h,count]) => (
                <div key={grade} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-primary/20 rounded-t hover:bg-primary transition-colors cursor-pointer relative group" style={{ height: h }}>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">{count}</div>
                  </div>
                  <span className={`text-[10px] ${grade === 'A' ? 'text-on-surface-variant font-bold' : 'text-on-surface-variant'}`}>{grade}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center text-label-sm text-on-surface-variant border-t pt-4 border-outline-variant">
              <span>Total Grade Count: 27</span>
              <Button variant="link" className="text-primary font-bold p-0 h-auto">View Detail</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
