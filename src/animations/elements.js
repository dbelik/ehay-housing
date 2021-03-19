import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { foreach } from "./utils";

gsap.registerPlugin(ScrollTrigger);

function animateElementsFromBottom(element) {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
    },
    y: 30,
    autoAlpha: 0,
    duration: 0.5,
    stagger: 0.25,
  });
}

function animateElementsFromLeft(element) {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
    },
    x: -30,
    autoAlpha: 0,
    duration: 0.5,
    stagger: 0.25,
  });
}

function animateElementsFromRight(element) {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
    },
    x: 30,
    autoAlpha: 0,
    duration: 0.5,
    stagger: 0.25,
  });
}

window.addEventListener("load", () => {
  foreach("animation-from-bottom", animateElementsFromBottom);
  foreach("animation-from-left", animateElementsFromLeft);
  foreach("animation-from-right", animateElementsFromRight);
});
