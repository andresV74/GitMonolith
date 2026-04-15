import { Header } from './components/Header/Header.tsx';
import { Aside } from './components/Aside.tsx';

function App() {

  return (
    <>
      <Header />
      <div className="flex min-h-[calc(100vh-64px)]">
        <Aside />
      {/* <!-- Main Content Area --> */}
      <main className="flex-grow md:ml-64 p-8 flex items-center justify-center bg-surface">
      <div className="w-full max-w-2xl flex flex-col gap-8">
      {/* <!-- Language Selector Header --> */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="space-y-1">
      <h1 className="text-3xl font-bold font-headline text-on-surface tracking-tight">Repository Finder</h1>
      <p className="text-on-surface-variant font-body">Discover your next open-source project.</p>
      </div>
      <div className="relative group">
      <label className="font-label text-[10px] uppercase tracking-widest text-primary mb-1 block ml-1">Language Filter</label>
      <div className="bg-surface-container-lowest flex items-center gap-3 px-4 py-2.5 rounded-lg group-hover:bg-surface-container transition-colors cursor-pointer min-w-[180px]">
      <span className="material-symbols-outlined text-primary text-lg">code</span>
      <span className="text-on-surface font-body font-medium flex-grow">JavaScript</span>
      <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
      </div>
      </div>
      </div>
      {/* <!-- Main Card Area: The Monolith Component --> */}
      <div className="bg-surface-container rounded-xl overflow-hidden shadow-2xl relative group">
      {/* <!-- Glassmorphism Accent --> */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
      {/* <!-- Repository Content --> */}
      <div className="p-10 flex flex-col gap-8 relative z-10">
      <div className="space-y-4">
      <div className="flex items-start justify-between">
      <a className="text-4xl font-extrabold text-primary font-headline tracking-tighter hover:text-primary-fixed-dim transition-colors" href="#">
                                          monolith-engine/core-cli
                                      </a>
      <div className="bg-tertiary-container/20 text-tertiary px-3 py-1 rounded-full font-label text-[10px] uppercase font-bold tracking-widest">
                                          Trending
                                      </div>
      </div>
      <p className="text-xl text-on-surface-variant font-body leading-relaxed max-w-xl">
                                      A high-performance, asynchronous CLI toolkit designed for building complex architectural monoliths with seamless state management and real-time telemetry.
                                  </p>
      </div>
      {/* <!-- Stats Grid --> */}
      <div className="grid grid-cols-3 gap-6">
      <div className="bg-surface-container-low p-4 rounded-lg flex flex-col gap-2">
      <div className="flex items-center gap-2 text-primary">
      <span className="material-symbols-outlined text-lg">star</span>
      <span className="font-label text-[10px] uppercase tracking-widest font-bold">Stars</span>
      </div>
      <span className="text-2xl font-headline font-bold text-on-surface">12.4k</span>
      </div>
      <div className="bg-surface-container-low p-4 rounded-lg flex flex-col gap-2">
      <div className="flex items-center gap-2 text-primary">
      <span className="material-symbols-outlined text-lg">account_tree</span>
      <span className="font-label text-[10px] uppercase tracking-widest font-bold">Forks</span>
      </div>
      <span className="text-2xl font-headline font-bold text-on-surface">842</span>
      </div>
      <div className="bg-surface-container-low p-4 rounded-lg flex flex-col gap-2">
      <div className="flex items-center gap-2 text-error">
      <span className="material-symbols-outlined text-lg">error</span>
      <span className="font-label text-[10px] uppercase tracking-widest font-bold">Issues</span>
      </div>
      <span className="text-2xl font-headline font-bold text-on-surface">14</span>
      </div>
      </div>
      {/* <!-- Main Action --> */}
      <div className="mt-4">
      <button className="w-full py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold font-headline text-lg rounded-lg shadow-lg hover:shadow-primary/20 hover:scale-[1.01] transition-all active:scale-95 flex items-center justify-center gap-3">
      <span className="material-symbols-outlined" style={{fontVariationSettings: 'FILL'}}>casino</span>
                                      Fetch Random Repository
                                  </button>
      </div>
      </div>
      {/* <!-- Subtle Footer within Card --> */}
      <div className="bg-surface-container-highest/30 px-10 py-4 flex items-center justify-between border-t border-outline-variant/10">
      <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-[#f1e05a]"></div>
      <span className="font-label text-xs text-on-surface-variant uppercase tracking-wider">JavaScript</span>
      </div>
      <span className="font-label text-xs text-on-secondary-fixed-variant uppercase tracking-wider">Updated 2h ago</span>
      </div>
      </div>
      {/* <!-- Secondary Bento Area --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-surface-container-low p-6 rounded-lg group cursor-pointer hover:bg-surface-container transition-all">
      <div className="flex items-center gap-3 mb-3">
      <span className="material-symbols-outlined text-tertiary">history</span>
      <h3 className="font-label text-xs uppercase tracking-widest font-bold text-on-surface">Search History</h3>
      </div>
      <div className="space-y-2">
      <div className="text-sm font-body text-on-surface-variant flex justify-between">
      <span>hyper-terminal/v4</span>
      <span className="text-[10px] opacity-50">10m ago</span>
      </div>
      <div className="text-sm font-body text-on-surface-variant flex justify-between">
      <span>rust-lang/cargo</span>
      <span className="text-[10px] opacity-50">1h ago</span>
      </div>
      </div>
      </div>
      <div className="bg-surface-container-low p-6 rounded-lg group cursor-pointer hover:bg-surface-container transition-all flex flex-col justify-center">
      <div className="text-center">
      <div className="text-primary font-headline text-3xl font-extrabold mb-1">2,840+</div>
      <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Repos Fetched Today</div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
      {/* <!-- Mobile Navigation (Bottom) --> */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#181c22] flex items-center justify-around z-50">
      <button className="flex flex-col items-center justify-center gap-1 text-[#acc7ff]">
      <span className="material-symbols-outlined">explore</span>
      <span className="text-[10px] font-['Space_Grotesk'] uppercase tracking-tighter">Explore</span>
      </button>
      <button className="flex flex-col items-center justify-center gap-1 text-[#90949a]">
      <span className="material-symbols-outlined">star</span>
      <span className="text-[10px] font-['Space_Grotesk'] uppercase tracking-tighter">Favorites</span>
      </button>
      <button className="flex flex-col items-center justify-center gap-1 text-[#90949a]">
      <span className="material-symbols-outlined">history</span>
      <span className="text-[10px] font-['Space_Grotesk'] uppercase tracking-tighter">History</span>
      </button>
      <button className="flex flex-col items-center justify-center gap-1 text-[#90949a]">
      <span className="material-symbols-outlined">person</span>
      <span className="text-[10px] font-['Space_Grotesk'] uppercase tracking-tighter">Profile</span>
      </button>
      </nav>
    </>
  )
}

export default App
