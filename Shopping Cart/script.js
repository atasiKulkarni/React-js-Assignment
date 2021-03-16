const all_products = [

    {
        id: 1,
        title: 'Laptop Hp',
        price: 50000,
        img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        info: 'A laptop or laptop computer is a small, portable personal computer (PC)'
    },

    {
        id: 2,
        title: 'Mobile',
        price: 15000,
        img: 'https://images.unsplash.com/photo-1529653762956-b0a27278529c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
        info: 'It is a portable telephone that can make and receive calls'
    },

    {
        id: 3,
        title: 'Rolex',
        price: 50000,
        img: 'https://images.unsplash.com/photo-1521485950395-bcfb8fc9bd06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        info: 'Rolex watches are crafted from the finest raw materials and assembled with scrupulous'
    },





]






function display_product() {

    var cards = ''

    for (let item of all_products) {

        cards = cards + `
        
        <div class="shop_card">
            
            <div class="card-img-room">
                <img class="card-img" src=" ${item.img}  "alt="">
            </div>
            <h2 class="card-title">   ${item.title}    </h2>
            <p class="card-detail"> ${item.info}  </p>
            <h2 class="card-title">Price - ${item.price}</h2>

            <div class="page-wrapper">
                 <button id="add-to-cart" onclick= "addcart( ${item.id} ) " >
                           Add to Cart
                     <span class="cart-item"></span>
                 </button>
             </div>
           
         </div> 
        
        `

    }
    // End of for loop , injecting all cards into  shop_products section 
    document.getElementById('shop_products').innerHTML = cards
}


display_product()

var cart_items = {}
var total_price = 0

function addcart(item_id) 
{
  
   
  
    if (cart_items[item_id]) 
    {
     
        cart_items[item_id].quantity += 1
        cart_items[item_id].cart_price = cart_items[item_id].price *  cart_items[item_id].quantity
        console.log(cart_items)
        total_price += cart_items[item_id].price
       
        return
    }

   
    for (item of all_products)
     {

        if (item_id == item.id) 
        {
            cart_items[item_id] = item
            cart_items[item_id].quantity =1 
            cart_items[item_id].cart_price = cart_items[item_id].price
            
            total_price += cart_items[item_id].price 
            
            return
        }
    }
    
    
}



function display_cart() {

    var all_cart = ''


    if (Object.keys(cart_items).length > 0) {

        for (k in cart_items) {

            all_cart = all_cart + `
          <div class="column-labels">
            <label class="product-image">Image</label>
            
            <label class="product-details">Product</label>
            <label class="product-price">Price</label>
            <label class="product-quantity">Quantity</label>
            <label class="product-line-price">Total</label>
            <label class="product-removal">Remove</label>
            
            
           
          </div>

          <div class="product">
            <div class="product-image">
               <img src="${cart_items[k].img}" width="600px" height="100px">
            </div>
            <div class="product-details">
                <div class="product-title">${cart_items[k].title}</div>
             <p class="product-description">${cart_items[k].info}</p>
           </div>
            <div class="product-price">${cart_items[k].price}</div>
            <div class="product-quantity">
              <input type="number" value="${cart_items[k].quantity}">
            </div>
            
            <div class="product-line-price">${cart_items[k].cart_price}</div>
            
            <div class="product-removal-cart">
            <button class="remove-product" onclick="removeItem(this)">
            Remove
            </button>
          </div>
          
         
          
        </div>
  
                
            `
}

   
        all_cart += ` 

        <div class="totals">
  <div class="totals-item">
    <label>Subtotal</label>
    <div class="totals-value" id="cart-subtotal">${total_price}</div>
  </div>
  <div class="totals-item">
    <label>Tax</label>
    <div class="totals-value" id="cart-tax">0.00</div>
  </div>
  <div class="totals-item">
    <label>Shipping</label>
    <div class="totals-value" id="cart-shipping">15.0</div>
  </div>
  <div class="totals-item totals-item-total">
    <label>Grand Total</label>
    <div class="totals-value" id="cart-total">${total_price} </div>
  </div>
</div>
        <button class="checkout">Checkout </button> 
        `
        document.getElementById('cart').innerHTML = all_cart


    }

    else {
        document.getElementById('cart').innerHTML = '<center> <h1> No Product Added in Cart </h1> </center> '
    }
} var burger = document.querySelector('.burger')
var navBar = document.querySelector('.navbar')
var navList = document.querySelector('.navlist')


burger.addEventListener('click', () => {

    navBar.classList.toggle('resp_navbar')
    navList.classList.toggle('resp_navlist')

})

// code for showing cart section and hiding product section

function show_cart() {
    document.getElementById('cart').style.display = 'block'
    document.getElementById('shop_products').style.display = 'none'
    display_cart();
}

function show_shop() {
    document.getElementById('cart').style.display = 'none'
    document.getElementById('shop_products').style.display = 'block'
    document.getElementById('shop_products').style.display = 'flex'
}

/* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 15.00; 
var fadeTime = 300;


/* Assign actions */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{

 
  var subtotal = 0;
  var tax = 0;
  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });
  
  /* Calculate totals */
  
  // var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;
  
  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0)
    {
      $('.checkout').fadeOut(fadeTime);
    }
    else
    {
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  
  var quantity = $(quantityInput).val();
 
  var linePrice = price * quantity;
  
  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}


/* Remove item from cart */
function removeItem(removeButton)
{
   
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}

$(function()
{

  "use strict"
  
  var init = "No items yet!";
  var counter = 0;

  // Initial Cart
  $(".counter").html(init);
  
  // Add Items To Basket
  function addToBasket() 
  {
    counter++;
    $(".counter").html(counter).animate({
      'opacity' : '0'
    },200, function() {
      $(".counter").delay(300).animate({
        'opacity' : '1'
      })
    })
  }
  // Add To Basket Animation
  $(".page-wrapper").on("click", function() {
    addToBasket(); $(this).parent().parent().find(".product_overlay").css({
      'transform': ' translateY(0px)',
      'opacity': '1',
      'transition': 'all ease-in-out .45s'
    }).delay(1500).queue(function() {
      $(this).css({
        'transform': 'translateY(-500px)',
        'opacity': '0',
        'transition': 'all ease-in-out .45s'
      }).dequeue();
    });
  });
});



