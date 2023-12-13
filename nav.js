let nav = false;

/* Set the width of the side navigation to 250px */
function openNav() {
    nav = true;
    document.getElementById("sidenav").style.left = "0px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    nav = false;
    document.getElementById("sidenav").style.left = "-264px";
}

function toggleNav() {
    nav ? closeNav() : openNav();
}