class Account {
    protected initialBalance:number = 0;
    protected amountDeposited:number = 0;
    protected amountWithdrawn:number = 0;
    
    constructor(balance:number, deposite:number, withdraw:number){
        this.initialBalance= balance;
        this.amountDeposited = deposite;
        this.amountWithdrawn = withdraw;
    }

    calcolateBalance():number|string{
        
            const balanceAfterDeposit = this.initialBalance + this.amountDeposited;
            const balanceAfterWithdrawal = balanceAfterDeposit - this.amountWithdrawn;
        
            if (balanceAfterWithdrawal <= 0) {
              return `You have ${balanceAfterWithdrawal}. You cannot withdraw.`;
            } else {
              return balanceAfterWithdrawal;
            }
          }
}

class MotherAccount extends Account{
    protected calculateInterest:number = 10;
    protected periodOfDeposite:number = 5;

    constructor(balance:number, deposite:number, withdraw:number, calculateInterest:number, periodOfDeposite:number){
        super(balance , deposite, withdraw);
        this.calculateInterest= calculateInterest;
        this.periodOfDeposite = periodOfDeposite;

    }

    monthlyInterest():number|string {
        let interestRate:number = this.calculateInterest/100;
        let timePeriod:number = this.periodOfDeposite;
        if(this.initialBalance <= 0) {
            return `interest cannot be calculated`
        }
        else{
            return this.initialBalance *(1+(interestRate/12))**timePeriod
        }
        
        
    }
}

let acc = new MotherAccount(50, 10, 100, 20, 5);
console.log(acc.calcolateBalance())
console.log(acc.monthlyInterest());