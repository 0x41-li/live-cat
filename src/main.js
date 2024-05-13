//
import AOS from "aos";

// CSS
import "aos/dist/aos.css";
import "./index.css";

AOS.init({
  once: true,
  startEvent: "load",
  easing: "ease-in-out",
});
