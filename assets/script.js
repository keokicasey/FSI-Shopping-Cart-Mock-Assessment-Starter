let add = document.querySelector('#quantity-up')
let remove = document.querySelector('#quantity-down')
let totalQuantity = document.querySelector('.total-quantity')

let quantity = 1

add.addEventListener('click', function(){
    quantity = quantity + 1
    totalQuantity.textContent = 'Quantity: ' + quantity
})

remove.addEventListener('click', function(){
    if (quantity <= 0){
        quantity = 0
    } else {
        quantity = quantity - 1
    }
    totalQuantity.textContent = 'Quantity: ' + quantity
})