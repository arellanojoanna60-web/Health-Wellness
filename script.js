// Sample Products
const products = [
  {id:1,name:"Organic Multivitamins",price:25,img:"https://images.unsplash.com/photo-1598514983670-8a0c40764b08"},
  {id:2,name:"Herbal Tea Pack",price:15,img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93"},
  {id:3,name:"Protein Powder",price:30,img:"https://images.unsplash.com/photo-1562184647-9e5c7bbf616f"},
  {id:4,name:"Vitamin C Capsules",price:20,img:"https://images.unsplash.com/photo-1511920170033-f8396924c348"}
];

let cart = [];

function displayProducts() {
  const container = document.getElementById("shop-products");
  container.innerHTML="";
  products.forEach(p=>{
    container.innerHTML+=`<div class="product">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>`;
  });
}

// Add to Cart
function addToCart(id){
  const product = products.find(p=>p.id===id);
  cart.push(product);
  document.getElementById("cart-count").innerText = cart.length;
}

// Scroll to Section
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// Sign Up CTA
function signUp(){
  alert("Sign Up functionality coming soon!");
}

// Contact Form Alert
document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you for contacting WellnessHub!");
  this.reset();
});

// Initialize
displayProducts();
