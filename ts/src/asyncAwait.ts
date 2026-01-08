/* eslint-disable */
function hello(name: string): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      console.log("Hi, " + name);
      resolve(name);
    }, 1500);
  });
}

function talk(name: string): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      console.log("Bla bla bla...");
      resolve(name);
      // reject('There is an error');
    }, 1000);
  });
}

function goodbye(name: string): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log("Goodbye, " + name);
      resolve();
    }, 1000);
  });
}

async function main(): Promise<void> {
  const name: string = await hello("Carlos");
  await talk(name);
  await talk(name);
  await talk(name);
  await goodbye(name);
  console.log("Finishing the process ...");
}

console.log("Starting the process ....");
void main();
console.log("It's gonna be the second message");
