// import MysqlClient from '../dao/helper/MysqlClient';
// const employeeClient = new MysqlClient().client;
import EmployeeService from "../services/employeeService";

export const findAllEmployees = async(req, res, next) => {
    const result = await EmployeeService.getAllEmployees();
    res.send(result);
}

export const findEmployeeById = async(req, res, next) => {
    console.log(req.params.id);
    const id = req.params.id;
    const result = await EmployeeService.getEmployeeById(id);
    res.send(result);
}