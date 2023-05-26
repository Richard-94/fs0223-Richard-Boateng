

 interface CallEntry {
    duration: number
    cost: number,
    id: number
  };


interface ISmartphone{
    recharge:number;
    minuteCost:number
    increaseRecharge(rechargeValue:number):number;
    infoCredit404():number;
     totalCalls(duration: number): void;
    resetCalls():void;
    
}

class User implements ISmartphone{
    recharge: number=0;
    numberOfCalls: number=0;
    minuteCost:number=0.20
    duration: number;
    saveCredit:number[]=[]

    callsHistory: CallEntry[] = [];
   


    constructor(recharge:number,duration:number){
    this.recharge=recharge;
    this.duration = duration
    const increasedRecharge = this.increaseRecharge(0)
    console.log("your total recharge is £",increasedRecharge);


    this.totalCalls(duration)
    this.totalCalls(duration)
    
    this.infoCredit404();
    //this.resetCalls()
         
    }


    increaseRecharge(rechargeValue:number): number {
        
    this.recharge += rechargeValue;
    
    return this.recharge;
 
    }


   
   totalCalls(duration: number):void{
    let cost:number;
    this.duration=duration
    const durationInMinutes = duration; 
    if(this.recharge<=0){
        console.log("You cannot make a call. Insufficient credit.");
      return;
    }else{
       
        const cost = (this.minuteCost/60) * (durationInMinutes*60); 
        if (cost > this.recharge) {
            console.log("You cannot make a call. Insufficient credit.");
            return;
        }

        const entry: CallEntry = {
            id: this.callsHistory.length + 1,
            duration: durationInMinutes,
            cost: cost,
            
          };

        this.callsHistory.push(entry); 
        console.log(this.callsHistory);
        
        console.log("Total calls: ", this.callsHistory.length);
        console.log("Call duration: ", durationInMinutes, "minutes");
        console.log("Call cost: £", cost);  
    this.recharge -= cost;
    }
    
}

      infoCredit404(): number {
        const totalCost = this.callsHistory.reduce((total, entry) => total + entry.cost, 0);
    const remainingCredit = this.recharge - totalCost;
    this.saveCredit.push(remainingCredit);
    console.log("Remaining credit: £", remainingCredit);
    return remainingCredit;
     }

 resetCalls(): void {
   let reset =  this.callsHistory;
    reset.splice(0)
    console.log(reset);
    
 }
    
}

const user1 = new User(300,10);
const user2 = new User(100,50);
const user3 = new User(1000,3000);





