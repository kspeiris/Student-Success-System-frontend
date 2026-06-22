import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Semesters() {
  return (
    <div className="space-y-xl">

      <section className="flex flex-col md:flex-row md:items-end justify-between gap-md">
        <div className="max-w-2xl">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Semester Management</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">Manage academic semesters, organize subjects, track progress, and monitor GPA performance across your university journey.</p>
        </div>
        <div className="flex items-center gap-md">
          <Button variant="outline" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">filter_list</span>
            Filter
          </Button>
          <Button className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Create Semester
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
        <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col gap-sm">
          <span className="text-outline font-label-md uppercase tracking-wider">Total Semesters</span>
          <div className="flex items-baseline gap-2">
            <span className="text-headline-md font-bold">06</span>
            <span className="text-primary text-label-sm">+1 this year</span>
          </div>
        </div>
        <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col gap-sm">
          <span className="text-outline font-label-md uppercase tracking-wider">Current Term</span>
          <div className="flex items-baseline gap-2">
            <span className="text-title-lg font-bold">Spring 2024</span>
          </div>
        </div>
        <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col gap-sm">
          <span className="text-outline font-label-md uppercase tracking-wider">Overall CGPA</span>
          <div className="flex items-baseline gap-2">
            <span className="text-headline-md font-bold text-secondary">3.78</span>
            <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
          </div>
        </div>
        <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col gap-sm">
          <span className="text-outline font-label-md uppercase tracking-wider">Credits Earned</span>
          <div className="flex items-baseline gap-2">
            <span className="text-headline-md font-bold">92</span>
            <span className="text-on-surface-variant text-label-sm">/ 120 Required</span>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-lg">
          <h3 className="font-title-lg text-title-lg">Academic Timeline</h3>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="bg-surface-container text-primary">
              <span className="material-symbols-outlined">grid_view</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-outline">
              <span className="material-symbols-outlined">format_list_bulleted</span>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-lg">

          <div className="bg-white p-lg rounded-xl border-2 border-primary shadow-md flex flex-col gap-lg relative overflow-hidden transition-transform hover:-translate-y-1 cursor-pointer ring-4 ring-primary/5">
            <div className="absolute top-0 right-0 p-lg">
              <Badge className="bg-primary-fixed text-on-primary-fixed-variant text-[11px] uppercase tracking-tighter">Active</Badge>
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md">Spring 2024</h4>
              <p className="text-outline text-body-md">Jan 2024 - May 2024</p>
            </div>
            <div className="grid grid-cols-2 gap-md">
              <div className="bg-surface-container-low p-3 rounded-lg">
                <p className="text-[10px] text-outline uppercase font-bold">Subjects</p>
                <p className="font-bold">05 Courses</p>
              </div>
              <div className="bg-surface-container-low p-3 rounded-lg">
                <p className="text-[10px] text-outline uppercase font-bold">Credits</p>
                <p className="font-bold">15 Credits</p>
              </div>
            </div>
            <div className="space-y-sm">
              <div className="flex justify-between items-end">
                <span className="text-label-md font-bold">Current GPA: 3.82</span>
                <span className="text-label-sm text-outline">70% Term Completion</span>
              </div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full w-[70%] progress-gradient rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center gap-md pt-md border-t border-outline-variant mt-auto">
              <Button className="flex-1 py-2">View Details</Button>
              <Button variant="outline" size="icon">
                <span className="material-symbols-outlined text-[20px]">edit</span>
              </Button>
            </div>
          </div>

          <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col gap-lg hover:border-outline transition-all cursor-pointer relative">
            <div className="absolute top-0 right-0 p-lg">
              <Badge variant="outline" className="bg-surface-container text-on-surface-variant text-[11px] uppercase tracking-tighter">Completed</Badge>
            </div>
            <div>
              <h4 className="font-title-lg text-title-lg">Fall 2023</h4>
              <p className="text-outline text-body-md">Aug 2023 - Dec 2023</p>
            </div>
            <div className="grid grid-cols-2 gap-md">
              <div className="p-3">
                <p className="text-[10px] text-outline uppercase font-bold">Subjects</p>
                <p className="font-bold">06 Courses</p>
              </div>
              <div className="p-3">
                <p className="text-[10px] text-outline uppercase font-bold">SGPA</p>
                <p className="font-bold text-secondary">3.95</p>
              </div>
            </div>
            <div className="space-y-sm">
              <div className="flex justify-between items-end">
                <span className="text-label-md font-bold">18 Credits Earned</span>
                <span className="text-label-sm text-secondary">Passed</span>
              </div>
              <div className="h-2 w-full bg-secondary-fixed-dim rounded-full overflow-hidden">
                <div className="h-full w-full bg-secondary rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center gap-md pt-md border-t border-outline-variant mt-auto">
              <Button variant="outline" className="flex-1 py-2">View Details</Button>
              <Button variant="outline" size="icon" className="text-outline">
                <span className="material-symbols-outlined text-[20px]">archive</span>
              </Button>
            </div>
          </div>

          <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm flex flex-col gap-lg hover:border-outline transition-all cursor-pointer relative">
            <div className="absolute top-0 right-0 p-lg">
              <Badge variant="outline" className="bg-surface-container text-on-surface-variant text-[11px] uppercase tracking-tighter">Completed</Badge>
            </div>
            <div>
              <h4 className="font-title-lg text-title-lg">Spring 2023</h4>
              <p className="text-outline text-body-md">Jan 2023 - May 2023</p>
            </div>
            <div className="grid grid-cols-2 gap-md">
              <div className="p-3">
                <p className="text-[10px] text-outline uppercase font-bold">Subjects</p>
                <p className="font-bold">04 Courses</p>
              </div>
              <div className="p-3">
                <p className="text-[10px] text-outline uppercase font-bold">SGPA</p>
                <p className="font-bold text-secondary">3.64</p>
              </div>
            </div>
            <div className="space-y-sm">
              <div className="flex justify-between items-end">
                <span className="text-label-md font-bold">14 Credits Earned</span>
                <span className="text-label-sm text-secondary">Passed</span>
              </div>
              <div className="h-2 w-full bg-secondary-fixed-dim rounded-full overflow-hidden">
                <div className="h-full w-full bg-secondary rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center gap-md pt-md border-t border-outline-variant mt-auto">
              <Button variant="outline" className="flex-1 py-2">View Details</Button>
              <Button variant="outline" size="icon" className="text-outline">
                <span className="material-symbols-outlined text-[20px]">archive</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
        <div className="bg-white p-lg rounded-xl border border-outline-variant">
          <div className="flex justify-between items-center mb-lg">
            <h4 className="font-title-lg text-title-lg">GPA Performance Trend</h4>
            <Button variant="link" className="text-primary text-label-md font-bold p-0 h-auto">Full Report</Button>
          </div>
          <div className="h-64 flex items-end justify-between px-4 pb-2">
            <div className="flex flex-col items-center gap-2 group cursor-pointer w-full">
              <div className="w-8 bg-surface-container-high rounded-t-sm h-32 group-hover:bg-primary transition-colors relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">3.50</div>
              </div>
              <span className="text-[10px] text-outline uppercase">F22</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer w-full">
              <div className="w-8 bg-surface-container-high rounded-t-sm h-40 group-hover:bg-primary transition-colors relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">3.64</div>
              </div>
              <span className="text-[10px] text-outline uppercase">S23</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer w-full">
              <div className="w-8 bg-surface-container-high rounded-t-sm h-48 group-hover:bg-primary transition-colors relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">3.95</div>
              </div>
              <span className="text-[10px] text-outline uppercase">F23</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer w-full">
              <div className="w-8 bg-primary rounded-t-sm h-44 relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] py-1 px-2 rounded opacity-100">3.82</div>
              </div>
              <span className="text-[10px] text-primary font-bold uppercase">S24</span>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-primary to-secondary p-lg rounded-xl text-on-primary flex flex-col justify-between">
          <div>
            <h4 className="font-title-lg text-title-lg">Degree Progress</h4>
            <p className="text-on-primary/80 text-body-md mt-1">You are on track to graduate with honors.</p>
          </div>
          <div className="py-xl">
            <div className="flex justify-between text-label-sm mb-2">
              <span>Completed 92/120 Credits</span>
              <span>76.6%</span>
            </div>
            <div className="h-3 w-full bg-white/20 rounded-full">
              <div className="h-full w-[76.6%] bg-white rounded-full"></div>
            </div>
          </div>
          <Button variant="outline" className="w-full bg-white/10 hover:bg-white/20 border-white/20 text-white font-bold">
            Generate Official Transcript
          </Button>
        </div>
      </section>
    </div>
  );
}
