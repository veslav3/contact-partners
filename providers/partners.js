'use strict'

const fs = require('fs')

const Partner = require('../models/partner')

const readPartnerList = async (fileLocation) => {
    const partners = []

    const readPartners = fs.readFileSync(fileLocation)
    const parsed = JSON.parse(readPartners)

    parsed.forEach(p => {
        partners.push(new Partner(p.name, p.address))
    });

    return partners
}

module.exports = {
    readPartnerList
}
