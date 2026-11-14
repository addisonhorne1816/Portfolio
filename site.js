// Initialize Slick Carousel
function initializeSlideshow() {

    const slideshow = $(".slideshow-container");

    if (slideshow.length && !slideshow.hasClass("slick-initialized")) {

        slideshow.slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            accessibility: true,
            autoplay: false
        });

    }

}

// Initialize Donation Form
function initializeDonationForm() {

    const donationForm = document.getElementById("donationForm");
    const formMessage = document.getElementById("formMessage");

    if (donationForm && formMessage) {

        donationForm.addEventListener("submit", function(event) {

            event.preventDefault();

            formMessage.hidden = false;

            formMessage.textContent =
                "Thank you for completing the demonstration form! No donation has been made.";

            formMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            this.reset();

        });

    }

}
// Initialize Page
function initializePage() {

    initializeSlideshow();

    initializeDonationForm();

}

// Wait until the page loads
if (document.readyState === "loading") {

    document.addEventListener("DOMContentLoaded", initializePage);

} else {

    initializePage();

}