import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="bg-background font-body-md text-on-background selection:bg-primary/20">
      <main className="flex min-h-screen flex-col md:flex-row">
        <section className="relative hidden overflow-hidden bg-login-gradient p-xl md:flex md:w-[40%] md:flex-col md:justify-between">
          <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-secondary-container/10 blur-3xl"></div>

          <div className="relative z-10 flex items-center gap-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                school
              </span>
            </div>
            <h1 className="font-headline-md text-headline-md font-bold tracking-tight text-white">Student Success Platform</h1>
          </div>

          <div className="relative z-10 my-auto space-y-lg">
            <div className="max-w-md">
              <h2 className="font-display text-display leading-tight text-white">Track, Analyze, and Improve Your Academic Success</h2>
              <p className="font-body-lg text-body-lg leading-relaxed text-white/80">
                Manage semesters, subjects, assignments, exams, GPA, and academic goals from a single platform.
              </p>
            </div>

            <div className="relative pt-lg">
              <img
                alt="Academic visualization"
                className="h-auto w-full transform object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
                src="/src/assets/hero.png"
              />
            </div>
          </div>

          <div className="relative z-10 flex flex-wrap gap-lg">
            <button className="font-label-md text-label-md text-white/60 transition-colors hover:text-white" type="button">
              Privacy Policy
            </button>
            <button className="font-label-md text-label-md text-white/60 transition-colors hover:text-white" type="button">
              Terms of Service
            </button>
            <button className="font-label-md text-label-md text-white/60 transition-colors hover:text-white" type="button">
              Contact Support
            </button>
          </div>
        </section>

        <header className="flex items-center justify-between border-b border-outline-variant bg-white p-lg md:hidden">
          <div className="flex items-center gap-sm">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="material-symbols-outlined text-[20px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                school
              </span>
            </div>
            <span className="font-title-lg text-title-lg text-primary">Student Success</span>
          </div>
          <Link className="font-label-md text-primary" to="/dashboard">
            Skip to dashboard
          </Link>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center overflow-y-auto bg-white p-md md:p-xl custom-scrollbar">
          <div className="w-full max-w-[480px] space-y-xl">
            <div className="space-y-xs text-center md:text-left">
              <h2 className="font-headline-lg text-headline-lg text-on-background">Welcome Back</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Sign in to continue your academic journey.</p>
            </div>

            <div className="login-card space-y-lg rounded-xl bg-white p-lg md:p-xl">
              <form className="space-y-md" id="loginForm">
                <div className="space-y-xs">
                  <label className="ml-xs font-label-md text-label-md text-on-surface-variant" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">mail</span>
                    <input
                      className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest py-md pl-xl pr-md font-body-md text-body-md placeholder:text-outline/60 transition-all focus:border-primary"
                      id="email"
                      name="email"
                      placeholder="student@example.com"
                      required
                      type="email"
                    />
                  </div>
                </div>

                <div className="space-y-xs">
                  <label className="ml-xs font-label-md text-label-md text-on-surface-variant" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">lock</span>
                    <input
                      className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest py-md pl-xl pr-xl font-body-md text-body-md placeholder:text-outline/60 transition-all focus:border-primary"
                      id="password"
                      name="password"
                      placeholder="••••••••"
                      required
                      type="password"
                    />
                    <button className="absolute right-md top-1/2 -translate-y-1/2 text-outline transition-colors hover:text-primary" type="button">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="group flex cursor-pointer items-center gap-sm">
                    <input className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary/20" type="checkbox" />
                    <span className="font-label-md text-label-md text-on-surface-variant transition-colors group-hover:text-on-surface">
                      Remember Me
                    </span>
                  </label>
                  <button className="font-label-md text-label-md text-primary hover:underline underline-offset-4" type="button">
                    Forgot Password?
                  </button>
                </div>

                <Link
                  className="flex w-full items-center justify-center gap-sm rounded-lg bg-primary py-md font-title-lg text-title-lg text-white transition-all hover:bg-primary/90 active:scale-[0.98]"
                  to="/dashboard"
                >
                  Sign In
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </form>

              <div className="flex items-center gap-md">
                <div className="h-px flex-1 bg-outline-variant"></div>
                <span className="font-label-md text-label-md uppercase tracking-widest text-outline">OR</span>
                <div className="h-px flex-1 bg-outline-variant"></div>
              </div>

              <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
                <button className="flex items-center justify-center gap-md rounded-lg border border-outline-variant px-md py-md transition-colors hover:bg-surface-container-low active:scale-[0.98]" type="button">
                  <span className="material-symbols-outlined text-primary">account_circle</span>
                  <span className="font-label-md text-label-md text-on-surface">Google</span>
                </button>
                <button className="flex items-center justify-center gap-md rounded-lg border border-outline-variant px-md py-md transition-colors hover:bg-surface-container-low active:scale-[0.98]" type="button">
                  <span className="material-symbols-outlined text-primary">business</span>
                  <span className="font-label-md text-label-md text-on-surface">Microsoft</span>
                </button>
              </div>

              <div className="pt-md text-center">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Don&apos;t have an account?{' '}
                  <button className="font-semibold text-primary hover:underline underline-offset-4" type="button">
                    Create Account
                  </button>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-md border-t border-outline-variant pt-lg">
              {['GPA Tracking', 'Assignment Management', 'Exam Tracking', 'Performance Insights'].map((label) => (
                <div key={label} className="group flex items-center gap-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-high text-primary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface-variant">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-sm text-outline opacity-70 md:justify-start">
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified_user
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider">Secure SSL Encryption</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
