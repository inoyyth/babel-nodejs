import MysqlClient from '../helper/MysqlClient';
const employeeClient = new MysqlClient().client;

export default {
    search: async(id) => {
        //employeeClient.connect();
        var query = 'Select * FROM m_employee';
        if (id) {
            query = 'SELECT * FROM m_employee WHERE id = ' + id;
        }
        const xQuery = await employeeClient.queryAsync(query);
        //employeeClient.end();
        return await xQuery;
    }
}