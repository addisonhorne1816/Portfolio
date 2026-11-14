let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex + n);
}

function currentSlide(n) {
    showSlides(n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    const status = document.getElementById("slideStatus");

    if (slides.length === 0) {
        return;
    }

    if (n > slides.length) {
        n = 1;
    }

    if (n < 1) {
        n = slides.length;
    }

    slideIndex = n;

    for (let i = 0; i < slides.length; i++) {
        slides[i].hidden = true;
        slides[i].style.display = "none";
        slides[i].setAttribute("aria-hidden", "true");
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
        dots[i].removeAttribute("aria-current");
    }

    const activeSlide = slides[slideIndex - 1];

    activeSlide.hidden = false;
    activeSlide.style.display = "block";
    activeSlide.setAttribute("aria-hidden", "false");

    if (dots.length >= slideIndex) {
        dots[slideIndex - 1].classList.add("active");
        dots[slideIndex - 1].setAttribute("aria-current", "true");
    }

    if (status) {
        const caption = activeSlide.querySelector(".text");
        const slideName = caption ? caption.textContent.trim() : "";

        status.textContent =
            "Slide " + slideIndex + " of " + slides.length +
            (slideName ? ": " + slideName : "");
    }
}

function initializeSlideshow() {
    showSlides(1);
}

function initializeDonationForm() {
    const donationForm = document.getElementById("donationForm");
    const formMessage = document.getElementById("formMessage");

    if (donationForm && formMessage) {
        donationForm.addEventListener("submit", function(event) {
            event.preventDefault();

            formMessage.hidden = false;

            this.reset();
        });
    }
}

function initializePage() {
    initializeSlideshow();
    initializeDonationForm();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializePage);
} else {
    initializePage();
}