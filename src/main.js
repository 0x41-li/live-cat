//
import AOS from "aos";

// CSS
import "aos/dist/aos.css";
import "./index.css";

AOS.init({
  startEvent: "load",
  easing: "ease-in-out",
});

var options = {
  channel: "livecatsol",
  width: "100%",
  height: "100%",
};
var player = new Twitch.Player("twitch-live", options);
player.setVolume(0.5);
