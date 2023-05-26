var user = [];
;
var User = /** @class */ (function () {
    function User(recharge, duration) {
        this.recharge = 0;
        this.numberOfCalls = 0;
        this.minuteCost = 0.20;
        this.saveCredit = [];
        this.callsHistory = [];
        this.recharge = recharge;
        this.duration = duration;
        var increasedRecharge = this.increaseRecharge(0);
        console.log("your total recharge is £", increasedRecharge);
        this.totalCalls(duration);
        this.totalCalls(duration);
        this.infoCredit404();
        //this.resetCalls()
    }
    User.prototype.increaseRecharge = function (rechargeValue) {
        this.recharge += rechargeValue;
        return this.recharge;
    };
    User.prototype.totalCalls = function (duration) {
        var cost;
        this.duration = duration;
        var durationInMinutes = duration;
        if (this.recharge <= 0) {
            console.log("You cannot make a call. Insufficient credit.");
            return;
        }
        else {
            var cost_1 = (this.minuteCost / 60) * (durationInMinutes * 60);
            if (cost_1 > this.recharge) {
                console.log("You cannot make a call. Insufficient credit.");
                return;
            }
            var entry = {
                id: this.callsHistory.length + 1,
                duration: durationInMinutes,
                cost: cost_1,
                date: new Date
            };
            this.callsHistory.push(entry);
            var call = this.callsHistory[this.callsHistory.length - 1];
            var callDate = call.date.toLocaleDateString();
            var callTime = call.date.toLocaleTimeString();
            console.log("Call ID:", call.id, "| Call Date:", callDate, "| Call Time:", callTime);
            console.log("Total calls: ", this.callsHistory.length);
            console.log("Call duration: ", durationInMinutes, "minutes");
            console.log("Call cost: £", cost_1);
            this.recharge -= cost_1;
        }
    };
    User.prototype.infoCredit404 = function () {
        var totalCost = this.callsHistory.reduce(function (total, entry) { return total + entry.cost; }, 0);
        var remainingCredit = this.recharge - totalCost;
        this.saveCredit.push(remainingCredit);
        console.log("Remaining credit: £", remainingCredit);
        return remainingCredit;
    };
    User.prototype.resetCalls = function () {
        var reset = this.callsHistory;
        reset.splice(0);
        console.log(reset);
    };
    return User;
}());
var user1 = new User(300, 10);
user.push(user1);
var user2 = new User(100, 50);
user.push(user2);
var user3 = new User(1000, 3000);
user.push(user3);
console.log(user);
