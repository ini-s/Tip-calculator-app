let resetBtn = document.querySelector('.reset-button');
let price = document.querySelectorAll('.price');
let tip15 = document.querySelector('.tip-15');
let billInput = document.querySelector('.bill-input');
let inputNumber = document.querySelector('.input-number');
let tip = document.querySelectorAll('.tipp');
let tipSpan = document.querySelectorAll('.tip-span');
let tipAmountPrice = document.querySelector('#tip-amount-price');
let totalAmountPrice = document.querySelector('#total-amount-price');
let noOfPeople = document.querySelector('.input-number').value;
let bill = document.querySelector('.bill-input').value;
let warning = document.querySelector('.cant');
let custom = document.querySelector('.custom-tip');
var tipVal;
// To reset 
for (let i=0; i<price.length; i++){
    resetBtn.addEventListener('click', ()=> {
        console.log(tipAmountPrice.innerHTML)
        tipAmountPrice.innerHTML = '0.00';
        totalAmountPrice.innerHTML = '0.00';
        tip15.classList.add('tip-15-reset');
        billInput.placeholder = 0;
        inputNumber.placeholder = 0;
        billInput.value = '';
        inputNumber.value = '';
        custom.value = '';
        billInput.classList.add('active');
        inputNumber.classList.add('active');
    })
}
// To calculate Tip 
function calculateTip(){
    noOfPeople = document.querySelector('.input-number').value;
    bill = document.querySelector('.bill-input').value;
    console.log(noOfPeople);
    if(noOfPeople >0){
        billPerPerson = bill / noOfPeople;
        console.log(billPerPerson);
        tipAmount = tipVal/100 * billPerPerson;
        console.log(tipAmount);
        totalAmount = billPerPerson + parseInt(tipAmount) ;
        console.log(totalAmount);
        isNaN(tipAmount)? tipAmount=0: tipAmount;
        isNaN(totalAmount)? totalAmount=0: totalAmount;
        tipAmountPrice.innerHTML = tipAmount.toFixed(2);
        console.log(tipAmountPrice.innerHTML);
        totalAmountPrice.innerHTML = totalAmount.toFixed(2);
    }
}
// For custom tip 
custom.addEventListener('change', (e)=>{
        tipVal = e.target.value;
        console.log(tipVal);
})
// For other tips 
for (let i=0; i<tip.length; i++){
    tip[i].addEventListener('click', ()=>{
        tipVal = tipSpan[i].innerHTML;
        console.log(tipVal);
    })
}
// Warning message to number of people input field 
inputNumber.addEventListener('keydown', (e)=>{
    console.log(e);
    if (e.key == 0){
        warning.innerHTML = "Can't be zero"
    }
    else{
        calculateTip()
    }
})
