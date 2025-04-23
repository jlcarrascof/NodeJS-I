function hello(name, myCallback) {
    setTimeout(function() {
        console.log("Hi, " + name)
        myCallback(name)
    }, 1500)
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

function conversation(name, times, callback) {
    if (times > 0) {
        talk(function() {
            conversation(name, --times, callback)
        })
    } else {
        callback(name)
    }
}

// --

console.log('Init process')
/* hello('Javier', function(name) {
    goodbye(name, function() {
        console.log('Finishing')
    })
}) */

/* hello('Javier', function(name) {
    talk(function() {
        talk(function() {
            talk(function() {
                goodbye(name, function() {
                    console.log('Finishing process')
                })
            })
        })
    })
}) */
