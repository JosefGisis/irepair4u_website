function toggleMenu() {
    let hamburgerNavigation = document.querySelector('.hamburger-navigation');
    if (hamburgerNavigation.style.display === 'none') {
        hamburgerNavigation.style.display = 'block';
    } else {
        hamburgerNavigation.style.display = 'none';
    }
}
