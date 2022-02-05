//the plus and minus buttons responds to click event
//access buttons
let rockQty= 1

let addBtn=document.querySelector('#quantity-up')
let minusBtn=document.querySelector('#quantity-down')
// add a click event to each button
addBtn.addEventListener('click', function(e) {
    rockQty++
    console.log(rockQty)
})

minusBtn.addEventListener('click',function(e) {
    rockQty--
    console.log(rockQty)
})


// the plus button adds 1 to the product quantity





//the minus button subtracts 1 to the product quantity

//the quantity updates when the plus or minus buttons are cliked

//the quantity cannot drop below 0
