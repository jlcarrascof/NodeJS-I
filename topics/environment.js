let myname = process.env.MYNAME || 'noname';
let web = process.env.WEB || 'I don\'t know';
console.log('Hello, ' + myname);
console.log('My website is ' + web);
