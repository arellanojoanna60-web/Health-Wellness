// Newsletter Subscription Alert
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`Thank you for subscribing with: ${email}! Check your inbox for your 10% discount code.`);
    this.reset();
});

// Simple Scroll Effect for Navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '0.5rem 5%';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.padding = '1rem 5%';
        header.style.backgroundColor = '#fff';
    }
});

// Add to Cart Interaction
const cartButtons = document.querySelectorAll('.add-to-cart');
cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to your wellness cart!');
    });
});
