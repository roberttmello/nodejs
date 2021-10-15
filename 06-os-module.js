const os = require("os");

// info about current user
const user = os.userInfo();
// console.log(user);

// info about system uptime in seconds
const uptime = os.uptime();
// console.log(uptime);

// info about os system
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);