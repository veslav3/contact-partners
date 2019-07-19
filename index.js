'use strict'

require('dotenv').config()

const { readPartnerList, writePartnerList } = require('./providers/partners')
const GoogleGeocoding = require('./providers/google-geocoding')
const Checks = require('./validations/checks')

const WEBBIO_LOCATION = {
    lat: 51.839549,
    lng: 5.87837
}

const main = async () => {
    const partners = await readPartnerList('./data/partners.json')
    await GoogleGeocoding.instance.findPartnerLocations(partners)
    const filteredPartners = partners.filter(p => {
        return Checks.isDistanceSmallerThan75KM(WEBBIO_LOCATION, p.location)
    })
    writePartnerList(filteredPartners, './data/result.json')
}

if (require.main === module) {
    main()
}
