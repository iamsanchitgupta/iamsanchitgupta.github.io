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

function toggleNavbarDropDown() {
    $("#myDropdown").toggleClass("show");
}

function toggleNavbar() {
    $(".tabs").toggleClass("show");
}

function setEventsForNavbar() {
    if (window.innerWidth <= 1000) {
        $(".dropdown-tab").off("mouseout");
        $(".dropdown-tab").off("mouseover");

        $(".dropdown-tab").on("click", toggleNavbarDropDown);
    } else {
        $(".dropdown-tab").on("mouseout", hideNavbarDropDown);
        $(".dropdown-tab").on("mouseover", showNavbarDropDown);

        $(".dropdown-tab").off("click");
    }
}

function copyLink() {
    console.log("l")
    $('#copy-inp').val(window.location.href);
    $('#copy-inp').show();
    $('#copy-inp').focus();
    $('#copy-inp').select();
    document.execCommand('copy');
    $('#copy-inp').hide();
}

function initialize() {
    tippy('[data-tippy-content]')
    $(".menu-btn").on("click", toggleNavbar);
    $(".copy").on("click", copyLink);
    setEventsForNavbar()

    $(window).resize(setEventsForNavbar);
}

window.onload = initialize;
