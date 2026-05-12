let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.querySelector(".cart-items");

function displayCart()
{
    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) =>
    {
        total = total + product.price;

        cartItems.innerHTML += `
        
        <div class="cart-product">

            <img src="${product.image}">

            <div class="product-details">

                <h2>${product.title}</h2>

                <p>In Stock</p>

                <h3>₹${product.price}</h3>

                <button onclick="removeItem(${index})">
                    Delete
                </button>

            </div>

        </div>

        <hr>
        
        `;
    });

    document.querySelector(".subtotal").innerText =
    "Subtotal (" + cart.length + " items): ₹" + total;
}

function removeItem(index)
{
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

    updateCartCount();
}

function updateCartCount()
{
    document.getElementById("cart-count").innerText = cart.length;
}

updateCartCount();

displayCart();