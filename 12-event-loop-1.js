const { readFile } = require("fs");

console.log("started a first task");
// CHECK FILE PATH!!!
readFile("./folder/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting next task");


// OUTPUT
// 1 -> started a first task
// 2 -> starting next task
// 3 -> Hello this is the first file!
// 4 -> completed first task