import MysqlClient from '../dao/helper/MysqlClient';
const employeeClient = new MysqlClient().client;

export const findAllEmployees = async(req, res, next) => {
    //const employees = await employeeService.getAllEmployees();
    employeeClient.connect();
    const query = 'Select * FROM m_employee';
    employeeClient.query(query, function(error,result, filed){
        if (error) throw error;
        res.send(result);
    });
}
