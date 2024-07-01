var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 25,
  centeredSlides: true,
  effect: "fade",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

document.getElementById("menu-button").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});

document
  .getElementById("menu-button-close")
  .addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.add("hidden");
  });
