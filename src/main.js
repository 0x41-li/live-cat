//

import animejs from "animejs";

// CSS
import "./index.css";

window.addEventListener("load", () => {
  // Removed the loader and show the website
  document.getElementById("app").style.removeProperty("display");
  document.getElementById("loader").classList.add("hidden");

  // Animations
  // -- Header
  const headerItems = document.querySelectorAll(".header-item");
  animejs({
    targets: headerItems,
    translateY: [-200, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeInOutQuad",
    delay: animejs.stagger(200),
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

  animejs({
    targets: heroSpans,
    opacity: [0, 1],
    scale: [0, 1, 1.5, 1],
    duration: 1000,
    delay: animejs.stagger(100, { start: 1000 }),
    easing: "easeInOutQuad",
  });

  animejs({
    targets: heroSpans2,
    opacity: [0, 1],
    scale: [0, 1, 1.5, 1],
    duration: 1000,
    delay: animejs.stagger(100, { start: 1000 }),
    easing: "easeInOutQuad",
  });

  animejs({
    targets: twitchLiveContainer,
    translateY: [200, 0],
    opacity: [0, 1],
    duration: 2000,
    delay: 3000,
    easing: "easeInOutQuad",
    delay: animejs.stagger(200, { start: 1000 }),
  });
});

const options = {
  channel: "livecatsol",
  width: "100%",
  height: "100%",
};

const player = new Twitch.Player("twitch-live", options);
