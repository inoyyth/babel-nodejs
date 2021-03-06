import solr from 'solr-client';
import config from '../config.json';
import bluebird from 'bluebird';

export default class SolrClient {
    constructor(core) {
        this.client = bluebird.promisifyAll(solr.createClient({
            host: config.solr_slave.solrHost,
            port: config.solr_slave.solrPort,
            path: config.solr_slave.solrPath,
            core: core
        }))
    }
}
