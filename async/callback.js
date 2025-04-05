function hello(name, myCallback) {
    setTimeout(function() {
        console.log("Hi, " + name)
        myCallback()
    }, 1500)
}

function goodbye(name, secondCallback) {
    setTimeout(function() {
        console.log("Goodbye, " + name)
        secondCallback()
    }, 1000)
}


console.log('Init process')
/* hello('Javier', function() {
    goodbye('Javier', function() {
        console.log('Finishing process')
    })
})
 */

hello('Javier', function() {})
goodbye('Javier', function() {})
