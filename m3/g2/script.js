var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(balance, deposite, withdraw) {
        this.initialBalance = 0;
        this.amountDeposited = 0;
        this.amountWithdrawn = 0;
        this.initialBalance = balance;
        this.amountDeposited = deposite;
        this.amountWithdrawn = withdraw;
    }
    Account.prototype.calcolateBalance = function () {
        var balanceAfterDeposit = this.initialBalance + this.amountDeposited;
        var balanceAfterWithdrawal = balanceAfterDeposit - this.amountWithdrawn;
        if (balanceAfterWithdrawal <= 0) {
            return "You have ".concat(balanceAfterWithdrawal, ". You cannot withdraw.");
        }
        else {
            return balanceAfterWithdrawal;
        }
    };
    return Account;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balance, deposite, withdraw, calculateInterest, periodOfDeposite) {
        var _this = _super.call(this, balance, deposite, withdraw) || this;
        _this.calculateInterest = 10;
        _this.periodOfDeposite = 5;
        _this.calculateInterest = calculateInterest;
        _this.periodOfDeposite = periodOfDeposite;
        return _this;
    }
    MotherAccount.prototype.monthlyInterest = function () {
        var interestRate = this.calculateInterest / 100;
        var timePeriod = this.periodOfDeposite;
        if (this.initialBalance <= 0) {
            return "interest cannot be calculated";
        }
        else {
            return this.initialBalance * Math.pow((1 + (interestRate / 12)), timePeriod);
        }
    };
    return MotherAccount;
}(Account));
var acc = new MotherAccount(500, 100, 50, 20, 5);
console.log(acc.calcolateBalance());
console.log(acc.monthlyInterest());
