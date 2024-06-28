var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 25,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  keyboard: true,
});

function openNavbar() {
  const navbar = document.getElementById("mobile-menu");
  const rotateRight = document.getElementById("right-angle");
  const currentLeft = navbar.style.left;

  if (currentLeft === "0px") {
    navbar.style.left = "-250px";
    rotateRight.style.transform = "rotate(0deg)";
  } else {
    navbar.style.left = "0px";
    rotateRight.style.transform = "rotate(180deg)";
  }
}
