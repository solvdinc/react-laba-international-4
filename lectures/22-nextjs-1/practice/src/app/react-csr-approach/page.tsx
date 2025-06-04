'use client';

import { useEffect, useState } from 'react';

import Tasks from '@/components/Tasks';
import { Task } from '@/interfaces/task';

export default function ReactApproach() {
	const [tasks, setTasks] = useState<Task[]>([]);

	useEffect(() => {
		fetch('/api/tasks')
			.then((res) => res.json())
			.then((data) => setTasks(data));
	}, []);

	return (
		<div>
			<main>
				<h1>Tasks</h1>
				<Tasks tasks={tasks} />
			</main>
		</div>
	);
}
