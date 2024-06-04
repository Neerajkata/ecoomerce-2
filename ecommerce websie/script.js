const loadAPI = () => {

 



  fetch('./products.json').then(response => response.json())
    .then(data => getProducts(data))


  const displayProduct = (product) => {
    return (`
    <div class="product">
    <img src= ${product.image}>
    <h2>${product.title}</h2>
    <h3> RATING: <span class="span">${product.rating.rate}</span></h3>
    <h3> PRICE: <span class="span">${product.price}</span></h3>
    <div class="icon-cart-js">
                 <button>BUY NOW</button>
                 <a>  <i id="cart-btn" style=" font-size: 20px;" class="fa-solid fa-cart-plus"></i></a>
               </div>
    </div>`);

    



  };


  const getProducts = (products) => {
    const displayUI = products.map((product) => displayProduct(product))
   


    const container = document.getElementById('productssection')
    container.innerHTML = displayUI.join(" ")

  };



 


}
loadAPI();


document.addEventListener("DOMContentLoaded", function() {

  const featuredProduct = document.getElementsByClassName("featured-product");

  const iconTags = document.querySelectorAll("i")
 

 iconTags.forEach(icon => {
  icon.addEventListener('click',function(){

  
   
    const product = this.parentElement;
   const  products = product.parentElement.parentElement;
    const productName = products.textContent;
    const productRate = products.textContent;
    const productRating =products.textContent;

    // Store product details in local storage
    localStorage.setItem("productName", productName);
    localStorage.setItem("productRate", productRate);
    localStorage.setItem("productRating", productRating);

    
    // Redirect to cart page
    window.location.href = "cart.html";
    
});
  })
 })
 
 

   

 

  