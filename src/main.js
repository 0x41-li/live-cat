//
import AOS from "aos";

// CSS
import "aos/dist/aos.css";
import "./index.css";

window.addEventListener("load", () => {
  AOS.init();
  document.getElementById("app").style.removeProperty("display");
  document.getElementById("loader").classList.add("hidden");
});

const options = {
  channel: "livecatsol",
  width: "100%",
  height: "100%",
};

const player = new Twitch.Player("twitch-live", options);
