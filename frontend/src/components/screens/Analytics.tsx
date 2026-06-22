import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function Analytics() {
  return (
    <div className="space-y-lg">

      <section className="flex flex-col md:flex-row md:items-end justify-between gap-md">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">GPA Analytics</h2>
          <p className="text-on-surface-variant font-body-md mt-1">Monitor academic performance, analyze GPA trends, and track progress toward goals.</p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="2023-2024">
            <SelectTrigger className="w-52 bg-surface-container-lowest border border-outline-variant rounded-lg">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023-2024">Academic Year 2023-2024</SelectItem>
              <SelectItem value="2022-2023">Academic Year 2022-2023</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export Report
          </Button>
          <Button>Generate Transcript</Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
        <div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-label-md text-on-surface-variant">Current Semester GPA</span>
            <Badge className="bg-secondary-container/10 text-secondary border-0 text-[10px] font-bold">FIRST CLASS</Badge>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-bold tracking-tighter">3.72</span>
            <div className="flex items-center text-green-600 text-xs font-bold">
              <span className="material-symbols-outlined text-[14px]">trending_up</span>
              +0.12
            </div>
          </div>
          <p className="text-[11px] text-outline mt-2">Vs. Last Semester (3.60)</p>
        </div>

        <div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm">
          <span className="text-label-md text-on-surface-variant">Cumulative GPA (CGPA)</span>
          <div className="mt-4">
            <span className="text-4xl font-bold tracking-tighter">3.68</span>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-1.5 flex-1 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-4/5 rounded-full"></div>
              </div>
              <span className="text-[10px] font-bold text-secondary">PREDICTED: 1:1</span>
            </div>
          </div>
          <p className="text-[11px] text-outline mt-2">Across 6 Semesters</p>
        </div>

        <div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm">
          <span className="text-label-md text-on-surface-variant">Target Goal Progress</span>
          <div className="mt-4">
            <div className="flex justify-between items-end mb-1">
              <span className="text-4xl font-bold tracking-tighter">3.80</span>
              <span className="text-label-sm text-primary font-bold">92%</span>
            </div>
            <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[92%] rounded-full"></div>
            </div>
          </div>
          <p className="text-[11px] text-outline mt-2">0.08 GPA points to reach goal</p>
        </div>

        <div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm">
          <span className="text-label-md text-on-surface-variant">Total Credits Completion</span>
          <div className="mt-4">
            <span className="text-4xl font-bold tracking-tighter">78<span className="text-lg text-outline font-normal">/120</span></span>
            <div className="mt-2 flex -space-x-2">
              <div className="w-6 h-6 rounded-full border-2 border-white bg-primary-fixed text-[8px] flex items-center justify-center font-bold">Y1</div>
              <div className="w-6 h-6 rounded-full border-2 border-white bg-primary text-white text-[8px] flex items-center justify-center font-bold">Y2</div>
              <div className="w-6 h-6 rounded-full border-2 border-white bg-surface-container-high text-outline text-[8px] flex items-center justify-center font-bold">Y3</div>
            </div>
          </div>
          <p className="text-[11px] text-outline mt-2">65% of total degree requirements</p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        <div className="lg:col-span-2 bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
          <div className="p-lg flex justify-between items-center">
            <div>
              <h3 className="font-title-lg text-title-lg">GPA Trend Analysis</h3>
              <p className="text-label-md text-on-surface-variant">Performance over 6 academic terms</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <span className="text-label-sm">GPA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full border border-dashed border-outline"></span>
                <span className="text-label-sm">Average (3.55)</span>
              </div>
            </div>
          </div>
          <div className="flex-1 min-h-[300px] relative p-lg pt-4">
            <svg className="w-full h-full" viewBox="0 0 800 240">
              <line stroke="#cbd5e1" strokeDasharray="4" x1="0" x2="800" y1="180" y2="180"></line>
              <path d="M0 200 Q 150 160 300 140 T 500 100 T 800 60" fill="none" stroke="#0058be" strokeLinecap="round" strokeWidth="4"></path>
              <path d="M0 200 Q 150 160 300 140 T 500 100 T 800 60 V 240 H 0 Z" fill="url(#gradient-blue)" opacity="0.1"></path>
              <circle cx="150" cy="160" fill="#0058be" r="5" stroke="white" strokeWidth="2"></circle>
              <circle cx="300" cy="140" fill="#0058be" r="5" stroke="white" strokeWidth="2"></circle>
              <circle cx="500" cy="100" fill="#0058be" r="5" stroke="white" strokeWidth="2"></circle>
              <circle cx="800" cy="60" fill="#0058be" r="6" stroke="white" strokeWidth="2"></circle>
              <defs>
                <linearGradient id="gradient-blue" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#0058be', stopOpacity: '1' }}></stop>
                  <stop offset="100%" style={{ stopColor: '#0058be', stopOpacity: '0' }}></stop>
                </linearGradient>
              </defs>
            </svg>
            <div className="flex justify-between px-lg mt-4 text-[11px] font-bold text-outline">
              {['SEM 1','SEM 2','SEM 3','SEM 4','SEM 5','SEM 6 (Current)'].map(s => <span key={s}>{s}</span>)}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-lg flex flex-col">
          <div className="mb-6">
            <h3 className="font-title-lg text-title-lg">Subject Performance</h3>
            <p className="text-label-md text-on-surface-variant">Top courses this semester</p>
          </div>
          <div className="space-y-6 flex-1">
            {[
              ['Machine Learning','4.0 / A','w-full'],
              ['Software Engineering','3.7 / A-','w-[92%]'],
              ['Database Systems','3.8 / A-','w-[95%]'],
              ['UX Design Studio','3.3 / B+','w-[82%]'],
              ['Discrete Maths','3.0 / B','w-[75%]'],
            ].map(([subj, grade, w]) => (
              <div key={subj} className="space-y-2">
                <div className="flex justify-between text-label-md">
                  <span className="font-semibold">{subj}</span>
                  <span className="text-primary">{grade}</span>
                </div>
                <div className="h-2 w-full bg-surface-container-high rounded-full">
                  <div className={`h-full bg-primary ${w} rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
        <div className="lg:col-span-2 glass-panel rounded-2xl p-lg relative overflow-hidden flex flex-col justify-between min-h-[220px]">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="flex items-center gap-2 text-primary font-bold text-label-md mb-4">
            <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
            AI INSIGHTS
          </div>
          <div className="space-y-4 relative z-10">
            <div className="flex gap-4 items-start">
              <div className="mt-1 p-2 bg-white rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
              </div>
              <p className="text-body-md text-on-surface leading-relaxed">
                <strong className="font-semibold">Database Systems</strong> is your strongest subject this term. You are performing in the top 5% of your cohort.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 p-2 bg-white rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-secondary text-[18px]">insights</span>
              </div>
              <p className="text-body-md text-on-surface leading-relaxed">
                Maintain your current trajectory in <strong className="font-semibold">Machine Learning</strong> to secure a predicted First Class Honours.
              </p>
            </div>
          </div>
          <Button variant="link" className="mt-6 text-primary text-label-md font-bold flex items-center gap-1 p-0 h-auto w-fit">
            View Study Recommendations <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Button>
        </div>

        <div className="bg-white rounded-xl border border-outline-variant p-lg shadow-sm flex flex-col items-center">
          <h3 className="font-title-lg text-title-lg w-full text-left mb-4">Grade Split</h3>
          <div className="relative w-32 h-32 my-2">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="60, 100" strokeWidth="4"></path>
              <path className="text-secondary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="25, 100" strokeDashoffset="-60" strokeWidth="4"></path>
              <path className="text-outline-variant" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="15, 100" strokeDashoffset="-85" strokeWidth="4"></path>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-bold text-lg">78% A/B</div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full mt-4">
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span><span className="text-[10px] text-outline">60% A GRADES</span></div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary-container"></span><span className="text-[10px] text-outline">25% B GRADES</span></div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-outline-variant"></span><span className="text-[10px] text-outline">15% OTHERS</span></div>
          </div>
        </div>

        <div className="bg-primary p-lg rounded-xl shadow-lg shadow-primary/20 text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-[20px]">psychology</span>
              <span className="text-label-md font-bold uppercase tracking-wider opacity-80">Next Semester Prediction</span>
            </div>
            <p className="text-body-md opacity-90 leading-snug">Based on current performance, your next semester is projected at:</p>
          </div>
          <div className="my-4">
            <div className="text-4xl font-black">3.81 <span className="text-lg font-normal opacity-70">GPA</span></div>
            <div className="text-headline-md font-semibold text-secondary-fixed">A- <span className="text-sm font-medium opacity-80 italic">Avg Grade</span></div>
          </div>
          <div className="p-3 bg-white/10 rounded-lg border border-white/20 text-[10px] leading-tight">
            Increase study hours by 15% in <strong className="underline">Software Engineering</strong> to reach a 3.90 prediction.
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden">
        <div className="p-lg border-b border-outline-variant flex justify-between items-center">
          <h3 className="font-title-lg text-title-lg">Semester History &amp; Comparison</h3>
          <Button variant="link" className="text-primary font-bold text-label-md flex items-center gap-1 p-0 h-auto">
            View Detailed History <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="bg-surface-container-low text-label-md text-on-surface-variant font-bold">
              <TableHead className="px-lg py-4">Semester</TableHead>
              <TableHead className="px-lg py-4">GPA</TableHead>
              <TableHead className="px-lg py-4">Credits Earned</TableHead>
              <TableHead className="px-lg py-4">Avg Grade</TableHead>
              <TableHead className="px-lg py-4">Status</TableHead>
              <TableHead className="px-lg py-4 text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-body-md divide-y divide-outline-variant">
            {[
              ['Semester 5 (Spring 2024)', '3.72', '15 Units', 'A-', 'Current', 'bg-secondary-container/10 text-secondary'],
              ['Semester 4 (Fall 2023)', '3.60', '18 Units', 'B+', 'Completed', 'bg-surface-container-high text-on-surface-variant'],
              ['Semester 3 (Spring 2023)', '3.85', '15 Units', 'A', 'Completed', 'bg-surface-container-high text-on-surface-variant'],
              ['Semester 2 (Fall 2022)', '3.55', '15 Units', 'B+', 'Completed', 'bg-surface-container-high text-on-surface-variant'],
            ].map(([sem, gpa, credits, grade, status, badgeCls]) => (
              <TableRow key={sem} className="hover:bg-surface-container-low/50 transition-colors">
                <TableCell className="px-lg py-4 font-semibold">{sem}</TableCell>
                <TableCell className="px-lg py-4">{gpa}</TableCell>
                <TableCell className="px-lg py-4">{credits}</TableCell>
                <TableCell className="px-lg py-4">{grade}</TableCell>
                <TableCell className="px-lg py-4">
                  <span className={`px-2 py-1 ${badgeCls} text-[10px] font-bold rounded uppercase`}>{status}</span>
                </TableCell>
                <TableCell className="px-lg py-4 text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-primary">
                    <span className="material-symbols-outlined">more_vert</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
