'use strict'

const Fs = require('fs')

const Partner = require('../../models/partner')
const { readPartnerList, writePartnerList } = require('../../providers/partners')

test('Read correctly from file', () => {
    expect(readPartnerList(`${__dirname}/../data/test.json`)).toEqual(partners)
})

test('Write to file correctly', () => {
    try {
        partners.push(new Partner("Zxy", {
            "no": "185",
            "street": "Hagmolenbeekweg",
            "city": "Enschede",
            "country": "The Netherlands"
        }))

        writePartnerList(partners.slice(), `${__dirname}/../data/test2.json`)

        const input = JSON.parse(Fs.readFileSync(`${__dirname}/../data/test2.json`))
        const expected = JSON.stringify(partners)

        expect(JSON.stringify(input)).toEqual(expected)
    } catch (err) {
        console.log(err)
    } finally {
        Fs.unlinkSync(`${__dirname}/../data/test2.json`)
    }
})

const partners = [
    new Partner("Wavetech",
        {
            "no": "185",
            "street": "Hagmolenbeekweg",
            "city": "Enschede",
            "country": "The Netherlands"
        }
    )
]
