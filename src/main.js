//
import AOS from "aos";

// CSS
import "aos/dist/aos.css";
import "./index.css";

AOS.init();

const options = {
  channel: "livecatsol",
  width: "100%",
  height: "100%",
};

const player = new Twitch.Player("twitch-live", options);
