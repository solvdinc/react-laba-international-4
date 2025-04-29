abstract class Department {
  name: string;
  protected employees: string[] = [];
  abstract abstractString: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract describe(): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  abstractString: string;
  public admins: string[];

  constructor(name: string, admins: string[]) {
    super(name);
    this.admins = admins;
    this.abstractString = '123';
  }

  describe(): void {
    console.log('It Department Description');
  }
}

class AccountingDepartment extends Department {
  abstractString: string;
  private reports: string[];

  constructor(name: string, reports: string[]) {
    super(name);
    this.reports = reports;
    this.abstractString = '123';
  }

  describe(): void {
    console.log('Accountind Department Description');
  }

  // @override
  addEmployee(employee: string): void {
    if (employee !== 'Ilya') {
      this.employees.push(employee);
    }
  }

  addReport(report: string) {
    this.reports.push(report);
  }
}

export {};
