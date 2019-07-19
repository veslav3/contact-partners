'use strict'

const GoogleMapsClient = require('@google/maps')

let currentInstance

class GoogleGeocoding {
    constructor(API_KEY) {
        this.client = GoogleMapsClient.createClient({
            key: API_KEY,
            Promise: Promise
        });
    }

    async getLocation(address) {
        return this.client.geocode({address})
            .asPromise()
    }

    async findPartnerLocations(partners) {
        for (const p of partners) {
            const call = await this.getLocation(this.extractAdress(p))
            const location = call.json.results[0].geometry.location
            p.addLocation(location)
        }
    }

    extractAdress(partner) {
        const {street, no, city, country} = partner.address

        return `${street} ${no}, ${city}, ${country}`
    }

    static get instance() {
        if (!currentInstance) {
            currentInstance = new GoogleGeocoding(process.env.API_KEY)
        }
        return currentInstance
    }
}

module.exports = GoogleGeocoding
