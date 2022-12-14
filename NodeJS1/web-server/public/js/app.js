// fetch('http://localhost:3000/weather?address=vasai').then((response) => {
//     response.
//     json().then((data) => {
//         console.log(data.forecast)
//         console.log(data.place)
//     })
// })
const messageOne = document.querySelector('#msg-1')
const messageTwo = document.querySelector('#msg-2')
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.
        json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.forecast.latitude
                messageTwo.textContent = data.place
            }
        })
    })
})