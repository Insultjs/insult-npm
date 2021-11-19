let config = require("../package.json");
let data = require("../json/data.json");

const insults = require("../private/insults");
import (insults)

let on = `[insultsjs] -- ON`;
let v = `[insultsjs] -- V ` + config.version;
let a = `[insultsjs] -- Marc Medrano`;

console.log(`${on} \n ${v} \n ${a}`);

module.exports = [insults];
