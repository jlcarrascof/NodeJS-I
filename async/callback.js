function hello(name, myCallback) {
    setTimeout(function() {
        console.log("Hi, " + name)
        myCallback()
    }, 1000)
}

console.log('Init process')
hello('Javier', function() {
    console.log('Finishing process')
})
