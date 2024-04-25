let income=[];
let expense=[];
let display=[];
let totallIncome=0;
let totallExpense=0;




const input = document.querySelector("#input");
const btn = document.querySelector("#btn1");
const displayIn_ex=document.querySelector("#in_ex");
const displayIncome=document.querySelector("#displayIncome");
const displayExpense=document.querySelector("#displayExpense");
function showDisplay(){
   displayIn_ex.innerHTML="";
    for(let i=0;i<display.length;i++){
        const displayValue = display[i];
        const absValue=Math.abs(display[i]);
        const h2 = document.createElement("h1");
        if(display[i]>0){
            h2.textContent=displayValue+"  income";
            displayIn_ex.append(h2);
        }
        else if(display[i]<0){
            h2.textContent=absValue+"  expense";
            displayIn_ex.append(h2);
        }
        
    }
    
}





btn.addEventListener("click",()=>{
   // if(!input) throw "you didn't insert any Value";
   display.push(input.value);
   showDisplay();
   const val=parseInt(input.value);
    input.value="";
    if(val>0){
        totallIncome+=val;
    }else{
        totallExpense+=Math.abs(val);
    }

    displayIncome.textContent ="Income: "+ totallIncome;
    displayExpense.textContent = "Expense: "+totallExpense;
    
});


