function imAsync(myCallback) {
    setTimeout(function() {
        console.log("I'm async")
        myCallback()
    }, 1000)
}

console.log('Init process')
imAsync(function() {
    console.log('Finishing process')
})
