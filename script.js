/* ==========================================
   CASSAANO HOTEL
   script.js
========================================== */

// ===============================
// Mobile Navigation
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// ===============================
// Close Menu When Link Clicked
// ===============================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ===============================
// Booking Form Validation
// ===============================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const room = document.getElementById("room").value;

        const checkin = document.getElementById("checkin").value;

        const checkout = document.getElementById("checkout").value;

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            room === "" ||
            checkin === "" ||
            checkout === ""
        ) {

            alert("Please fill in all required fields.");

            return;

        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;

        }

        const phonePattern =
            /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {

            alert("Please enter a valid 10-digit mobile number.");

            return;

        }

        const today = new Date();

        today.setHours(0,0,0,0);

        const checkInDate = new Date(checkin);

        const checkOutDate = new Date(checkout);

        if (checkInDate < today) {

            alert("Check-in date cannot be in the past.");

            return;

        }

        if (checkOutDate <= checkInDate) {

            alert("Check-out date must be after the check-in date.");

            return;

        }

        alert(
            "🎉 Booking request submitted successfully!\n\nThank you for choosing Cassaano Hotel.\nOur reservation team will contact you shortly."
        );

        bookingForm.reset();

    });

}

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// Header Shadow on Scroll
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 60) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.25)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ===============================
// Fade-in Animation on Scroll
// ===============================

const animatedItems = document.querySelectorAll(
    ".card, .gallery-item, .room-card, .stat-box"
);

const revealItems = () => {

    animatedItems.forEach(item => {

        const itemTop = item.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if (itemTop < screenHeight - 100) {

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

        }

    });

};

animatedItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition =
        "all 0.6s ease";

});

window.addEventListener("scroll", revealItems);

window.addEventListener("load", revealItems);

// ===============================
// Current Year in Footer
// ===============================

const year = new Date().getFullYear();

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${year} Cassaano Hotel. All Rights Reserved.`;

}

// ===============================
// Welcome Message
// ===============================

window.addEventListener("load", () => {

    console.log("Welcome to Cassaano Hotel!");

});