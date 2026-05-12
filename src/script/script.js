const loginForm = document.querySelector(".login form");
const registerForm = document.querySelector(".register form");


if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const input = loginForm.querySelector("input").value;

        if (input === "") {
            alert("Please enter email or mobile number");
        } else {
            alert("Proceeding...");
        }
    });
}


if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputs = registerForm.querySelectorAll("input");

        let empty = false;

        inputs.forEach(input => {
            if (input.value === "") empty = true;
        });

        if (empty) {
            alert("Please fill all fields");
        } else {
            alert("Account created!");
        }
    });
}


// array of electronics product
const products = [
  {
    id: 1,
    image: "/assets/Images/headphone_image.png",
    title: "Headphones",
    price: 1999
  },

  {
    id: 2,
    image: "/assets/Images/iphone_image.png",
    title: "iPhone",
    price: 89999
  },

  {
    id: 3,
    image: "/assets/Images/laptop_image.png",
    title: "Laptop",
    price: 39999
  },

  {
    id: 4,
    image: "/assets/Images/bluetooth_image.png",
    title: "Bluetooth",
    price: 999
  },

  {
    id: 5,
    image: "/assets/Images/speaker_image.png",
    title: "Speaker",
    price: 4999
  }

];

// array of books
const books = [
  {
    image: "/assets/Images/art_image.png"
  },

  {
    image: "/assets/Images/books_image.png"
  },

  {
    image: "/assets/Images/cbse_image.png"
  },

  {
    image: "/assets/Images/class7_image.png"
  },

  {
    image: "/assets/Images/class9_image.png"
  },

  {
    image: "/assets/Images/class10_image.png"
  },

  {
    image: "/assets/Images/english_image.png"
  },

  {
    image: "/assets/Images/exampler_image.png"
  },

  {
    image: "/assets/Images/glance_image.png"
  },

  {
    image: "/assets/Images/hindi_image.png"
  },

  {
    image: "/assets/Images/hindiclass9_image.png"
  },

  {
    image: "/assets/Images/it_image.png"
  },

  {
    image: "/assets/Images/maths_image.png"
  },

  {
    image: "/assets/Images/pcmb_image.png"
  },

  {
    image: "/assets/Images/science_image.png"
  }

];


//electronics product 
const productsContainer = document.querySelector(".products-container");

products.forEach((product) => {

  productsContainer.innerHTML += `
  
    <div class="products-card">
    
      <img src="${product.image}">
      
      <h3>${product.title}</h3>
      
      <p>₹${product.price}</p>

     <button onclick="addToCart(${product.id})">Add To Cart</button>

    </div>

  `;

});

// books product
const booksContainer = document.querySelector(".books-section");

books.forEach((book) => {

  booksContainer.innerHTML += `
  
    <div class = "books-card">
      <img src="${book.image}">
    </div>

  `;

});


// slider horizontally
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
let booksWrapper = document.querySelector(".books-wrapper");

let scrollAmount = 0;

const maxScroll = booksContainer.scrollWidth - booksContainer.clientWidth;

nextBtn.addEventListener("click", () =>
{
    scrollAmount = scrollAmount + 300;

    if(scrollAmount > maxScroll)
    {
        scrollAmount = maxScroll;
    }

    booksContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener("click",() =>
{
    scrollAmount = scrollAmount - 300;

    if(scrollAmount < 0)
    {
        scrollAmount = 0;
    }

    booksContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

// cart logic in home page
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id)
{
  const selectedProduct = products.find((product) => product.id == id);

  cart.push(selectedProduct);

    localStorage.setItem("cart",JSON.stringify(cart));

    updateCartCount();
    alert("Product Added To Cart");
}

function updateCartCount()
{
  document.getElementById("cart-count").innerText = cart.length;

}

function addToCart(id)
{
  const selectedProduct = products.find(
    (product) => product.id == id
  );

  cart.push(selectedProduct);

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  alert("Product Added To Cart");

  window.location.href = "/src/html/cart.html";
}

updateCartCount();