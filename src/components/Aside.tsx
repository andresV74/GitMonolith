export function Aside() {
	return (
		<aside className="h-screen w-64 fixed left-0 top-16 bg-[#181c22] flex-col py-8 shadow-xl shadow-black/40 hidden md:flex">
      <div className="px-6 mb-8">
				<div className="flex items-center gap-3 mb-4">
					<div className="w-10 h-10 bg-surface-container-high rounded-lg flex items-center justify-center">
						<span className="material-symbols-outlined text-[#acc7ff]">terminal</span>
					</div>
					<div>
						<div className="font-['Space_Grotesk'] uppercase tracking-wider text-[10px] text-[#90949a]">Monolith Engine</div>
						<div className="font-['Space_Grotesk'] uppercase tracking-wider text-[8px] text-[#acc7ff]">v2.4.0-stable</div>
					</div>
				</div>
				<button className="w-full py-2 bg-linear-to-br from-[#acc7ff] to-[#0069da] text-[#002f68] font-bold rounded-lg text-sm active:scale-95 transition-transform">
					New Search
				</button>
      </div>
      <nav className="grow">
				<div className="flex items-center gap-3 px-6 py-3 bg-[#1c2026] text-[#acc7ff] font-bold border-r-4 border-[#acc7ff] font-['Space_Grotesk'] uppercase tracking-wider text-xs">
					<span className="material-symbols-outlined">book</span>
					<span>Repositories</span>
				</div>
				<div className="flex items-center gap-3 px-6 py-3 text-[#90949a] hover:bg-[#1c2026] hover:text-[#c4c7ce] transition-all font-['Space_Grotesk'] uppercase tracking-wider text-xs cursor-pointer">
					<span className="material-symbols-outlined">code</span>
					<span>Languages</span>
				</div>
				<div className="flex items-center gap-3 px-6 py-3 text-[#90949a] hover:bg-[#1c2026] hover:text-[#c4c7ce] transition-all font-['Space_Grotesk'] uppercase tracking-wider text-xs cursor-pointer">
					<span className="material-symbols-outlined">star</span>
					<span>Favorites</span>
				</div>
				<div className="flex items-center gap-3 px-6 py-3 text-[#90949a] hover:bg-[#1c2026] hover:text-[#c4c7ce] transition-all font-['Space_Grotesk'] uppercase tracking-wider text-xs cursor-pointer">
					<span className="material-symbols-outlined">history</span>
					<span>History</span>
				</div>
      </nav>
      <div className="mt-auto px-6 py-4 space-y-4">
				<div className="flex items-center gap-3 text-[#90949a] hover:text-[#c4c7ce] cursor-pointer font-['Space_Grotesk'] uppercase tracking-wider text-[10px]">
					<span className="material-symbols-outlined text-sm">help</span>
					<span>Support</span>
				</div>
				<div className="flex items-center gap-3 text-[#90949a] hover:text-[#c4c7ce] cursor-pointer font-['Space_Grotesk'] uppercase tracking-wider text-[10px]">
					<span className="material-symbols-outlined text-sm">description</span>
					<span>Documentation</span>
				</div>
      </div>
		</aside>
	)
}