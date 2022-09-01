// const square = function(x) {
//     return x * x;
// }
// console.log(square(5));

// const square = (x) => {
//     return x * x;
// }
// console.log(square(5));


const event = {
    eventName: 'Birthday Party',
    guestList: ['SIbin', 'Sunil', 'Varghese'],
    printAll() {
        console.log('Event is' + this.eventName);
        this.guestList.forEach((guest) => {
            console.log(guest + " have attended " + this.eventName);
        })
    }
}
console.log(event.eventName);
console.log(event.printAll());