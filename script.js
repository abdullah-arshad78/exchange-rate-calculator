//https://v6.exchangerate-api.com/v6/e103ffe7f5adc09416e32f0b/latest/USD
const currencyEl_one = document.getElementById("currency-one"); // select 1 is selected
const currencyEl_two = document.getElementById("currency-two");// select two is selected
const amountEl_one = document.getElementById("amount-one"); // input 1 is selected
const amountEl_two = document.getElementById("amount-two"); // input 2 is selected
const rateEl = document.getElementById("rate");// div of text is selected

//Fetch exchange rates and update the DOM
function calculate(){
  //Steps 1. get the value from select 2. find that value from fetch req 3. get the value from select 2 and find that value within json obj 4. get the amount from amount one and multiply that amount with exchange value of select2
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  fetch(`https://v6.exchangerate-api.com/v6/e103ffe7f5adc09416e32f0b/latest/${currency_one}`).then(res=>res.json())
  .then(data=>{
    const rate = data.conversion_rates[currency_two]
    rateEl.innerText=`1 ${currency_one} = ${rate.toFixed(2)} ${currency_two}`
    amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
  })

}


//EventListeners
currencyEl_one.addEventListener("change",calculate);
amountEl_one.addEventListener("input",calculate);
currencyEl_two.addEventListener("change",calculate);
amountEl_two.addEventListener("input",calculate);

swap.addEventListener("click",()=>{
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp
  calculate()
})


calculate()