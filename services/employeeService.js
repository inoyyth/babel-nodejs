import employee from '../dao/mysql/employees';

export class EmployeeService {
    constructor(employeeModel) {
        this.employeeModel = employeeModel;
        return 1;
    }

    async getAllEmployees() {
        const employeeCollection = await this.employeeModel.search();
        return {
            employees: employeeCollection
        } 
    }
}

export default new EmployeeService(employee);