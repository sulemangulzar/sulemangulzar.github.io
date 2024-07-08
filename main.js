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

document.addEventListener("DOMContentLoaded", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "projects.json", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      var projects = JSON.parse(this.responseText).projects;
      var swiperWrapper = document.getElementById("projects");
      projects.forEach(function (project) {
        var slide = document.createElement("div");
        slide.className =
          "swiper-slide max-w-[350px] h-[420px] bg-gray-50 flex flex-col items-start rounded-md gap-2 shadow-lg overflow-hidden";
        slide.innerHTML = `
            <img
              class="w-full h-[200px] hover:animate-pulse"
              src="${project.img}"
              alt="${project.Name}"
            />
            <div class="px-2 my-4 flex flex-col items-start gap-2">
              <h1 class="text-xl font-medium">${project.Name}</h1>
              <p>${project.caption}</p>
              <button class="px-2 py-2 text-md text-white bg-black rounded-md mt-2">
                Explore More
              </button>
            </div>
          `;
        swiperWrapper.appendChild(slide);
      });

      var swiper = new Swiper(".mySwiper", {
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
        breakpoints: {
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
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
    } else if (this.status === 404) {
      document.getElementById("swiper-wrapper").innerHTML =
        "Projects not found";
    }
  };
  xhr.send();
});
