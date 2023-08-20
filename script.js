// Navbar Scroll Fade
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('transparent-navbar');
    } else {
        navbar.classList.remove('transparent-navbar');
    }
};

// Smooth scrolling saat mengklik tautan internal di halaman
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
    
        const target = document.querySelector(this.getAttribute('href'));
        const offsetTop = target.offsetTop;
    
        window.scroll({
            top: offsetTop - 80,
            behavior: "smooth"
        });
    });
});


// Popup Image
const clickableImages = document.querySelectorAll('.clickable-image');
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup-image');
const closePopup = document.querySelector('.close-popup');

clickableImages.forEach(image => {
    image.addEventListener('click', () => {
        const imgSrc = image.getAttribute('src');
        popupImage.setAttribute('src', imgSrc);
        popup.style.display = 'flex';
    });
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});