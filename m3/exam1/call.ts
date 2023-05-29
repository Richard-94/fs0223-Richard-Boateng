let user:User[]=[]

 interface CallEntry {
    duration: number
    cost: number,
    id: number,
    date:Date
    
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
          id: this.callsHistory.length,
          duration: durationInMinutes,
          cost: cost,
          date: new Date
        };

        this.callsHistory.push(entry); 
        const call = this.callsHistory[this.callsHistory.length-1];
        const callDate = call.date.toLocaleDateString();
        const callTime = call.date.toLocaleTimeString()
        console.log("Call ID:", call.id, "| Call Date:", callDate, "| Call Time:", callTime);
  
        
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
user.push(user1)
const user2 = new User(100,50);
user.push(user2)
const user3 = new User(1000,3000);
user.push(user3)
console.log(user);


let time = document.getElementById("time");
let myDate = new Date();
const options: Intl.DateTimeFormatOptions = 
{ hour: 'numeric', 
minute: 'numeric'
};
const callTime = myDate.toLocaleTimeString([], options);
(time as HTMLElement ).textContent= callTime;






function respond(event: MouseEvent){
    const button = event.target as HTMLButtonElement;
    const text = document.getElementById("floatingTextarea") as HTMLTextAreaElement;
    if(text !== null){
        text.value += button.textContent;
    }
   
}

const numbers = document.querySelectorAll(".my-numbers");
numbers.forEach((number)=>{
   number.addEventListener("click", respond as EventListener) 
})