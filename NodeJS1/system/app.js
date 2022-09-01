const si = require('systeminformation');

si.cpu().then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e);
})

si.system().then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e);
})

si.cpu().then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e);
})