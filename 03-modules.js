// MODULES

// CommonJS   - Every file is module (by default)
// Modules    - Encapsulated code (only share minimum)

const {robert, laura} = require("./folder/names");
const sayHi = require("./folder/utils");
const data = require("./04-alternative-flavor");

require("./05-mind-grenade");

// sayHi("Ednéia");
// sayHi(robert);
// sayHi(laura);

// console.log(data);