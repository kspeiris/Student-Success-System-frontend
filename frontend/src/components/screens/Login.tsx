export default function Login() {
  return (
    <div className="bg-background font-body-md text-on-background selection:bg-primary/20">
<main className="min-h-screen flex flex-col md:flex-row">

<section className="hidden md:flex md:w-[40%] bg-login-gradient relative flex-col justify-between p-xl overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

<div className="relative z-10 flex items-center gap-md">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-primary" style={{ "fontVariationSettings": "'FILL' 1" }}>school</span>
</div>
<h1 className="font-headline-md text-headline-md text-white font-bold tracking-tight">Student Success Platform</h1>
</div>

<div className="relative z-10 space-y-lg my-auto">
<div className="max-w-md">
<h2 className="font-display text-display text-white mb-md leading-tight">Track, Analyze, and Improve Your Academic Success</h2>
<p className="font-body-lg text-body-lg text-white/80 leading-relaxed">
                        Manage semesters, subjects, assignments, exams, GPA, and academic goals from a single platform.
                    </p>
</div>

<div className="relative pt-lg">
<img alt="Academic Visualization" className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsv6aGI83yCkvjBBsGDvqIffUwnVqUbBBV0QuDy5ez6KEfz6iksoST1uF_TsAZ3vEW26NIPNU3bAHOEIwDkOege2c_UB9N0XRemVULOYvrFplCbxcBXMs1PXktn5gtseSJIV7VZbqoIu82tN854o5efNRJFIccWUx9u3MnYxWeiqc75Steuhguq7SGsWmQ_DZhYYNc1zm08s9HcT6o1YTFLqjdATPbsLGqIC5iBV3pIBu_zjaygWK_wmKI61lIC7IB6TkHz0rlBEhQ"/>
</div>
</div>

<div className="relative z-10 flex flex-wrap gap-lg">
<a className="font-label-md text-label-md text-white/60 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="font-label-md text-label-md text-white/60 hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="font-label-md text-label-md text-white/60 hover:text-white transition-colors" href="#">Contact Support</a>
</div>
</section>

<header className="md:hidden p-lg flex items-center justify-between bg-white border-b border-outline-variant">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-white text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>school</span>
</div>
<span className="font-title-lg text-title-lg text-primary">Student Success</span>
</div>
</header>

<section className="flex-1 flex flex-col items-center justify-center p-md md:p-xl bg-white overflow-y-auto custom-scrollbar">
<div className="w-full max-w-[480px] space-y-xl">

<div className="text-center md:text-left space-y-xs">
<h2 className="font-headline-lg text-headline-lg text-on-background">Welcome Back 👋</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Sign in to continue your academic journey.</p>
</div>

<div className="login-card bg-white p-lg md:p-xl rounded-xl space-y-lg">
<form className="space-y-md" id="loginForm">

<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant ml-xs" htmlFor="email">Email Address</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">mail</span>
<input className="w-full pl-xl pr-md py-md bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-body-md placeholder:text-outline/60 focus:border-primary transition-all" id="email" name="email" placeholder="student@example.com" required type="email"/>
</div>
</div>

<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant ml-xs" htmlFor="password">Password</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">lock</span>
<input className="w-full pl-xl pr-xl py-md bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-body-md placeholder:text-outline/60 focus:border-primary transition-all" id="password" name="password" placeholder="••••••••" required type="password"/>
<button className="absolute right-md top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors" type="button">
<span className="material-symbols-outlined" id="passwordToggleIcon">visibility</span>
</button>
</div>
</div>

<div className="flex items-center justify-between">
<label className="flex items-center gap-sm cursor-pointer group">
<input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20" type="checkbox"/>
<span className="font-label-md text-label-md text-on-surface-variant group-hover:text-on-surface transition-colors">Remember Me</span>
</label>
<a className="font-label-md text-label-md text-primary hover:underline underline-offset-4" href="#">Forgot Password?</a>
</div>

<button className="w-full py-md bg-primary text-white font-title-lg text-title-lg rounded-lg hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-sm" type="submit">
                            Sign In
                            <span className="material-symbols-outlined">arrow_forward</span>
</button>
</form>

<div className="flex items-center gap-md">
<div className="flex-1 h-px bg-outline-variant"></div>
<span className="font-label-md text-label-md text-outline uppercase tracking-widest">OR</span>
<div className="flex-1 h-px bg-outline-variant"></div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
<button className="flex items-center justify-center gap-md px-md py-md border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors active:scale-[0.98]">
<img className="w-5 h-5" data-alt="Official high-quality Google company logo icon with clean colors and minimalist aesthetic on a white circular background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgkXz9E5KU6VxCSSSe84M2VydOiYxGbrqyaGKQcY6SR2Y6SnKPlxNUg2gS_OhfimdxCQF7yvITJ4MAvsLG9qCJZuZBXmvLm_uZS8v70Mwj7gRFvR5C11rh-wlQOPHtw1qYbD5tCioN2Q6qHeM7-0la3w8DYBwEgluUC8sAO4SEeHUYMx1Rx7DHzAlMLXiGeDu3RBvRfngX9uKJqkhUxdrN1px8pNEZ16kQSJW86a4-y8IJmgDAmKmwR0f_vbahVBgTWUiYrFmdRQkP"/>
<span className="font-label-md text-label-md text-on-surface">Google</span>
</button>
<button className="flex items-center justify-center gap-md px-md py-md border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors active:scale-[0.98]">
<img className="w-5 h-5" data-alt="Official high-quality Microsoft company logo icon with clean colors and minimalist aesthetic on a white circular background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVATydooqe2fAcbRqoMznFZjsksTecRmlvvlolU00ZoNpeLR_4Obs7Lc94R1O3KXC-2Xgkij6zgVBLwp0q6U2iFYWE4Oyt8wg2ChTMhcdYaLcNKW9RhsNv1KOJiAxTVKQkWHJKf53tssyHdbJZIuYV6N96GN1nRvJ9QlGa3m_5SfvZMZpHa7W3dZAL_mOTPEG75C1LzGG-bQ5Ec5M1vnTmLvftVmk80QiVfkcUSMBldj5ZbMvjxrrBUFbo-FQ5j0mu1wnq5k1p3L-w"/>
<span className="font-label-md text-label-md text-on-surface">Microsoft</span>
</button>
</div>

<div className="pt-md text-center">
<p className="font-body-md text-body-md text-on-surface-variant">
                            Don't have an account? 
                            <a className="text-primary font-semibold hover:underline underline-offset-4" href="#">Create Account</a>
</p>
</div>
</div>

<div className="grid grid-cols-2 gap-md pt-lg border-t border-outline-variant">
<div className="flex items-center gap-sm group">
<div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">GPA Tracking</span>
</div>
<div className="flex items-center gap-sm group">
<div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Assignment Management</span>
</div>
<div className="flex items-center gap-sm group">
<div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Exam Tracking</span>
</div>
<div className="flex items-center gap-sm group">
<div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Performance Insights</span>
</div>
</div>

<div className="flex justify-center md:justify-start items-center gap-sm text-outline opacity-70">
<span className="material-symbols-outlined text-[16px]" style={{ "fontVariationSettings": "'FILL' 1" }}>verified_user</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Secure SSL Encryption</span>
</div>
</div>
</section>
</main>
    </div>
  );
}
