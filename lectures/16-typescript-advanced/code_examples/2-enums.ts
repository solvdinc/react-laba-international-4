enum Role { // automatically set numbers
	ADMIN = 'ADMIN',
	READ_ONLY = 'READ_ONLY',
	AUTHOR = 'AUTHOR',
}

enum RoleDuplicated { // we can set numbers on our own
	ADMIN = 10, // 0
	READ_ONLY = 20, // 1
	AUTHOR = 30, // 2
}

type PersonType = {
	name: string;
	age: number;
	hobbies: string[];
	role: Role;
	roleCustom: RoleDuplicated;
};

const personInstance: PersonType = {
	name: 'Ilya',
	age: 22,
	hobbies: ['Cooking', 'Sports'],
	role: Role.ADMIN,
	roleCustom: RoleDuplicated.ADMIN,
};

console.log('personInstance', personInstance);

export {};
