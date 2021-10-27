const { readFile, writeFile } = require("fs");

readFile("./folder/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = result;

  readFile("./folder/second.txt", "utf8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }

    const second = result;

    writeFile("./folder/fourth.txt", `${first} ${second}`, (error, result) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(result);
    });
  });
});
