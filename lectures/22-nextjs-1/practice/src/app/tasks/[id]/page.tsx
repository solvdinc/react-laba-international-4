import { notFound } from 'next/navigation';
import { Task } from '@/interfaces/task';

/**
 * this page is dynamic by default because of wildcard [id]
 */
export default async function TaskSinglePage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	// const task = await fetch(`http://localhost:3001/api/tasks/${id}`, {
	// 	next: { revalidate: false }, // means: cache indefinitely after first build
	// });
	const task = await fetch(`http://localhost:3001/api/tasks/${id}`);
	const data: Task = await task.json();

	if (!data) {
		return notFound();
	}

	return (
		<div>
			<p>{data.title}</p>
			<p>{data.description}</p>
			<p>{data.status}</p>
			<p>{data.date}</p>
		</div>
	);
}

/**
 * static version
 */
export async function generateStaticParams() {
	const tasks = await fetch('http://localhost:3001/api/tasks?limit=1000');
	const data: Task[] = await tasks.json();

	return data.map((task) => ({ id: String(task.id) }));
}
