// Nav
document.querySelector(".mobile-nav").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#myNav").style.height = "100%";

  // Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
      document.querySelector("#myNav").style.height = "0%";
    });
  });
});

document.querySelector("#close").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#myNav").style.height = "0%";
});

//Gallery Horizontal Scroll

const horizontalScroll = document.querySelector(".horizontal-section");
const imgArray = gsap.utils.toArray(".element-wrapper img");

let scrollTween = gsap.to(imgArray, {
  xPercent: -68 * (imgArray.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: horizontalScroll,
    pin: true,
    scrub: 1,
    end: "+=3000",
  },
});
