// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function createData(id, date, name, shipTo, paymentMethod, amount) {
	return { id, date, name, shipTo, paymentMethod, amount };
}

const orders = [
	createData(
		0,
		'16 Mar, 2019',
		'Elvis Presley',
		'Tupelo, MS',
		'VISA ⠀•••• 3719',
		312.44
	),
	createData(
		1,
		'16 Mar, 2019',
		'Paul McCartney',
		'London, UK',
		'VISA ⠀•••• 2574',
		866.99
	),
	createData(
		2,
		'16 Mar, 2019',
		'Tom Scholz',
		'Boston, MA',
		'MC ⠀•••• 1253',
		100.81
	),
	createData(
		3,
		'16 Mar, 2019',
		'Michael Jackson',
		'Gary, IN',
		'AMEX ⠀•••• 2000',
		654.39
	),
	createData(
		4,
		'15 Mar, 2019',
		'Bruce Springsteen',
		'Long Branch, NJ',
		'VISA ⠀•••• 5919',
		212.79
	),
	createData(
		5,
		'16 Mar, 2019',
		'Selena Gomez',
		'Tupelo, MS',
		'VISA ⠀•••• 3719',
		312.44
	),
	createData(
		6,
		'16 Mar, 2019',
		'Don Michael',
		'London, UK',
		'VISA ⠀•••• 2574',
		866.99
	),
	createData(
		7,
		'16 Mar, 2019',
		'Tom Cruz',
		'Boston, MA',
		'MC ⠀•••• 1253',
		100.81
	),
	createData(
		8,
		'16 Mar, 2019',
		'Leonardo Da Vinci',
		'Gary, IN',
		'AMEX ⠀•••• 2000',
		654.39
	),
	createData(
		9,
		'15 Mar, 2019',
		'Niki Lauda',
		'Long Branch, NJ',
		'VISA ⠀•••• 5919',
		212.79
	),
	createData(
		10,
		'16 Mar, 2019',
		'Juliette Silverton',
		'Tupelo, MS',
		'VISA ⠀•••• 3719',
		312.44
	),
	createData(
		11,
		'16 Mar, 2019',
		'Nick Berkhard',
		'London, UK',
		'VISA ⠀•••• 2574',
		866.99
	),
	createData(
		12,
		'16 Mar, 2019',
		'Hang Griffin',
		'Boston, MA',
		'MC ⠀•••• 1253',
		100.81
	),
	createData(
		13,
		'16 Mar, 2019',
		'Jessy Pinkman',
		'Gary, IN',
		'AMEX ⠀•••• 2000',
		654.39
	),
	createData(
		14,
		'15 Mar, 2019',
		'Walter White',
		'Long Branch, NJ',
		'VISA ⠀•••• 5919',
		212.79
	),
];

export default function handler(req, res) {
	const page = req.query.page;
	const start = page * 5;
	const end = start + 5;

	const result = orders.slice(start, end);

	res.status(200).json(result);
}
