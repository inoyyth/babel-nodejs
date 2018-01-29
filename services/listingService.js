import listing from '../dao/solr/listings';

export class ListingService {
    constructor(listingModel) {
        this.listingModel = listingModel;
    }
    async getAllListings() {
        const listingCollection = await this.listingModel.search();
        const solrStatus = listingCollection.responseHeader.status;
        if (solrStatus !== 0) {
            throw new Error('Solr search error!');
        }
        return {
            number: listingCollection.response.numFound,
            listings: listingCollection.response.docs
        };
    }

    async getListing(id) {
        const listingCollection = await this.listingModel.search(id);
        const solrStatus = listingCollection.responseHeader.status;
        if(solrStatus !== 0) {
            throw new Error('Solr search error!');
        }
        return {
            number: listingCollection.response.numFound,
            listings: listingCollection.response.docs
        };
    }
}

export default new ListingService(listing);