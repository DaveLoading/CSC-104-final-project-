// JavaScript for handling Add to Cart functionality
function addToCart(productName) {
    alert(productName + " has been added to your cart!");
}

// JavaScript for handling popup modal
function showPopup(message) {
    // Set the message inside the popup modal
    document.getElementById('popup-message').innerText = message;
    // Display the popup modal
    document.getElementById('popup').style.display = 'block';
    // Add animation class (optional, if animations are used)
    document.getElementById('popup').classList.add('show-animation');
}

function closePopup() {
    // Hide the popup modal
    document.getElementById('popup').style.display = 'none';
    // Remove animation class (optional, if animations are used)
    document.getElementById('popup').classList.remove('show-animation');
}
