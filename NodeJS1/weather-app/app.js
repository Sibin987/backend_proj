console.log('Starting')

setTimeout(() => {
    console.log('Bhai 2 min rukja')
}, 2000)

console.log('Ending')


// Working of a call stack

const getLOcation = (locations1) => {
    locations1.forEach((location) => {
        console.log(location)
    })
}

const locations = ['Mumbai', 'Kerala']

getLOcation(locations)

e97e04ae9219137b119f18e80a842504