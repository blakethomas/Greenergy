var products = [
  {
    name:'Ethiopian Coffee',
    price:12.95,
    imgSrc:'https://images.pexels.com/photos/34085/pexels-photo.jpg?h=350&auto=compress&cs=tinysrgb',
    details: {
      origin:'Addis Abada, Ethiopia',
      description: 'Has a strong kick and keeps you up all morining.',
      aroma:'Chesnuts, Dark Chocolate, Tobacco',
      ammount: '1 lbs'
    },
  },
  {
    name:'Colombian Coffee',
    price:15.95,
    imgSrc:'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?h=350&auto=compress&cs=tinysrgb',
    details: {
      origin:'Bogota, Colombia',
      description: 'A mild, well balanced bean for all types of cofffee lovers.',
      aroma:'Caramel, Nuts, Butter',
      ammount: '1 lbs'
    }
  },
  {
    name:'Espresso Machine',
    price:1999.95,
    imgSrc:'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?h=350&auto=compress&cs=tinysrg',
    details: {
      origin:'Florence, Italy',
      description: 'A machine made to satisfy all your espresso needs.',
      aroma:'N/A',
      ammount: '1 Unit'
    }
  },
  {
    name:'Vietnamese Coffee',
    price:12.95,
    imgSrc:'https://images.pexels.com/photos/6067/coffee-flower-reading-magazine.jpg?h=350&auto=compress&cs=tinysrgb',
    details: {
      origin:'Ho Chi Minh, Vietnam',
      description: 'A bold, caffeine filled bean that is for experienced coffee drinkers',
      aroma:'Toffee, Hazelnut',
      ammount: '1 lbs'
    }
  },
  {
    name:'Hawaiian Coffee',
    price:14.95,
    imgSrc:'https://images.pexels.com/photos/2059/restaurant-red-beans-coffee.jpg?h=350&auto=compress&cs=tinysrgb',
    details: {
      origin:'Kawaii, Hawaii',
      description: 'A kona blend for those who love that traditional Hawaiian taste.',
      aroma:'Caramel, Cashew',
      ammount: '1 lbs'
    }
  },
  {
    name:'Jamaican Coffee',
    price:16.95,
    imgSrc:'https://images.pexels.com/photos/544117/pexels-photo-544117.jpeg?h=350&auto=compress&cs=tinysrgb',
    details: {
      origin:'Kingston, Jamaica',
      description: 'A delicious bean, complimented by perfect herbal flavor notes.',
      aroma:'Herbal',
      ammount: '1 lbs'
    }
  },
  {
    name:'French Press',
    price:99.95,
    imgSrc:'https://cdn.gearpatrol.com/wp-content/uploads/2016/03/better-coffee-at-home-gear-patrol-french-press.jpg',
    details: {
      origin:'Nice, France',
      description: 'A machine made for the ultimate cup of joe.',
      aroma:'N/A',
      ammount: '1 Unit'
    }
  },
  {
    name:'Cold Brew Maker',
    price:49.95,
    imgSrc:'https://cdn.gearpatrol.com/wp-content/uploads/2016/03/better-coffee-at-home-gear-patrol-cold-brew-maker.jpg',
    details:{
      origin:'Los Angeles, United States',
      description: 'A contraption for making coffee with cold water.',
      aroma:'N/A',
      ammount: '1 Unit'
    }
  },
  {
    name:'Automated Coffee Machine',
    price:399.95,
    imgSrc:'https://cdn.gearpatrol.com/wp-content/uploads/2016/03/better-coffee-at-home-gear-patrol-coffee-maker.jpg',
    details: {
      origin:'Philadelphia, United States',
      description: 'A machine made that does all the work for you.',
      aroma:'N/A',
      ammount: '1 Unit'
    }
  }
]

var counter = 0

var priceHolder = 0

var cart = []

var $circleIcon = document.createElement('i')


var $container = document.createElement('div')
$container.classList.add('container')

var $row = document.createElement('row')
$row.classList.add('row')

var $exit = document.createElement('div')
var $cart = document.createElement('div')
var $cartTable = document.createElement('table')
var $priceRow = document.createElement('tr')
var $priceName = document.createElement('td')
var $totalPrice = document.createElement('td')
var $checkoutCell = document.createElement('td')
var $checkoutButton = document.createElement('button')
var $checkoutScreen = document.createElement('div')
var $checkoutTitle = document.createElement('h2')
var $completePurchase = document.createElement('button')
var $purchaseForm = document.createElement('form')
var $nameInput = document.createElement('input')
var $emailInput = document.createElement('input')
var $addressInput = document.createElement('input')
var $phoneInput =  document.createElement('input')
var $cardInput = document.createElement('input')
var $expirationInput = document.createElement('input')
var $exitCheckout = document.createElement('button')
var $btnRow = document.createElement('div')
var $conirmationScreen = document.createElement('div')
var $confirmationMessage = document.createElement('p')
var $emailMessage = document.createElement('p')
var $confirmationClose = document.createElement('button')

$btnRow.classList.add('row')
$exitCheckout.classList.add('btn', 'btn-default', 'w-30', 'mx-auto', 'mt-3', 'mb-3', 'ml-0')
$exitCheckout.textContent = 'Close'
$exit.classList.add('card', 'row', 'mb-5', 'border-0')
$cartTable.classList.add('table', 'p-2', 'border-0')
$priceRow.setAttribute('scope', 'row')
$priceName.textContent = 'Total Price:'
$priceName.classList.add('pt-4', 'text-center')
$totalPrice.classList.add('text-center', 'pt-4')
$checkoutButton.textContent = 'Checkout'
$checkoutButton.classList.add('btn', 'btn-default')
$checkoutScreen.classList.add('card', 'w-50', 'text-center', 'mx-auto', 'move-up')
$checkoutTitle.textContent = 'Checkout'
$checkoutTitle.classList.add('card-title')
$completePurchase.textContent = 'Complete Purchase'
$completePurchase.classList.add('btn', 'btn-default', 'w-30', 'mx-auto', 'mt-3', 'mb-3', 'mr-0')
$conirmationScreen.classList.add('card', 'w-50', 'text-center', 'mx-auto', 'move-up', 'product', 'black')
$confirmationMessage.classList.add('text-center')
$confirmationMessage.textContent = 'Thanks for your purchase!'
$emailMessage.textContent = 'You will recieve a verification shortly on your provided email.'
$emailMessage.classList.add('text-center')
$confirmationClose.textContent = 'Close'
$confirmationClose.classList.add('btn', 'btn-default', 'text-center','w-30', 'mx-auto')

makeForms($nameInput)
nameForms($nameInput, 'Name')
makeForms($emailInput)
nameForms($emailInput, 'Email')
makeForms($addressInput)
nameForms($addressInput, 'Address')
makeForms($phoneInput)
nameForms($phoneInput, 'Phone #')
makeForms($cardInput)
nameForms($cardInput, 'Card #')
makeForms($expirationInput)
nameForms($expirationInput, 'Expiration Date')

var $cartIcon = document.querySelector(".fa-shopping-cart")
$cartIcon.classList.add('black', 'p-1')

$cartIcon.addEventListener('click', function(){
  $cart.classList.toggle('disappear')
})

$checkoutButton.addEventListener('click', function(){
  $checkoutScreen.classList.remove('disappear')
  $checkoutScreen.classList.add('black')
  $cartTable.classList.add('black')
  $container.classList.add('filter')
  document.body.appendChild($checkoutScreen)
  $checkoutScreen.appendChild($checkoutTitle)
  $checkoutScreen.appendChild($cartTable)
  $checkoutCell.innerHTML = ''
  $purchaseForm.appendChild($nameInput)
  $purchaseForm.appendChild($emailInput)
  $purchaseForm.appendChild($addressInput)
  $purchaseForm.appendChild($phoneInput)
  $purchaseForm.appendChild($cardInput)
  $purchaseForm.appendChild($expirationInput)
  $checkoutScreen.appendChild($purchaseForm)
  $checkoutScreen.appendChild($btnRow)
  $btnRow.appendChild($completePurchase)
  $btnRow.appendChild($exitCheckout)
  $exitCheckout.addEventListener('click', function(){
    $checkoutScreen.classList.add('disappear')
    $container.classList.remove('filter')
  })
  $completePurchase.addEventListener('click', function(){
    $checkoutScreen.classList.add('disappear')
    $conirmationScreen.appendChild($confirmationMessage)
    $conirmationScreen.appendChild($emailMessage)
    $conirmationScreen.appendChild($confirmationClose)
    document.body.appendChild($conirmationScreen)
    $conirmationScreen.classList.remove('disappear')
    $confirmationClose.addEventListener('click', function(){
      $conirmationScreen.classList.add('disappear')
      $cartTable.classList.remove('black')
      $cartTable.textContent = ''
      $container.classList.remove('filter')
      clearCart()
    })
  })
})

function clearCart(){
  counter = 0
  priceHolder = 0
  for(var i; i < cart.length; i++){

    cart.pop[i]
  }
  $circleIcon.classList.remove('fa', 'fa-circle', 'pl-2')
  return
}

function makeForms (input){
  return input.setAttribute('type', 'text')
}

function nameForms(input, name){
  return input.setAttribute('placeholder', name)
}
/*returns HTML version of the cart*/
function renderCart(product){

  var $cartRow = document.createElement('tr')
  var $itemCount = document.createElement('td')
  var $cartItem = document.createElement('td')
  var $removeHolder = document.createElement('td')
  var $removeButton = document.createElement('button')

  $cartItem.classList.add('pt-4')
  $itemCount.classList.add('pt-4', 'text-center')
  $cartRow.setAttribute('scope', 'row')


  /*Listens for removal of items*/
  $removeButton.addEventListener('click', function(){
    $cartRow.textContent = ''
    counter = counter - 1
    priceHolder = priceHolder - product.price
    $totalPrice.textContent = Math.round(priceHolder)
    if(counter === 0){
      $circleIcon.classList.remove('fa', 'fa-circle', 'pl-2')
    }
  })

  $itemCount.textContent = 1
  $totalPrice.textContent = '$ ' + Math.round(priceHolder)
  $cart.classList.add('card', 'pop-out-cart', 'disappear')
  $cartItem.textContent = null
  $cartItem.textContent = $cartItem.textContent + product.name
  $removeButton.classList.add('btn', 'btn-default', 'text-center')
  $removeButton.textContent = 'Remove'

  $cartIcon.appendChild($cart)
  $cart.appendChild($cartTable)
  $cartTable.appendChild($cartRow)
  $cartTable.appendChild($priceRow)
  $priceRow.appendChild($priceName)
  $priceRow.appendChild($totalPrice)
  $cartRow.appendChild($itemCount)
  $cartRow.appendChild($cartItem)
  $cartRow.appendChild($removeHolder)
  $removeHolder.appendChild($removeButton)
  $priceRow.appendChild($checkoutCell)
  $checkoutCell.appendChild($checkoutButton)
  return $cart
}

/* returns the table of info for each product description*/
function renderDetails(product){

  $exit.classList.add('card', 'text-center', 'rounded', 'mx-auto', 'w-50', 'move-up', 'black', 'col-xs-12')
  $exit.addEventListener('click', function(){
    $container.classList.remove('filter')
    $exit.classList.remove('exit', 'card')
    $exit.innerHTML = ''
  })
  var $exitButton = document.createElement('button')
  $exitButton.classList.add('btn','btn-default', 'exit-btn', 'float-right', 'mr-3')
  $exitButton.textContent =  'X'

  var $addButton = document.createElement('button')
  $addButton.classList.add('btn', 'btn-default', 'add-button', 'mt-3', 'mr-4')
  $addButton.textContent = 'Add To Cart'

  /*Listens for the add to cart button*/
  $addButton.addEventListener('click', function(){
    cart.push(product)
    counter ++
    priceHolder = priceHolder + product.price
    $circleIcon.classList.add('fa', 'fa-circle', 'pl-2')
    $cartIcon.appendChild($circleIcon)
    renderCart(product)
    $cart.classList.add('disappear')
    $circleIcon.setAttribute('aria-hidden', 'true')
  })

  var $details = document.createElement('div')
  $details.classList.add('card-body')

  var $title = document.createElement('h2')
  $title.textContent = product.name
  $title.classList.add('card-title', 'ml-5')

  var $table = document.createElement('table')
  $table.classList.add('ml-4', 'p-2', 'border-0')

  var $row = document.createElement('tr')
  $row.setAttribute('scope', 'row')

  var $originCell = document.createElement('td')
  $originCell.textContent = 'Origin: '

  var $originContent = document.createElement('td')
  $originContent.textContent = product.details.origin

  var $rowTwo = document.createElement('tr')

  var $descriptionCell = document.createElement('td')
  $descriptionCell.textContent = 'Description: '

  var $descriptionContent= document.createElement('td')
  $descriptionContent.textContent = product.details.description

  var $rowThree = document.createElement('tr')

  var $aromaCell = document.createElement('td')
  $aromaCell.textContent = 'Aromas: '

  var $aromaContent = document.createElement('td')
  $aromaContent.textContent = product.details.aroma

  var $rowFour = document.createElement('tr')

  var $ammountCell = document.createElement('td')
  $ammountCell.textContent = 'Quantity: '

  var $ammountContent = document.createElement('td')
  $ammountContent.textContent = product.details.ammount

  var $price = document.createElement('p')
  $price.textContent =  'Price: ' + product.price
  $price.classList.add('details-price', 'card-text', 'mr-3')

  $exit.appendChild($details)
  $details.appendChild($exitButton)
  $details.appendChild($title)
  $details.appendChild($price)
  $details.appendChild($table)
  $details.appendChild($addButton)

  $table.appendChild($row)
  $row.appendChild($originCell)
  $row.appendChild($originContent)
  $table.appendChild($rowTwo)
  $rowTwo.appendChild($descriptionCell)
  $rowTwo.appendChild($descriptionContent)
  $table.appendChild($rowThree)
  $rowThree.appendChild($aromaCell)
  $rowThree.appendChild($aromaContent)
  $table.appendChild($rowFour)
  $rowFour.appendChild($ammountCell)
  $rowFour.appendChild($ammountContent)

  return $exit
}

/* returns the product*/
function renderProduct(product){
  var $product = document.createElement('div')
  $product.classList.add('col-lg-4', 'col-sm-6', 'mb-3')

  var $thumbnail = document.createElement('div')
  $thumbnail.classList.add('card')
  $thumbnail.addEventListener('mouseover', function(){
    $info.classList.remove('invisible')
  })
  $thumbnail.addEventListener('mouseout', function(){
    $info.classList.add('invisible')
  })

  var $img = document.createElement('img')
  $img.classList.add('picture-target', 'card-img-top')
  $img.src = product.imgSrc

  var $descriptionHolder = document.createElement('div')
  $descriptionHolder.classList.add('card-body')

  var $info = document.createElement('button')
  $info.classList.add('invisible', 'info-button', 'btn', 'btn-default')
  $info.textContent = 'View Details'
  $info.addEventListener('click', function(){
    $container.classList.add('filter')
    document.body.appendChild(renderDetails(product))
  })

  var $name = document.createElement('p')
  $name.classList.add('product', 'text-center', 'card-title', 'mb-2')
  $name.textContent = product.name

  var $price = document.createElement('p')
  $price.classList.add('price', 'text-center', 'card-text', 'border-right-0', 'border-left-0','border-bottom-0', 'border')
  $price.textContent = product.price

  $product.appendChild($thumbnail)
  $thumbnail.appendChild($img)
  $thumbnail.appendChild($descriptionHolder)
  $descriptionHolder.appendChild($info)
  $descriptionHolder.appendChild($name)
  $descriptionHolder.appendChild($price)

  return $product
}

document.body.appendChild($container)
$container.appendChild($row)

/*Loops through each product and renders it to the page*/
for(var i = 0; i < products.length; i++){
  $row.appendChild(renderProduct(products[i]))
}
