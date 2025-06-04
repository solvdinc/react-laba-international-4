import { Task } from '@/interfaces/task';
import Tasks from '@/components/Tasks';

/**
 *
 * fetch responses are not cached by default.
 * However, Next.js will prerender the route and the output will be cached for improved performance.
 * If you'd like to opt into dynamic rendering, use the { cache: 'no-store' } option.
 */
const FetchApiApproach = async () => {
	const tasks = await fetch('http://localhost:3001/api/tasks', {
		cache: 'no-store',
	});
	const data: Task[] = await tasks.json();

	return (
		<div>
			<h1>Tasks Without Cache</h1>
			<Tasks tasks={data} />
		</div>
	);
};

export default FetchApiApproach;
