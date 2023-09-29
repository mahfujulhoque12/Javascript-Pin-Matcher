
function getPin(){
    const pin= generatePin();
    const pinString=pin + "";
    if(pinString.length === 4){
        return pin;
    }else{
        return getPin();
    }
}


function generatePin(){
    const random=Math.round(Math.random()*10000);
    return random;
}


document.getElementById("generate-pin").addEventListener('click',function(){
   const pin=getPin();
    //display pin

    const displayPin=document.getElementById("show-pin");
    displayPin.value=pin;
})

document.getElementById('calculator').addEventListener('click',function(even){
    const number=even.target.innerText;
    const typeNumbersFeild=document.getElementById('type-numbers');
    const prevTypeNumber=typeNumbersFeild.value;;
    if(isNaN(number)){
    if(number==='C'){
        typeNumbersFeild.value='';
    }
    else if(number === '<'){
        const digits=prevTypeNumber.split('');
        digits.pop();
        const remainingDigits=digits.join('');
        typeNumbersFeild.value=remainingDigits;
    }
    }
    else{
        const newTypeNumber=prevTypeNumber + number;
        typeNumbersFeild.value=newTypeNumber;
    }
   
})

document.getElementById('veryfy-pin').addEventListener('click',function(){
   const displayPinFeild=document.getElementById("show-pin");
   const currenPin=displayPinFeild.value;
   const typeNumberFeild=document.getElementById("type-numbers");
   const typeNumber=typeNumberFeild.value;

   const pinSuccessMsg=document.getElementById("pin-success")
   const pinFailMsg=document.getElementById("pin-fail");
   if(typeNumber===currenPin){
    pinFailMsg.style.display="none"
    pinSuccessMsg.style.display='block'
   }
   else{

    pinFailMsg.style.display="block"
    pinSuccessMsg.style.display='none'
   }
})