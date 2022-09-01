const doSomeWork = (callback) => {
    callback(
        undefined,
        name = 'Sibin'
    )
}
doSomeWork((error, response) => {
    if (error) {
        return console.log(error)
    }
    console.log(response);
})