// geocode.js file

const request = require("request")

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1Ijoic2liaW45ODciLCJhIjoiY2t4b2xxNHVyMDEzMTJxbXZtMnhyd2VsMiJ9.3h3ul5BdWCwh7Y6yHTDu7w"
    request({ url, json: true }, (error, { body }) => {
        callback(undefined, {
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0],
            place: body.features[0].place_name
        })


    })
}




module.exports = geocode;