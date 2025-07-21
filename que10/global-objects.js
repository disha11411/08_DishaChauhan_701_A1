// __filename and __dirname
console.log('Current file name:', __filename);
console.log('Current directory:', __dirname);

// process object
console.log('Node.js version:', process.version);
console.log('Platform:', process.platform);
console.log('Current working directory:', process.cwd());

// global object (similar to window in browsers)
global.myGlobalVariable = 'Hello from global!';
console.log(global.myGlobalVariable);

// setTimeout and setInterval (global timer functions)
setTimeout(() => {
  console.log('This message is shown after 2 seconds.');
}, 2000);

let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Interval count: ${count}`);
  if (count === 3) {
    clearInterval(intervalId);
    console.log('Interval cleared.');
  }
}, 1000);
