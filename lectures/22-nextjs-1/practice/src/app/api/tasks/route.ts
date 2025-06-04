import tasks from '@/mocks/tasks.json';

const getRandomTasks = (limit = 10) => {
	return tasks.sort(() => Math.random() - 0.5).slice(0, limit);
};

export async function GET() {
	// const limit = request.nextUrl.searchParams.get('limit');
	// const status = request.nextUrl.searchParams.get('status');

	return new Response(JSON.stringify(getRandomTasks(12)), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
}
