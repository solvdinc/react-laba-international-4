/**
 * PARTIAL
 */
interface PartialTest {
	prop1: number;
	prop2: string;
	prop3: boolean;
	prop4: (value: number) => number;
}

class PartialClassImpl1 implements PartialTest {
	prop1: number;
	prop2: string;
	prop3: boolean;
	// prop4: (value: number) => number;
}

class PartialClassImpl2 implements Partial<PartialTest> {
	prop1: number;
	prop2: string;
	prop3: boolean;
	prop4: (value: number) => number;
}

/**
 * RECORD
 */
const someObg: Record<string, string | number> = {
	test: 'some string',
	value: 123,
	value1: 123,
	value2: 123,
};
someObg.newProp = 123;

/**
 * OMIT
 */
type Cell = {
	x: number;
	y: number;
	description: string;
	refs: string[];
};

type SimplifiedCell = Omit<Cell, 'refs' | 'description'>;

const commonCell: Cell = {
	x: 1,
	y: 1,
	description: 'text',
	refs: [],
};

const simpleCell: SimplifiedCell = {
	x: 1,
	y: 1,
};

export {};
