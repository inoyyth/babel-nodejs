import {EmployeeService} from '../../services/employeeService';
import employee from '../../dao/mysql/employees';
import chaiAsPromised from 'chai-as-promised';
import chai from 'chai';
import sinon from 'sinon';
chai.use(chaiAsPromised);
const { expect } = chai;

describe('Employee Service', () => {
    describe('#getAllEmployees', () => {
        const baseResponse = {
            employees: [
                {name: "employee" }
            ]
        }
        it('should return all employee from mysql', async() => {
            sinon.stub(employee, 'search').callsFake(() => baseResponse);
            const employeeService = new EmployeeService(employee);
            const result = await employeeService.getAllEmployees();
            //console.log("RESULT", result);
            employee.search.restore();
            expect(result).to.deep.equal({
                employees :{
                    employees: [
                        {name: "employee" }
                    ]
                }
            });
        });
    });
});