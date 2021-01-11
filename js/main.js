window.addEventListener("scroll", function (event) {
    if (this.scrollY != 0) {
        $(".navbar:first").addClass("navbar-scrolled");
    } else {
        $(".navbar:first").removeClass("navbar-scrolled");
    }
}, false);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showNavbarDropDown() {
    $("#myDropdown").addClass("show");
}

function hideNavbarDropDown() {
    $("#myDropdown").removeClass("show");
}

function initialize() {
    tippy('[data-tippy-content]')
}

window.onload = initialize;
