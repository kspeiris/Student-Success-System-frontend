import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Assignments() {
  return (
    <div className="space-y-lg">

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-lg mb-xl">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Assignment Tracking</h2>
          <p className="text-on-surface-variant font-body-lg text-body-lg">Track assignments, monitor deadlines, and manage academic workload.</p>
        </div>
        <Button className="px-lg py-md rounded-xl font-title-lg flex items-center gap-sm shadow-md">
          <span className="material-symbols-outlined">add</span>
          Create Assignment
        </Button>
      </div>

      <div className="flex flex-wrap gap-md mb-xl items-center bg-white p-md rounded-xl border border-outline-variant">
        <div className="flex items-center gap-sm text-on-surface-variant">
          <span className="material-symbols-outlined text-[20px]">filter_list</span>
          <span className="font-label-md uppercase tracking-wider">Filters:</span>
        </div>
        <Select defaultValue="spring2024">
          <SelectTrigger className="w-36 bg-surface-container-low border-none rounded-lg">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="spring2024">Spring 2024</SelectItem>
            <SelectItem value="fall2023">Fall 2023</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-subjects">
          <SelectTrigger className="w-44 bg-surface-container-low border-none rounded-lg">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-subjects">All Subjects</SelectItem>
            <SelectItem value="db">Database Systems</SelectItem>
            <SelectItem value="se">Software Engineering</SelectItem>
            <SelectItem value="calc">Calculus II</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-status">
          <SelectTrigger className="w-36 bg-surface-container-low border-none rounded-lg">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-status">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="inprogress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
        <div className="ml-auto flex items-center gap-sm">
          <span className="text-on-surface-variant font-label-md">Sort by:</span>
          <Button variant="ghost" className="flex items-center gap-xs font-body-md text-primary font-medium h-auto p-0">
            Deadline
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-md mb-xl">
        <div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
          <span className="text-on-surface-variant font-label-md">Total Assignments</span>
          <div className="flex items-baseline gap-xs">
            <span className="text-headline-md font-bold">28</span>
            <span className="text-label-sm text-on-surface-variant font-normal">Tasks</span>
          </div>
        </div>
        <div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between border-l-4 border-l-tertiary">
          <span className="text-on-surface-variant font-label-md">Pending</span>
          <span className="text-headline-md font-bold">6</span>
        </div>
        <div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between border-l-4 border-l-secondary">
          <span className="text-on-surface-variant font-label-md">Completed</span>
          <span className="text-headline-md font-bold">18</span>
        </div>
        <div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between border-l-4 border-l-error">
          <span className="text-on-surface-variant font-label-md">Overdue</span>
          <span className="text-headline-md font-bold text-error">2</span>
        </div>
        <div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm flex items-center justify-between col-span-1">
          <div>
            <span className="text-on-surface-variant font-label-md block">Completion</span>
            <span className="text-headline-md font-bold">82%</span>
          </div>
          <div className="relative w-12 h-12">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-surface-container-highest" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="4"></circle>
              <circle className="text-primary" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeDasharray="125.6" strokeDashoffset="22.6" strokeWidth="4"></circle>
            </svg>
          </div>
        </div>
        <div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
          <span className="text-on-surface-variant font-label-md">Next 7 Days</span>
          <div className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-primary">event</span>
            <span className="text-headline-md font-bold">4</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-md items-start">

        {/* Pending */}
        <div className="flex flex-col gap-md">
          <div className="flex items-center justify-between px-xs">
            <h3 className="font-title-lg text-on-surface flex items-center gap-sm">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              Pending
            </h3>
            <Badge variant="secondary" className="text-label-sm">6</Badge>
          </div>
          <div className="space-y-md">
            <div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-sm">
                <Badge className="bg-secondary-fixed text-on-secondary-fixed border-0 text-label-sm uppercase tracking-wider">Critical</Badge>
                <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
                </Button>
              </div>
              <h4 className="font-title-lg text-on-surface mb-xs leading-snug">Software Engineering Project</h4>
              <p className="text-on-surface-variant font-body-md mb-md">Software Engineering</p>
              <div className="flex items-center gap-md mb-md text-on-surface-variant">
                <div className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  <span className="text-label-md">July 25, 2026</span>
                </div>
                <span className="material-symbols-outlined text-[18px]" title="Group Assignment">groups</span>
              </div>
              <div className="space-y-xs">
                <div className="flex justify-between text-label-sm">
                  <span className="text-on-surface-variant">Progress</span>
                  <span className="font-bold">45%</span>
                </div>
                <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* In Progress */}
        <div className="flex flex-col gap-md">
          <div className="flex items-center justify-between px-xs">
            <h3 className="font-title-lg text-on-surface flex items-center gap-sm">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              In Progress
            </h3>
            <Badge className="bg-primary-fixed text-on-primary-fixed border-0 text-label-sm">4</Badge>
          </div>
          <div className="space-y-md">
            <div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-sm">
                <Badge className="bg-error-container text-on-error-container border-0 text-label-sm uppercase tracking-wider">High</Badge>
                <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
                </Button>
              </div>
              <h4 className="font-title-lg text-on-surface mb-xs leading-snug">Database Systems Assignment 02</h4>
              <p className="text-on-surface-variant font-body-md mb-md">Database Systems</p>
              <div className="flex items-center gap-md mb-md text-on-surface-variant">
                <div className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  <span className="text-label-md">July 15, 2026</span>
                </div>
              </div>
              <div className="space-y-xs">
                <div className="flex justify-between text-label-sm">
                  <span className="text-on-surface-variant">Progress</span>
                  <span className="font-bold">70%</span>
                </div>
                <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Completed */}
        <div className="flex flex-col gap-md">
          <div className="flex items-center justify-between px-xs">
            <h3 className="font-title-lg text-on-surface flex items-center gap-sm">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Completed
            </h3>
            <Badge className="bg-secondary-fixed text-on-secondary-fixed border-0 text-label-sm">18</Badge>
          </div>
          <div className="space-y-md">
            <div className="bg-surface-container-low p-md rounded-xl border border-outline-variant/50 shadow-sm opacity-80">
              <div className="flex justify-between items-start mb-sm">
                <span className="flex items-center gap-xs text-secondary font-bold text-label-md">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  COMPLETED
                </span>
                <Badge className="bg-secondary-container/20 text-on-secondary-container border-0 font-bold">Grade: A+</Badge>
              </div>
              <h4 className="font-title-lg text-on-surface mb-xs leading-snug">Organic Chemistry Quiz</h4>
              <p className="text-on-surface-variant font-body-md">Organic Chemistry</p>
            </div>
          </div>
        </div>

        {/* Overdue */}
        <div className="flex flex-col gap-md">
          <div className="flex items-center justify-between px-xs">
            <h3 className="font-title-lg text-on-surface flex items-center gap-sm">
              <span className="w-2 h-2 rounded-full bg-error"></span>
              Overdue
            </h3>
            <Badge className="bg-error-container text-on-error-container border-0 text-label-sm">2</Badge>
          </div>
          <div className="space-y-md">
            <div className="bg-white p-md rounded-xl border border-error/20 shadow-sm border-l-4 border-l-error">
              <div className="flex justify-between items-start mb-sm">
                <span className="text-error font-bold text-label-sm uppercase flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[18px]">warning</span>
                  Overdue
                </span>
              </div>
              <h4 className="font-title-lg text-on-surface mb-xs leading-snug">Calculus II Problem Set</h4>
              <div className="text-error font-bold flex items-center gap-xs">
                <span className="material-symbols-outlined text-[18px]">event_busy</span>
                Due: Oct 15
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
