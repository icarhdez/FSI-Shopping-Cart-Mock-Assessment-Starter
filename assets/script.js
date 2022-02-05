//the plus and minus buttons responds to click event
//access buttons
let rockQty= 1

let addBtn=document.querySelector('#quantity-up')
let minusBtn=document.querySelector('#quantity-down')
let qtyDisplay= document.querySelector('.total-quantity')
// add a click event to each button
//the quantity updates when the plus or minus buttons are cliked

addBtn.addEventListener('click', function(e) {
    rockQty++
    // the plus button adds 1 to the product quantity
    qtyDisplay.textContent = `Quantity: ${rockQty}`
})

minusBtn.addEventListener('click',function(e) {
    //the quantity cannot drop below 0
    if(rockQty=1){
    rockQty--
    //the minus button subtracts 1 to the product quantity
    qtyDisplay.textContent = `Quantity: ${rockQty}`
    }
})
