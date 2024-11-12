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
    // 这里可以实现用户创建逻辑
    alert(`Create a new user: ${username}`);
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    // 这里可以实现登录逻辑
    alert(`Login in: ${username}`);
    document.getElementById('shoppingLink').style.display = 'block'; // 登录后显示购物链接
}

function addToCart(courseName, price, quantity) {
    const qty = parseInt(quantity);
    if (qty > 0) {
        const item = { name: courseName, price: price, quantity: qty };
        cart.push(item);
        totalPrice += price * qty;
        updateCart();
    } else {
        alert("请输入有效的数量");
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
        cart = []; // 清空购物车
        totalPrice = 0;
        updateCart(); // 更新购物车显示
    }
}
function submitContactForm(event) {
    event.preventDefault(); // 防止表单提交导致页面刷新

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    // 这里可以添加处理表单数据的逻辑，例如发送到服务器
    // 目前仅用 alert 显示消息
    alert(`Thanks you message, ${name}! we will reply early。`);

    // 清空表单
    document.getElementById('contactForm').reset();
    document.getElementById('contactResponse').textContent = "your message send successful";
    document.getElementById('contactResponse').style.display = "block";
}
