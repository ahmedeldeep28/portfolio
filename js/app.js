let nav_bar = document.querySelector(".navbar");



window.onscroll = () => {
    if(window.scrollY > 100){
        nav_bar.classList.add("active")
    }else{
        nav_bar.classList.remove("active")
    }
};

//swiper slider (testimonial)
var swiper = new Swiper('.testimonial .swiper-container', {
    effect: 'cards',
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
});
var swiper2 = new Swiper(".mySwiper2", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
      },
    },
  }); 

// change theme

let btn_chnage = document.getElementById("custom-switch");
let icon_them = document.getElementById("icon_them");
let body_site = document.getElementById("body");

const switchTheme = () => {
    body_site.classList.add(localStorage.getItem("theme"));

    if(window.scrollY > 100){
        nav_bar.classList.add("active")
    }else{
        nav_bar.classList.remove("active")
    }

    if (localStorage.getItem("theme") === "light") {
        icon_them.classList.remove("fa-sun");
        icon_them.classList.add("fa-moon");

    } else {
        icon_them.classList.add("fa-sun");
        icon_them.classList.remove("fa-moon");
    }
    
}
switchTheme();

btn_chnage.addEventListener("click", () => {
    if (body_site.classList.contains("light")) {

        body_site.classList.toggle("dark");
        body_site.classList.toggle("light");
        localStorage.setItem("theme", "dark");
        
        icon_them.classList.add("fa-sun");
        icon_them.classList.remove("fa-moon");

    } else {
        body_site.classList.toggle("light");
        body_site.classList.toggle("dark");
        localStorage.setItem("theme", "light");
        icon_them.classList.remove("fa-sun");
        icon_them.classList.add("fa-moon");
    }
});



