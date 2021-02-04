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

async function copyLink() {
    $('#copy-inp').val(window.location.href);
    $('#copy-inp').show();
    $('#copy-inp').focus();
    $('#copy-inp').select();
    document.execCommand('copy');
    $('#copy-inp').hide();

    let t = tippy(".copy")[0];
    t.setContent("Link copied");
    t.show();
    await sleep(2000);

    t.setContent("Link");
}

async function copyEmail() {
    console.log("l")
    $('#copy-inp').val("sanchit13088@iiitd.ac.in");
    $('#copy-inp').show();
    $('#copy-inp').focus();
    $('#copy-inp').select();
    document.execCommand('copy');
    $('#copy-inp').hide();

    let t = tippy(".email")[0];
    t.setContent("Email copied");
    t.show();
    await sleep(2000);

    t.setContent("Email");
}

function initialize() {
    tippy('[data-tippy-content]')
    $(".menu-btn").on("click", toggleNavbar);
    $(".copy").on("click", copyLink);
    $(".email").on("click", copyEmail);
    setEventsForNavbar()

    $(window).resize(setEventsForNavbar);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function unscrambleEmail() {
    let email = $("#uns");
    console.log(email)
    let current_email = email.text().trim();
    let final_email = "sanchit13088@iiitd.ac.in";

    console.log(">" + current_email + "<")
    let used = [];
    let ind_map = [];
    for (let c in current_email) {
        used.push(false);
    }

    for (let _ = 0; _ < current_email.length; _++) {
        let c = current_email.charAt(_);
        let r = -1;
        for (let i = 0; i < final_email.length; i++) {
            if (!used[i] && final_email.charAt(i) == c) {
                r = i;
                used[i] = true;
                break;
            }
        }
        ind_map.push(r);
    }

    current_email = current_email.split("");
    console.log(ind_map)

    for (let i = 0; i < ind_map.length; i++) {
        for (let j = 0; j < ind_map.length - i; j++) {
            if (ind_map[j] > ind_map[j + 1]) {
                let x = ind_map[j + 1];
                ind_map[j + 1] = ind_map[j];
                ind_map[j] = x;

                x = current_email[j + 1];
                current_email[j + 1] = current_email[j];
                current_email[j] = x;
                await sleep(15);
            }

            email.text(current_email.join(""));
        }
    }

    $("#uns-btn").remove();
}

window.onload = initialize;