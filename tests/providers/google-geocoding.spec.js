'use strict'

const fs = require('fs')

const Partner = require('../../models/partner')
const GoogleGeocoding = require('../../providers/google-geocoding')

test('Expect address to be constructed correctly.', () => {
    expect(
        GoogleGeocoding.instance.extractAdress(partner)
    ).toBe('Hagmolenbeekweg 185, Enschede, The Netherlands')
})

const partner = new Partner("Wavetech",
    {
        "no": "185",
        "street": "Hagmolenbeekweg",
        "city": "Enschede",
        "country": "The Netherlands"
    }
)
