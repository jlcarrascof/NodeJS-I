async function hello(name) {

    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            console.log("Hi, " + name)
            resolve(name)
        }, 1500)
    })
}

async function talk(name) {

    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Bla bla bla...")
            resolve(name)
            // reject('There is an error')
        }
        , 1000)
    })

}

async function goodbye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Goodbye, " + name)
            resolve()
        }, 1000)
    })
}

async function main() {
    let name = await hello('Carlos');
    await talk();
    await talk();
    await talk();
    await goodbye(name);
    console.log('Finishing the process ...');
}

console.log('Starting the process ....');
main();
console.log(`It's gonna be the second message`);

