import employee from '../dao/mysql/employees';

export class EmployeeService {
    constructor(employeeModel) {
        this.employeeModel = employeeModel;
    }

    async getAllEmployees() {
        const employeeCollection = await this.employeeModel.search();
        return {
            employees: employeeCollection
        } 
    }

    async getEmployeeById(id) {
        const employeeCollection = await this.employeeModel.search(id);
        return {
            employees: employeeCollection
        } 
    }
}

export default new EmployeeService(employee);