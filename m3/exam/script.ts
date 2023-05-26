const saveCredit:number[]=[]
const callsNumber:number[]=[]
const callsHistory: CallEntry[] = [];

interface CallEntry {
    duration: number;
    cost: number;
  }
  

interface ISmartphone{
    recharge:number;
    
    minuteCost:number
    
    increaseRecharge(rechargeValue:number):number;
    // callDuration():number;
    // infoCredit404():number;
     totalCalls(duration: number, stopAfter: number): void;
    // resetCalls():number;
    // knowSales():number;
}

class User implements ISmartphone{
    recharge: number=0;
    numberOfCalls: number=0;
    minuteCost:number=0.20
   


    constructor(recharge:number){
        this.recharge=recharge;
        saveCredit.push(this.recharge);
        

        const increasedRecharge = this.increaseRecharge(0)
        console.log("your total recharge is £",increasedRecharge);

    this.totalCalls(100)
         
    }


    increaseRecharge(rechargeValue:number): number {
        
    this.recharge += rechargeValue;
    saveCredit.push(this.recharge);
    return this.recharge;
 
    }

    
    
    //  callDuration(): number {
    //      throw new Error("Method not implemented.");
    //  }


    // infoCredit404(): number {
    //     throw new Error("Method not implemented.");
    // }
    totalCalls(duration: number):void{
      const durationInMinutes = duration; // Duration is already in minutes
  const cost = this.minuteCost * (durationInMinutes / 60); // Calculate cost based on minutes
  callsHistory.push({ duration: durationInMinutes, cost }); // Store duration in minutes
  console.log("Total calls: ", callsHistory.length);
  console.log("Call duration: ", durationInMinutes, "minutes");
  console.log("Call cost: £", cost);
        
      }
    // resetCalls(): number {
    //     throw new Error("Method not implemented.");
    // }
    // knowSales(): number {
    //     throw new Error("Method not implemented.");
    // }
    
}


const user = new User(1000);




