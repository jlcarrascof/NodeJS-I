function hello(name: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      console.log("Hi, " + name);
      resolve(name);
    }, 1500);
  });
}

function talk(name: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla bla bla...");
      // resolve(name);
      reject("There is an error");
    }, 1000);
  });
}

function goodbye(name: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log("Goodbye, " + name);
      resolve();
    }, 1000);
  });
}

console.log("Beginning the process ....");

hello("Carlos")
  .then(talk)
  .then(goodbye)
  .then(() => {
    console.log("Ending the process ....");
  })
  .catch((error: unknown) => {
    console.error("There is an error");
    console.log("Error: ", error);
  });
