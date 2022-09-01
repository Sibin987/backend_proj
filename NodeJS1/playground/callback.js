// const add = (a, b, callback) => {
//     console.log("Please Wait......")
//     setTimeout(() => {
//         sum = a + b;
//         callback(sum);
//     }, 6000)
// }

// add(1, 4, (sum1) => {
//     console.log(sum1);
//     console.log("Here's the answer")
// })

const multiply = (a, b, callback) => {
    console.log("Loading...")
    setTimeout(() => {
        mul1 = a * b;
        callback(mul1)
    }, 6000)
}

multiply(2, 5, mul => {
    console.log(mul);
})