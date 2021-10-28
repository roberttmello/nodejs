// started operating system process

console.log("first");

setTimeout(() => {
  console.log("second");
}, 0);

console.log("third");

// completed and exited operating system process

// OUTPUT
// 1 - first
// 2 - third
// 3 - second
