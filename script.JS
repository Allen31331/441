let cart = [];
let totalPrice = 0;

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

function createUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // This is where the user creation logic can be implemented
    alert(`Create a new user: ${username}`);
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    // This is where the login logic can be implemented
    alert(`Login in: ${username}`);
    document.getElementById('shoppingLink').style.display = 'block'; // After logging in, the shopping link is displayed
}

function addToCart(courseName, price, quantity) {
    const qty = parseInt(quantity);
    if (qty > 0) {
        const item = { name: courseName, price: price, quantity: qty };
        cart.push(item);
        totalPrice += price * qty;
        updateCart();
    } else {
        alert("Please enter a valid quantity");
    }
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsDiv.appendChild(cartItem);
    });
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert("The cart is empty!");
    } else {
        alert("Checkout successful! total: $" + totalPrice.toFixed(2));
        cart = []; // Empty your shopping cart
        totalPrice = 0;
        updateCart(); // Update the cart display
    }
}
function submitContactForm(event) {
    event.preventDefault(); // Prevent form submissions from causing page refreshes

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    // Here you can add logic to process the form data, e.g. send to the server
    // Currently, only alerts are used to display messages
    alert(`Thanks you message, ${name}! we will reply early。`);

    // Clear the form
    document.getElementById('contactForm').reset();
    document.getElementById('contactResponse').textContent = "your message send successful";
    document.getElementById('contactResponse').style.display = "block";
}
