// App.js file

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// // It will store url in variable called url
// const url = "http://api.weatherstack.com/current?access_key=e97e04ae9219137b119f18e80a842504&query=37.8267,-122.4233&units=f"

// // It will request data from url
// request({ url: url }, (error, response) => {

//     // It will parse data
//     const data = JSON.parse(response.body);

//     // It will fetch current data 
//     console.log(data.current.weather_descriptions[0] + " It is currently " + data.current.temperature + " degrees out. It feels like " + data.current.feelslike + " degrees out");
// })

// const request = require('request');

// const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2liaW45ODciLCJhIjoiY2t4b2xxNHVyMDEzMTJxbXZtMnhyd2VsMiJ9.3h3ul5BdWCwh7Y6yHTDu7w'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Cannot Connect. Check your internet connection")
//     } else {
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0];
//         console.log("Latitude is " + latitude + " Longitude is " + longitude);
//     }

// })
// const geocode = (place, callback) => {
//     console.log("Loading....")
//     setTimeout(() => {
//             const data = {
//                 latitude: 45,
//                 longitude: 101
//             }
//             callback(data)
//         }, 6000)
//         //     const data = {
//         //         latitude: 100,
//         //         longitude: 101
//         //     }
//         //     callback(data)
//         // }

// }
// geocode("Mumbai", data1 => {
//     console.log(data1)
//     console.log("Here's your data....!!")
// })

// const geocode = (address, callback) => {
//     const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1Ijoic2liaW45ODciLCJhIjoiY2t4b2xxNHVyMDEzMTJxbXZtMnhyd2VsMiJ9.3h3ul5BdWCwh7Y6yHTDu7w"
//     request({ url: url, json: true }, (error, response) => {
//         callback(undefined, {
//             latitude: response.body.features[0].center[1],
//             longitude: response.body.features[0].center[0],
//             place: address
//         })


//     })
// }

const address = process.argv[2];


geocode(address, (error, { latitude, longitude, place }) => {
    if (error) {
        return console.log(error);
    } else {
        forecast(latitude, longitude, (error, { latitude, longitude }) => {
            if (error) {
                return console.log(error);
            }
            console.log(place);
            console.log(latitude);
            console.log(longitude);
        })
    }
})