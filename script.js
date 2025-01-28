// Pilih semua tautan di dalam navbar
const navbarLinks = document.querySelectorAll(".navbar-nav a");

// Tambahkan event listener untuk setiap tautan
navbarLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Cegah perilaku default link
    const targetID = this.getAttribute("href"); // Ambil ID target
    const targetSection = document.querySelector(targetID); // Pilih section target

    // Scroll ke section target dengan mempertimbangkan tinggi navbar
    const navbarHeight = document.querySelector(".navbar").offsetHeight; // Tinggi navbar
    const targetPosition = targetSection.offsetTop; // Posisi awal section
    const scrollToPosition = targetPosition - navbarHeight; // Scroll dengan kompensasi navbar

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth", // Smooth scrolling
    });
  });
});

// Event listener untuk hamburger toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navbarNav = document.querySelector(".navbar-nav");

  hamburger.addEventListener("click", () => {
    navbarNav.classList.toggle("active");
  });
});
