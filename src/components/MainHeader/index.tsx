import styles from './index.module.scss';

export function MainHeader() {
	return (
		<div className={styles['main-header']}>
			<div>
				<h1>Repository Finder</h1>
				<p>Discover your next open-source project.</p>
			</div>
			<div>
				<label>Language Filter</label>
				<form action="" method="get">
					<span className="material-symbols-outlined text-primary text-lg">code</span>
					<select name="" id="">
						<option value="">Select a language</option>
						<option value="javascript">JavaScript</option>
						<option value="python">Python</option>
						<option value="java">Java</option>
					</select>
				</form>
			</div>
		</div>
	)
}