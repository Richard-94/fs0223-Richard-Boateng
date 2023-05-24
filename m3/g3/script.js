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
var totalIncome = /** @class */ (function () {
    function totalIncome(income, categoryPercentage, yearExpenses, percentageOutcome, iva) {
        this.income = 0;
        this.categoryPercentage = 0;
        this.yearExpenses = 0;
        this.percentageOnoutcomes = 0;
        this.iva = 0;
        this.income = income;
        this.categoryPercentage = categoryPercentage;
        this.yearExpenses = yearExpenses;
        this.percentageOnoutcomes = percentageOutcome;
        this.iva = iva;
    }
    totalIncome.prototype.calculateTax = function (tax, myCategoryPercentage) {
        return this.income * (this.categoryPercentage / 100);
    };
    totalIncome.prototype.calculateYearContributions = function (tax, expenses) {
        return this.income * (this.yearExpenses / 100);
    };
    totalIncome.prototype.calculateIva = function (amountDefinedByGovernment, actualIva) {
        return this.percentageOnoutcomes * ((this.iva / 100));
    };
    return totalIncome;
}());
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Category.prototype.calculateDifferentCategories = function () {
        if (this.income === 0) {
            return 0;
        }
        else if (this.income < this.yearExpenses) {
            throw new Error("cannot calculate");
        }
        var taxAmount = this.calculateTax(this.income, this.categoryPercentage);
        var yearContributions = this.calculateYearContributions(this.income, this.yearExpenses);
        var ivaAmount = this.calculateIva(this.percentageOnoutcomes, this.iva);
        return taxAmount + yearContributions + ivaAmount;
    };
    return Category;
}(totalIncome));
var Lawyer = new Category(50000, 38, 40, 20, 22);
var chef = new Category(30000, 80, 20, 5, 22);
console.log(Lawyer.calculateDifferentCategories());
console.log(chef.calculateDifferentCategories());
