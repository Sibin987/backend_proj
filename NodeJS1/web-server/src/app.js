const express = require('express');
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// It wil store all superpowers of express in variable app
const app = express();

const publicDirectory = path.join(__dirname, '../public');

const viewsDirectory = path.join(__dirname, '../templates/views');

const partialDirectory = path.join(__dirname, '../templates/partials');

hbs.registerPartials(partialDirectory)

app.set('view engine', 'hbs');
app.set('views', viewsDirectory)
app.use(express.static(publicDirectory));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Sibin Varghese'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Weather',
        name: 'Sibin Varghese'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Weather',
        name: 'Sibin Varghese'
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "Enter a valid query"
        })
    }
    res.send({
        product: {}
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "Enter valid adddress"
        })
    }


    geocode(req.query.address, (error, { latitude, longitude, place }) => {
        if (error) {
            return res.send({ error });
        } else {
            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    return res.send({ error });
                }
                res.send({
                    forecast: forecastData,
                    place: place,
                    address: req.query.address
                })
            })
        }
    })
})

// app.get('', (req, res) => {
//     res.send("Hello Express");
// })

// app.get('/help', (req, res) => {
//     res.send({
//         name: "Sibin",
//         age: 20
//     });
// })

// app.get('/about', (req, res) => {
//     res.send("<h1>About Page</h1>");
// })

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: "50 Degree",
//         location: "Mumbai"
//     })
// })


app.listen(3000, () => {
    console.log("Server is running at port 3000");
})