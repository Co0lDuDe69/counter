const counterValue=document.querySelector('#counter');

const increment =() => {
    //get the value from UI
    let value=parseInt(counterValue.innerText);
    //update the value
    value = value+1;
    // posting the updated value in the UI
    counterValue.innerText=value;
}

const decrement =() => {
    //get the value from UI
    let value=parseInt(counterValue.innerText);
    //update the value
    value = value-1;
    // posting the updated value in the UI
    counterValue.innerText=value;
}