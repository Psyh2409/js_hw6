class Robot {
    constructor() {
        this.work = () => {
            console.log("I'm Robot - I just work.")
        }
        this.run = () => {this.work()}
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
let arr = [rbt, cff, dncr, ckr]

