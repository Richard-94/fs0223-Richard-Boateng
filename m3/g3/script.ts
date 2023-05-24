abstract class totalIncome{
    protected income:number=0;
    protected categoryPercentage:number=0;
    protected yearExpenses:number=0;
    protected percentageOnoutcomes:number=0;
    protected iva:number = 0;

    constructor(income:number, categoryPercentage:number, yearExpenses:number, percentageOutcome:number, iva:number){
        this.income=income;
        this.categoryPercentage=categoryPercentage;
        this.yearExpenses=yearExpenses;
        this.percentageOnoutcomes=percentageOutcome;
        this.iva=iva;
    }

    calculateTax(tax:number, myCategoryPercentage:number):number{
        return this.income*(this.categoryPercentage/100)
        
    }
    

    calculateYearContributions(tax:number, expenses:number):number{
        return this.income*(this.yearExpenses/100);
    }

    calculateIva(amountDefinedByGovernment:number, actualIva:number):number{
        return this.percentageOnoutcomes*((this.iva/100))
    }

   abstract calculateDifferentCategories(income:number,categoryPercentage:number, yearExpenses:number, percentageOnoutcomes:number, iva:number):number
//    abstract secondCategory(income:number,categoryPercentage:number, yearExpenses:number, percentageOnoutcomes:number, iva:number):number

}


class Category extends totalIncome {

    calculateDifferentCategories(): number {
        if(this.income===0){
            return 0
        }
        else if(this.income < this.yearExpenses){
            throw new Error("cannot calculate");
            
        }
        const taxAmount = this.calculateTax(this.income, this.categoryPercentage);
        const yearContributions = this.calculateYearContributions(this.income, this.yearExpenses);
        const ivaAmount = this.calculateIva(this.percentageOnoutcomes, this.iva);
        
        return taxAmount + yearContributions + ivaAmount;
    }
    
    
}

let Lawyer = new Category (50000,38,40,20,22);
let chef = new Category (30000,80,20,5,22);


console.log(Lawyer.calculateDifferentCategories());
console.log(chef.calculateDifferentCategories());


