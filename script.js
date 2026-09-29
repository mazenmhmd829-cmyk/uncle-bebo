// =========================================
// UNCLE BEBO WEBSITE
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const profile = document.querySelector(".profile");
    const welcome = document.querySelector(".welcome");
    const links = document.querySelectorAll(".social-link");
    const bottom = document.querySelector(".bottom");

    // -----------------------------------------
    // Initial animations
    // -----------------------------------------

    setTimeout(() => {
        profile.classList.add("show");
    }, 150);


    setTimeout(() => {
        welcome.classList.add("show");
    }, 350);


    // -----------------------------------------
    // Social buttons animation
    // -----------------------------------------

    links.forEach((link, index) => {

        setTimeout(() => {
            link.classList.add("show");
        }, 550 + (index * 120));

    });


    // -----------------------------------------
    // Bottom animation
    // -----------------------------------------

    setTimeout(() => {
        bottom.classList.add("show");
    }, 1300);


    // -----------------------------------------
    // Click effect
    // -----------------------------------------

    links.forEach((link) => {

        link.addEventListener("click", () => {

            link.style.transform = "scale(0.97)";

            setTimeout(() => {
                link.style.transform = "";
            }, 150);

        });

    });


    // -----------------------------------------
    // Console message
    // -----------------------------------------

    console.log(
        "🔥 Welcome to the world of Uncle Bebo"
    );

});