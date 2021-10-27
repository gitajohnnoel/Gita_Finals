if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready()
}
function ready () {
    var removeCartItem = document.getElementsByClassName('btn-danger')
        console.log(removeCartItem)
        for (var i = 0; i < removeCartItem.length; i++) {
            var button = removeCartItem[i]
            button.addEventListener('click', removeCartContent)
    }    
    var qtyInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i =  0; i < qtyInputs.length; i++) {   
        var input = qtyInputs[i]
        input.addEventListener('change', qtyChange)
    }

    var addContent = document.getElementsByClassName('add-cart')
    for (var i = 0; i < addContent.length; i++) {
        var button = addContent[i]
        button.addEventListener('click', addContentClicked)
    }
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchased)

}

function purchased() {
    alert("You have purchased the following, Press okay to proceed")
    var cartItems = document.getElementsByClassName('cart-item')[0]

    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function addContentClicked (event) {
    var button = event.target
    var storeItem = button.parentElement.parentElement
    var title = storeItem.getElementsByClassName('prod-title')[0].innerText
    var price = storeItem.getElementsByClassName('prod-price')[0].innerText
    var image = storeItem.getElementsByClassName("prod-img")[0].src    
    console.log(title, price, image)
    addItem(title, price, image)
    updateCart();
}
function addItem(title, price, image) {
   var cartRow = document.getElementsByClassName('div')
   cartRow.classList.add('cart-row')
   cartRow.innerText = title
   var cartItems = document.getElementsByClassName('cart-items')[0]
   var cartItemTitles = cartItems.getElementsByClassName('cart-item-title')
   for (var i = 0; i < cartItemTitles.length; i++) {
       if (cartItemTitles[i].innerText == title) {
           alert("It is already in your cart")
            return
        }

   }
   cartRowContents = 
        `<div class="cart-item cart-column">
        <img class="cart-item-image" src="${image}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
                </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow)
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem)
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

}


function updateCart() {
    var cartContainer = document.getElementsByClassName('cart-items')[0]
    var rowsCart = cartContainer.getElementsByClassName('cart-row')
    var total = 0
    for (let i = 0; i < rowsCart.length; i++) {
        var rowCart = rowsCart[i]
        var cartPrice = rowCart.getElementsByClassName('cart-price')[0]
        var cartQuantity = rowCart.getElementsByClassName('cart-quantity-input')[0]

        var price = parseFloat(cartPrice.innerText.replace('₱', ''))
        var qty = cartQuantity.value
        total = total + (price * qty)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '₱'  + total
}

function removeCartContent(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCart()
}

function qtyChange(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
        }
        updateCart()
    }

