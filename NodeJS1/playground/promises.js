// const add = (a, b) => {
//     return new Promise((resolve, reject) => {
//         resolve(a + b);
//     })
// }

// add(5, 6).then((sum) => {
//     console.log(sum);
//     console.log("Another Value will be printing in a sec")
//     setTimeout(() => {
//         console.log("Loading....");
//         setTimeout(() => {
//             add(sum, 11).then((ans) => {
//                 console.log(ans)
//             }).catch((e) => {
//                 console.log(e);
//             })
//         }, 6000)
//     }, 6000)
// }).catch((e) => {
//     console.log(e);
// })


// const work = (callback) => {callback("Error bhai", undefined); }
//     
// }
// work((error, response) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log(response);
// })

const promise = new Promise((resolve, reject) => {
    reject("Success1")
})

promise.then((resolve) => {
    console.log(resolve);
}).catch((reject) => {
    console.log(reject);
})