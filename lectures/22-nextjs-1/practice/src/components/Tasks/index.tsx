'use client';

import Link from 'next/link';

import { Task } from '@/interfaces/task';

import styles from './styles.module.css';

interface Props {
	tasks: Task[];
}

const Tasks = ({ tasks }: Props) => {
	return (
		<ul className={styles.tasksContainer}>
			{tasks.map((task) => (
				<li className={styles.taskItem} key={task.id}>
					<Link href={`/tasks/${task.id}`} className={styles.taskLink}>
						<p>{task.title}</p>
						<p>{task.description}</p>
						<p>{task.status}</p>
						<p>{task.date}</p>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Tasks;
