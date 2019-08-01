// particlesJS.load("hero", "js/particles.json");

var navbar = document.getElementById("page-navbar");
function updateNavbar() {
    console.log("Updating");
    if (window.scrollY >= window.innerHeight) {
        navbar.style.backgroundColor = 'rgba(0,0,0,0.9)';
    } else {
        navbar.style.backgroundColor = `rgba(0,0,0,${0.95 * (window.scrollY / window.innerHeight)})`;
    }
    setTimeout(updateNavbar, 30);
}

document.getElementById("hero").style.paddingTop = `${navbar.offsetHeight}px`;

// updateNavbar();
