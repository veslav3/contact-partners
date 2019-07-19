'use strict'

const { readPartnerList } = require('./providers/partners')

const WEBBIO_LOCATION = {
    lat: 51.839549,
    lon: 5.87837
}

const main = async () => {
    const partners = await readPartnerList('./data/partners.json')
    console.log(partners)
}

if (require.main === module) {
    main()
}
