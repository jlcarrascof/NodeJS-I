let i = 0;
let interval = setInterval(function () {
    console.log('Hello');
    if (i === 3) {
        clearInterval(interval);
    }
    i++;
}, 1000);

console.log(process);
console.log(__dirname);
console.log(__filename);

// Not use if not strictly necessary ....

global.myVar = 'The Value';
console.log(myVar);