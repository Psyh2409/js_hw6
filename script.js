// classes
class Robot {
    constructor() {
        this.work = () => {
            console.log("I'm Robot - I just work.")
        }
        this.run = () => {this.work()}// for inheriting demonstration
    }
}
let rbt = new Robot();
class CoffeeRobot extends Robot {
    constructor() {
        super();
        this.work = () => {console.log("I'm CoffeeRobot - I boil coffee.")};
    }
}
let cff = new CoffeeRobot();
class RobotDancer extends Robot {
    constructor() {
        super();
        this.work = () => {console.log("I'm RobotDancer - I just dance.")};
    }
}
let dncr = new RobotDancer();
class RobotCooker extends Robot {
    work = () => {console.log("I'm RobotCooker - I just cook.")}
}
let ckr = new RobotCooker();
let robots = [rbt, cff, dncr, ckr]
// functions
let droids = [];
function Droid(txt) {
    this.txt = txt;
    this.work = () => {console.log(this.txt)}
}
droids.push(new Droid("I'm Droid - I just work."));
function CoffeeDroid(x) {
    Droid.call(this);
    this.txt = x;
}
droids.push(new CoffeeDroid("I'm CoffeeDroid - I boil coffee."));
function DroidDancer() {
    Droid.call(this);
    this.txt = "I'm DroidDancer - I just dance.";
}
droids.push(new DroidDancer());
function DroidCooker() {
    Droid.call(this);
    this.txt = "I'm DroidCooker - I just cook.";
}
droids.push(new DroidCooker());
// objects
let bots = [];
let bot = {
    txt: "I'm Bot - I just work.",
    work: (x)=>{console.log(x)}
}
let cfb = {
    txt: "I'm CoffeeBot - I boil coffee."
}
cfb.__proto__ = bot;
let dnb = {
    txt: "I'm BotDancer - I just dance."
}
dnb.__proto__ = bot;
let ckb = {
    txt: "I'm BotCooker - I just cook."
}
ckb.__proto__ = bot;
bots = [bot, cfb, dnb, ckb];