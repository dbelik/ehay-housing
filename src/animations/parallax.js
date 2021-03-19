import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { foreach } from "./utils";

gsap.registerPlugin(ScrollTrigger);

function animateParallax(element, speed) {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  timeline.to(element, {
    backgroundPositionY: speed,
  });
}

window.addEventListener("load", () => {
  foreach("parallax-bg-sm", (element) => animateParallax(element, "70px"));
  foreach("parallax-bg-md", (element) => animateParallax(element, "200px"));
});
