function hello(name) {

    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            console.log("Hi, " + name)
            resolve(name)
        }, 1500)
    })
}

function talk(callbackTalk) {
    setTimeout(function() {
        console.log("Bla bla bla...")
        callbackTalk()
    }
    , 1000)
}

function goodbye(name, secondCallback) {
    setTimeout(function() {
        console.log("Goodbye, " + name)
        secondCallback()
    }, 1000)
}

console.log('Beginning the process ....');
hello('Carlos')
    .then((name) => {
        console.log('Ending the process ....');
    })