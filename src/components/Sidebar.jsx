import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src='https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
				alt='Foto de capa'
			/>

			<div className={styles.profile}>
				<Avatar src='https://avatars.githubusercontent.com/u/26902816?v=4' />
				<strong>Luara Kerlen</strong>
				<span>Desenvolvedora Front-end</span>
			</div>

			<footer>
				<a href='#'>
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}
