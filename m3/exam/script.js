var saveCredit = [];
var callsNumber = [];
var callsHistory = [];
var User = /** @class */ (function () {
    function User(recharge) {
        this.recharge = 0;
        this.numberOfCalls = 0;
        this.minuteCost = 0.20;
        this.recharge = recharge;
        saveCredit.push(this.recharge);
        var increasedRecharge = this.increaseRecharge(0);
        console.log("your total recharge is £", increasedRecharge);
        this.totalCalls(100);
    }
    User.prototype.increaseRecharge = function (rechargeValue) {
        this.recharge += rechargeValue;
        saveCredit.push(this.recharge);
        return this.recharge;
    };
    //  callDuration(): number {
    //      throw new Error("Method not implemented.");
    //  }
    // infoCredit404(): number {
    //     throw new Error("Method not implemented.");
    // }
    User.prototype.totalCalls = function (duration) {
        var _this = this;
        var currentDuration = duration;
        setInterval(function () {
            duration++;
            var cost = _this.minuteCost * duration;
            callsHistory.push({ duration: duration, cost: cost });
            console.log("Total calls: ", callsHistory.length);
            console.log("Call duration: ", duration);
            console.log("Call cost: £", cost);
        }, 60000);
    };
    return User;
}());
var user = new User(1000);
