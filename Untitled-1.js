let myPromise = new Promise(function(resolve, reject) {
  let fakeCode = 200 // pretend server status code 
  if (fakeCode === 200) {
    resolve("I'm beautiful working code.");
    console.log('ok');
  }
  else {
    reject(Error("Uh oh."));
  }
});