// JavaScript for handling Add to Cart functionality
function addToCart(productName) {
    alert(productName + " has been added to your cart!");
}

// JavaScript for handling popup modal
function showPopup(message) {
    document.getElementById('popup-message').innerText = message;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
