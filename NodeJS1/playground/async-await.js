const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(a + b);
        }, 2000)
    })
}


const doSomeWork = async() => {
    const sum1 = await add(1, 99)
    const sum2 = await add(sum1, 100)
    const sum3 = await add(sum2, 100)
    return sum3;
}


doSomeWork().then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e);
})

// const doSomeWork = async() => {
//     return 'Sibin';
// }

// doSomeWork().then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e);
// })