// Product Database
const products = [
    { id: 1, name: 'Classic Chino Pants', price: 2500, image: '👖', category: 'woven' },
    { id: 2, name: 'Cargo Pants Collection', price: 3200, image: '🩳', category: 'woven' },
    { id: 3, name: 'Khaki Trousers', price: 2800, image: '👔', category: 'woven' },
    { id: 4, name: 'Casual Shorts', price: 1800, image: '🩳', category: 'woven' },
    { id: 5, name: 'Slim Fit Jeans', price: 3500, image: '👖', category: 'denim' },
    { id: 6, name: 'Regular Fit Jeans', price: 3200, image: '👖', category: 'denim' },
    { id: 7, name: 'Distressed Jeans', price: 3800, image: '👖', category: 'denim' },
    { id: 8, name: 'Dark Wash Denim', price: 3400, image: '👖', category: 'denim' },
    { id: 9, name: 'Hooded Sweatshirt', price: 2800, image: '🧥', category: 'knitwear' },
    { id: 10, name: 'Crew Neck Jersey', price: 2200, image: '👕', category: 'knitwear' },
    { id: 11, name: 'Zip-Up Hoodie', price: 3200, image: '🧥', category: 'knitwear' },
    { id: 12, name: 'Sweatpants', price: 2500, image: '👖', category: 'knitwear' },
    { id: 13, name: 'Performance T-Shirts', price: 1800, image: '👕', category: 'activewear' },
    { id: 14, name: 'Sports Leggings', price: 2200, image: '🩱', category: 'activewear' },
    { id: 15, name: 'Running Shorts', price: 1600, image: '🩳', category: 'activewear' },
    { id: 16, name: 'Track Suits', price: 4500, image: '🏃', category: 'activewear' },
    { id: 17, name: 'Safety Vests', price: 1200, image: '🦺', category: 'workwear' },
    { id: 18, name: 'Work Pants', price: 2800, image: '👖', category: 'workwear' },
    { id: 19, name: 'Coveralls', price: 3500, image: '👷', category: 'workwear' },
    { id: 20, name: 'Work Shirts', price: 1800, image: '👔', category: 'workwear' }
];

// Cart State
let cart = [];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderShop();
    setupEventListeners();
    updateCartUI();
});

// Render Shop
function renderShop() {
    const shopGrid = document.getElementById('shopGrid');
    shopGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">${product.image}</div>
            <h3>${product.name}</h3>
            <p class="product-desc">High quality ${product.category} apparel</p>
            <div class="product-price">PKR ${product.price.toLocaleString()}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    showNotification('Added to cart!');
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

// Update Cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-header">
                    <div>
                        <div class="cart-item-name">${item.name}</div>
                        <div>PKR ${item.price.toLocaleString()}</div>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">✕</button>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <span style="margin-left: auto; font-weight: 600;">PKR ${(item.price * item.quantity).toLocaleString()}</span>
                </div>
            </div>
        `).join('');
    }
    
    cartTotal.textContent = `PKR ${totalPrice.toLocaleString()}`;
}

// Event Listeners
function setupEventListeners() {
    // Cart Toggle
    document.getElementById('cartBtn').addEventListener('click', () => {
        document.getElementById('cartSidebar').classList.add('active');
        document.getElementById('cartOverlay').classList.add('active');
    });
    
    document.getElementById('closeCart').addEventListener('click', closeCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);
    
    // Mobile Menu
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
        const navLinks = document.getElementById('navLinks');
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Contact Form
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! We will review and connect with you within 24 hours.');
        e.target.reset();
    });
    
    // Product Categories
    document.querySelectorAll('.product-category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            document.getElementById('ecommerce').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
}

function showNotification(message) {
    // Simple notification
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
}
