const leo = require("./information.js");
const cowsay = require("cowsay");
console.log(cowsay.say({
    text: `Hello, I am ${leo.name} from ${leo.campus}. Nice to meet you !`,
    e: "^^",
    T: "",
}));
