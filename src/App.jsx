import { Header, Sidebar } from './components';
import { Post } from './Post';

import styles from './App.module.css';
import './global.css';

export function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post
						author='Luara Kerlen'
						content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae non delectus officia, exercitationem doloribus aliquam nulla quod cum deserunt consequuntur quis voluptates fugiat itaque nostrum in magnam neque ad ut.'
					/>
					<Post author='Laissy' content='Outro post' />
				</main>
			</div>
		</div>
	);
}
