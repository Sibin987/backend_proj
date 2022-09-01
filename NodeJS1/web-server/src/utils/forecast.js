// forecast.js file



const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=e97e04ae9219137b119f18e80a842504&query=" + latitude + ',' + longitude + "&units=f"
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback("Error", undefined)
        } else if (response.body.error) {
            callback("Error1", undefined)
        } else {
            callback(
                undefined, ({
                    latitude,
                    longitude
                })

            )
        }
    })
}

module.exports = forecast;