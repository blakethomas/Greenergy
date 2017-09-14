var products = [
{
  name:'Ethiopian Coffee',
  price:12.95,
  imgSrc:'https://images.pexels.com/photos/34085/pexels-photo.jpg?h=350&auto=compress&cs=tinysrgb'
},
{
  name:'Columbian Coffee',
  price:15.95,
  imgSrc:'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?h=350&auto=compress&cs=tinysrgb'
},
{
  name:'Espresso Machine',
  price:1999.95,
  imgSrc:'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?h=350&auto=compress&cs=tinysrg'
},
{
  name:'Vietnamese Coffee',
  price:12.95,
  imgSrc:'https://images.pexels.com/photos/6067/coffee-flower-reading-magazine.jpg?h=350&auto=compress&cs=tinysrgb'
},
{
  name:'Hawaiian Coffee',
  price:14.95,
  imgSrc:'https://images.pexels.com/photos/2059/restaurant-red-beans-coffee.jpg?h=350&auto=compress&cs=tinysrgb'
},
{
  name:'Jamaican Coffee',
  price:16.95,
  imgSrc:'https://images.pexels.com/photos/544117/pexels-photo-544117.jpeg?h=350&auto=compress&cs=tinysrgb'
},
{
  name:'French Press',
  price:99.95,
  imgSrc:'https://cdn.gearpatrol.com/wp-content/uploads/2016/03/better-coffee-at-home-gear-patrol-french-press.jpg'
},
{
  name:'Cold Brew Maker',
  price:49.95,
  imgSrc:'https://cdn.gearpatrol.com/wp-content/uploads/2016/03/better-coffee-at-home-gear-patrol-cold-brew-maker.jpg'
},
{
  name:'Automated Coffee Machine',
  price:399.95,
  imgSrc:'https://cdn.gearpatrol.com/wp-content/uploads/2016/03/better-coffee-at-home-gear-patrol-coffee-maker.jpg'
},
]

var btnName = "View Details"

var $container = document.createElement('div')
$container.classList.add('container')

var $row = document.createElement('row')
$row.classList.add('row')


function renderProduct(product){
  var $product = document.createElement('div')
  $product.classList.add('col-lg-4', 'col-sm-6')

  var $thumbnail = document.createElement('div')
  $thumbnail.classList.add('thumbnail')
  $thumbnail.addEventListener('mouseenter', function(){
    $info.classList.remove('disappear')
  })
  $thumbnail.addEventListener('mouseout', function(){
    $info.classList.add('disappear')
  })

  var $img = document.createElement('img')
  $img.classList.add('picture-target')
  $img.src = product.imgSrc

  var $info = document.createElement('button')
  $info.classList.add('disappear', 'info-button', 'btn', 'btn-default')
  $info.textContent = btnName

  var $name = document.createElement('p')
  $name.classList.add('product')
  $name.textContent = product.name

  var $price = document.createElement('p')
  $price.classList.add('price')
  $price.textContent = product.price

  $product.appendChild($thumbnail)
  $thumbnail.appendChild($img)
  $thumbnail.appendChild($info)
  $thumbnail.appendChild($name)
  $thumbnail.appendChild($price)

  return $product
}

document.body.appendChild($container)
$container.appendChild($row)

for(var i = 0; i < products.length; i++){
  $row.appendChild(renderProduct(products[i]))
}
