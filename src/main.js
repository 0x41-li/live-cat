//

import anime from "animejs";

// CSS
import "./index.css";

window.addEventListener("load", () => {
  // Removed the loader and show the website
  document.getElementById("app").style.removeProperty("display");
  document.getElementById("loader").classList.add("hidden");

  // Animations
  // -- Header
  const headerItems = document.querySelectorAll(".header-item");
  anime({
    targets: headerItems,
    translateY: [-200, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeInOutQuad",
    delay: anime.stagger(200),
    changeComplete: (anim) => {
      anim.animatables.forEach((element) => {
        element.target.classList.add("transition-all");
        element.target.classList.add("duration-300");
      });
    },
  });

  // -- Hero
  const heroSpans = document.querySelectorAll(".hero-spans-parent span");
  const heroSpans2 = document.querySelectorAll(".hero-spans-parent-2 span");
  const twitchLiveContainer = document.querySelector("#twitch-live-container");

  anime({
    targets: heroSpans,
    opacity: [0, 1],
    scale: [0, 1, 1.5, 1],
    duration: 1000,
    delay: anime.stagger(100, { start: 1000 }),
    easing: "easeInOutQuad",
  });

  anime({
    targets: heroSpans2,
    opacity: [0, 1],
    scale: [0, 1, 1.5, 1],
    duration: 1000,
    delay: anime.stagger(100, { start: 1000 }),
    easing: "easeInOutQuad",
  });

  anime({
    targets: twitchLiveContainer,
    translateY: [200, 0],
    opacity: [0, 1],
    duration: 2000,
    delay: 3000,
    easing: "easeInOutQuad",
    delay: anime.stagger(200, { start: 1000 }),
  });

  anime({
    targets: ".hero-img",
    translateY: [200, 0],
    opacity: [0, 1],
    duration: 2000,
    delay: 3000,
    easing: "easeInOutQuad",
  });

  // second section
  const secondSectionItems = document.querySelectorAll(".second-section-item");
  const secondSectionAnimation = anime({
    targets: secondSectionItems,
    translateY: [-100, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeInOutQuad",
    autoplay: false,
  });

  window.addEventListener("scroll", () => {
    secondSectionItems.forEach((item) => {
      const itemRect = item.getBoundingClientRect(); // Get the position of the element
      const scrollPercent = window.scrollY - (itemRect.top - 400);

      secondSectionAnimation.seek(
        (scrollPercent / 1000) * secondSectionAnimation.duration
      );
    });
  });
});

const options = {
  channel: "livecatsol",
  width: "100%",
  height: "100%",
};

const player = new Twitch.Player("twitch-live", options);
