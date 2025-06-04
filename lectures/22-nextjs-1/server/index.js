const express = require('express');
const cors = require('cors');

const tasks = require('./tasks.json');

const app = express();
const port = 3001;

const getRandomTasks = (limit = 10) => {
	return tasks.sort(() => Math.random() - 0.5).slice(0, limit);
};

// Middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
	console.log(`${req.url} - Date: ${new Date().toISOString()}`);
	next();
});

// GET all tasks
app.get('/api/tasks', (req, res) => {
	const limit = req.query.limit ? parseInt(req.query.limit) : 10;

	res.json(getRandomTasks(limit));
});

app.get('/api/tasks/:id', (req, res) => {
	const task = tasks.find((t) => t.id === Number(req.params.id));

	if (!task) {
		return res.status(404).json({ message: 'Task not found' });
	}

	res.json(task);
});

// GET single task
app.get('/api/tasks/:id', (req, res) => {
	const task = tasks.find((t) => t.id === parseInt(req.params.id));
	if (!task) return res.status(404).json({ message: 'Task not found' });
	res.json(task);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
