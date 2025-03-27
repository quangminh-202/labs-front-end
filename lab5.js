"use strict";
// Phần 1: Synchronous/Asynchronous
const data = [];
const record = (param) => {
    data.push(param);
    console.log('Record: ' + param + ' added!');
    setTimeout(() => {
        data.pop();
        console.log('Record: ' + param + ' removed!');
    }, 10000);
};
const startRecording = () => {
    let count = 0;
    const intervalId = setInterval(() => {
        record(12345 + count);
        count++;
        if (count === 6) {
            clearInterval(intervalId);
            console.log('Stopped recording after 1 minute.');
        }
    }, 10000);
};
startRecording();
// Phần 2: Closure
const createGreeter = (greeting) => {
    return (name) => {
        console.log(`${greeting}, ${name}!`);
    };
};
const sayHello = createGreeter("Xin chào");
const sayGoodbye = createGreeter("Tạm biệt");
sayHello("Quang Minh");
sayGoodbye("Quang Minh");
