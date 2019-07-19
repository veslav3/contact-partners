'use strict'

require('dotenv').config()

const { readPartnerList } = require('./providers/partners')
const GoogleGeocoding = require('./providers/google-geocoding')

const WEBBIO_LOCATION = {
    lat: 51.839549,
    lon: 5.87837
}

const main = async () => {
    const partners = await readPartnerList('./data/partners.json')
    const result = await GoogleGeocoding.instance.findPartnerLocations(partners)
    console.log(partners)
}

if (require.main === module) {
    main()
}
