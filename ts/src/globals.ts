let i = 0;

const interval: NodeJS.Timeout = setInterval(() => {
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

(global as any).myVar = 'The Value';
console.log((global as any).myVar);
