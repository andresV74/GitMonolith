import styles from './Header.module.scss';

export function Header() {
	return (
		<header className={styles.header}>
			<div className="flex items-center gap-8">
				<span className="text-xl font-bold tracking-tighter text-gm-blue">GitMonolith</span>
				<nav className="hidden md:flex items-center gap-6">
					<a className="text-gm-gray hover:text-gm-blue transition-colors font-['Inter']" href="#">Explore</a>
					<a className="text-gm-gray hover:text-gm-blue transition-colors font-['Inter']" href="#">Trending</a>
					<a className="text-gm-gray hover:text-gm-blue transition-colors font-['Inter']" href="#">Collections</a>
				</nav>
			</div>
			<div className="flex items-center gap-4">
				<button className="p-2 rounded-lg hover:bg-[#262a31] transition-all text-gm-blue active:scale-95 duration-200">
					<span className="material-symbols-outlined">notifications</span>
				</button>
				<button className="p-2 rounded-lg hover:bg-[#262a31] transition-all text-gm-blue active:scale-95 duration-200">
					<span className="material-symbols-outlined">settings</span>
				</button>
				<div className="w-8 h-8 rounded-full overflow-hidden ml-2 bg-surface-container-high">
					<img alt="User profile" className="w-full h-full object-cover" data-alt="Close-up portrait of a professional software architect with a focused expression, warm cinematic lighting, dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKPPQ9IxdUTdqIYv5KX5F-c6RggC-HJzS8L-X-tnwX5j0Rib0gyW_jtvo9hQoSEBCUUV6RTzSKa7SJdU9UcbbLAr3OawuBCtX39oEPXgxE4oscl7tdubsIW0pfmpiGnq1b3qAh9zo0ShYefTdz9dIlBjoAB7DdBdLRfLavazUyBBcPcMYCOiBZwfE0cVZ5dCGKLteJLergiLxpblTYmDY9rlss0Je-vG5kPCKhZIKzwzhEWjs3AccFpEa4RBu01RJ3XetHvzZWLxrq"/>
				</div>
			</div>
		</header>
	)
}