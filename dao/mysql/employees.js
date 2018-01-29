import MysqlClient from '../helper/MysqlClient';
const employeeClient = new MysqlClient().client;

export default {
    search: async(id) => {
        employeeClient.connect();
        const query = 'Select * FROM m_employee';
        const xQuery = employeeClient.query(query, function(error,result, filed){
            if (error) throw error;
        });
        return await xQuery;
    }
}