import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function Subjects() {
  return (
    <div className="space-y-lg">

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Subject Management</h2>
          <p className="text-body-md text-on-surface-variant max-w-2xl mt-1">Manage academic subjects, monitor grades, track credits, and analyze subject performance throughout your degree program.</p>
        </div>
        <div className="flex items-center gap-sm">
          <Select defaultValue="fall2024">
            <SelectTrigger className="w-52 bg-white border-outline-variant rounded-xl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fall2024">Fall Semester 2024</SelectItem>
              <SelectItem value="spring2024">Spring Semester 2024</SelectItem>
              <SelectItem value="fall2023">Fall Semester 2023</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="rounded-xl">
            <span className="material-symbols-outlined text-on-surface-variant">filter_list</span>
          </Button>
          <Button className="rounded-xl flex items-center gap-2">
            <span className="material-symbols-outlined">add</span>
            Add Subject
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md mb-xl">
        <div className="bg-white p-lg rounded-xl border border-outline-variant card-shadow">
          <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Total Subjects</p>
          <div className="flex items-end justify-between mt-2">
            <h3 className="text-headline-md font-bold text-on-surface">32</h3>
            <Badge className="bg-secondary/10 text-secondary border-0 text-xs">Active</Badge>
          </div>
        </div>
        <div className="bg-white p-lg rounded-xl border border-outline-variant card-shadow">
          <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Total Credits</p>
          <div className="flex items-end justify-between mt-2">
            <h3 className="text-headline-md font-bold text-on-surface">96</h3>
            <Badge className="bg-primary/10 text-primary border-0 text-xs">+12 Sem</Badge>
          </div>
        </div>
        <div className="bg-white p-lg rounded-xl border border-outline-variant card-shadow">
          <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Average Grade</p>
          <div className="flex items-end justify-between mt-2">
            <h3 className="text-headline-md font-bold text-on-surface">A-</h3>
            <div className="flex gap-1 text-secondary">
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-lg rounded-xl border border-outline-variant card-shadow">
          <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Current GPA</p>
          <div className="flex items-end justify-between mt-2">
            <h3 className="text-headline-md font-bold text-on-surface">3.72</h3>
            <Badge className="bg-green-50 text-green-600 border-0 text-xs">↑ 0.12</Badge>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">

        <div className="lg:col-span-2 space-y-md">
          <div className="bg-white rounded-xl border border-outline-variant card-shadow overflow-hidden">
            <div className="px-lg py-4 border-b border-outline-variant bg-surface-container-lowest/50 flex justify-between items-center">
              <h4 className="font-title-lg text-title-lg text-on-surface">Subject List</h4>
              <div className="flex gap-2">
                <Button variant="link" className="text-sm font-medium text-primary p-0 h-auto">Export CSV</Button>
                <Button variant="link" className="text-sm font-medium text-on-surface-variant p-0 h-auto">View History</Button>
              </div>
            </div>
            <Table>
              <TableHeader className="bg-surface-container-low text-on-surface-variant uppercase">
                <TableRow>
                  <TableHead className="px-lg py-4 font-semibold">Code</TableHead>
                  <TableHead className="px-lg py-4 font-semibold">Name</TableHead>
                  <TableHead className="px-lg py-4 font-semibold">Credits</TableHead>
                  <TableHead className="px-lg py-4 font-semibold">Lecturer</TableHead>
                  <TableHead className="px-lg py-4 font-semibold">Grade</TableHead>
                  <TableHead className="px-lg py-4 font-semibold">Progress</TableHead>
                  <TableHead className="px-lg py-4 font-semibold">Status</TableHead>
                  <TableHead className="px-lg py-4 font-semibold text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-body-md divide-y divide-outline-variant">
                <TableRow className="hover:bg-surface-container-lowest transition-colors group cursor-pointer">
                  <TableCell className="px-lg py-4 font-medium text-primary">SE401</TableCell>
                  <TableCell className="px-lg py-4 text-on-surface font-medium">Software Engineering</TableCell>
                  <TableCell className="px-lg py-4">3</TableCell>
                  <TableCell className="px-lg py-4 text-on-surface-variant">Dr. Alan Turing</TableCell>
                  <TableCell className="px-lg py-4"><span className="font-bold text-secondary">A</span></TableCell>
                  <TableCell className="px-lg py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                        <div className="h-full progress-gradient" style={{ width: '100%' }}></div>
                      </div>
                      <span className="text-xs">100%</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-lg py-4">
                    <Badge className="bg-purple-100 text-purple-700 border-0">Completed</Badge>
                  </TableCell>
                  <TableCell className="px-lg py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" className="h-8 w-8"><span className="material-symbols-outlined text-lg">visibility</span></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><span className="material-symbols-outlined text-lg">edit</span></Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-surface-container-lowest transition-colors group cursor-pointer bg-primary/5">
                  <TableCell className="px-lg py-4 font-medium text-primary">CS302</TableCell>
                  <TableCell className="px-lg py-4 text-on-surface font-medium">Database Systems</TableCell>
                  <TableCell className="px-lg py-4">3</TableCell>
                  <TableCell className="px-lg py-4 text-on-surface-variant">Prof. Grace Hopper</TableCell>
                  <TableCell className="px-lg py-4"><span className="font-bold text-on-surface-variant">A-</span></TableCell>
                  <TableCell className="px-lg py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                        <div className="h-full progress-gradient" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-xs">85%</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-lg py-4">
                    <Badge className="bg-blue-100 text-blue-700 border-0">Active</Badge>
                  </TableCell>
                  <TableCell className="px-lg py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" className="h-8 w-8"><span className="material-symbols-outlined text-lg">visibility</span></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><span className="material-symbols-outlined text-lg">edit</span></Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-surface-container-lowest transition-colors group cursor-pointer">
                  <TableCell className="px-lg py-4 font-medium text-primary">CS305</TableCell>
                  <TableCell className="px-lg py-4 text-on-surface font-medium">Computer Networks</TableCell>
                  <TableCell className="px-lg py-4">3</TableCell>
                  <TableCell className="px-lg py-4 text-on-surface-variant">Dr. Vint Cerf</TableCell>
                  <TableCell className="px-lg py-4"><span className="font-bold text-on-surface-variant">B+</span></TableCell>
                  <TableCell className="px-lg py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                        <div className="h-full progress-gradient" style={{ width: '70%' }}></div>
                      </div>
                      <span className="text-xs">70%</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-lg py-4">
                    <Badge className="bg-blue-100 text-blue-700 border-0">Active</Badge>
                  </TableCell>
                  <TableCell className="px-lg py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" className="h-8 w-8"><span className="material-symbols-outlined text-lg">visibility</span></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><span className="material-symbols-outlined text-lg">edit</span></Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-surface-container-lowest transition-colors group cursor-pointer">
                  <TableCell className="px-lg py-4 font-medium text-primary">ML401</TableCell>
                  <TableCell className="px-lg py-4 text-on-surface font-medium">Machine Learning</TableCell>
                  <TableCell className="px-lg py-4">3</TableCell>
                  <TableCell className="px-lg py-4 text-on-surface-variant">Dr. Fei-Fei Li</TableCell>
                  <TableCell className="px-lg py-4"><span className="font-bold text-secondary">A</span></TableCell>
                  <TableCell className="px-lg py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                        <div className="h-full progress-gradient" style={{ width: '90%' }}></div>
                      </div>
                      <span className="text-xs">90%</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-lg py-4">
                    <Badge className="bg-blue-100 text-blue-700 border-0">Active</Badge>
                  </TableCell>
                  <TableCell className="px-lg py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" className="h-8 w-8"><span className="material-symbols-outlined text-lg">visibility</span></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><span className="material-symbols-outlined text-lg">edit</span></Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="px-lg py-4 flex items-center justify-between bg-surface-container-lowest/50">
              <span className="text-label-md text-on-surface-variant">Showing 4 of 32 subjects</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-lg">
          <div className="bg-white rounded-xl border border-outline-variant card-shadow p-lg overflow-hidden relative">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest">Selected Subject</span>
                  <h4 className="text-title-lg font-bold text-on-surface mt-1">CS302: Database Systems</h4>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <span className="material-symbols-outlined text-on-surface-variant">more_horiz</span>
                </Button>
              </div>
              <div className="space-y-4">
                {[['Assignments', '92%'], ['Quizzes', '88%'], ['Mid Exam', '85%']].map(([label, val], i) => (
                  <div key={label}>
                    <div className="flex justify-between text-body-md mb-1">
                      <span className="text-on-surface-variant">{label}</span>
                      <span className="font-bold text-on-surface">{val}</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                      <div className={`h-full ${i === 1 ? 'bg-secondary' : 'bg-primary'}`} style={{ width: val }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-outline-variant card-shadow p-lg">
            <h4 className="text-label-md font-bold text-on-surface uppercase tracking-wider mb-lg">Grade Distribution</h4>
            <div className="flex items-end justify-between gap-2 h-32 px-2">
              {[['C', '40%'], ['B', '60%'], ['B+', '80%'], ['A-', '95%'], ['A', '70%']].map(([grade, h]) => (
                <div key={grade} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-surface-container-high rounded-t-sm relative group" style={{ height: h }}>
                    <div className={`absolute bottom-0 w-full ${grade === 'A-' ? 'bg-primary' : grade === 'A' ? 'bg-secondary' : 'bg-primary/40'} rounded-t-sm h-full group-hover:opacity-80 transition-all`}></div>
                  </div>
                  <span className={`text-[10px] ${grade === 'A-' ? 'text-on-surface font-bold' : 'text-on-surface-variant'}`}>{grade}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-outline-variant card-shadow p-lg">
            <h4 className="text-label-md font-bold text-on-surface uppercase tracking-wider mb-lg">Top Performing</h4>
            <ul className="space-y-4">
              {[
                { rank: 1, name: 'Software Engineering', score: '98/100', grade: 'A', color: 'bg-secondary/10 text-secondary' },
                { rank: 2, name: 'Digital Logic', score: '96/100', grade: 'A', color: 'bg-primary/10 text-primary' },
                { rank: 3, name: 'Calculus II', score: '94/100', grade: 'A', color: 'bg-surface-container-high text-on-surface-variant' },
              ].map(({ rank, name, score, grade, color }) => (
                <li key={rank} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center font-bold text-sm`}>{rank}</div>
                  <div className="flex-1">
                    <p className="text-body-md font-bold text-on-surface">{name}</p>
                    <p className="text-label-sm text-on-surface-variant">Score: {score}</p>
                  </div>
                  <span className="text-headline-sm font-black text-on-surface-variant/20">{grade}</span>
                </li>
              ))}
            </ul>
            <Button variant="ghost" className="w-full mt-6 py-2 text-sm font-medium text-primary">View All Top Scores</Button>
          </div>

          <div className="bg-primary p-lg rounded-xl card-shadow text-white">
            <h4 className="font-title-lg text-title-lg mb-4">Quick Actions</h4>
            <div className="grid grid-cols-1 gap-2">
              <Button variant="ghost" className="w-full py-2.5 px-4 bg-white/10 hover:bg-white/20 text-white text-sm font-medium justify-start gap-3">
                <span className="material-symbols-outlined">assignment</span>
                View Assignments
              </Button>
              <Button className="w-full py-2.5 px-4 bg-white text-primary hover:bg-white/90 text-sm font-bold justify-start gap-3">
                <span className="material-symbols-outlined">description</span>
                Generate Academic Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
