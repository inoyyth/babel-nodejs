import mysql from 'mysql';
import config from '../config.json';
import bluebird from 'bluebird';

export default class MysqlClient {
    constructor() {
        this.client = bluebird.promisifyAll(mysql.createConnection({
            host: config.mysql_local.host,
            user: config.mysql_local.user,
            password: config.mysql_local.password,
            database: config.mysql_local.database
        }));
    }
}