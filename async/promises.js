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

function goodbye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Goodbye, " + name)
            resolve()
        }, 1000)
    })
}

console.log('Beginning the process ....');
hello('Carlos')
    .then(goodbye)
    .then((name) => {
        console.log('Ending the process ....');
    })