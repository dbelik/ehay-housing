import gsap from "gsap";

let navActive = false;

function getElements() {
  const button = document.getElementById("navbar-button");
  return {
    button: button,
    buttonLine1: button.children[0].children[0],
    buttonLine2: button.children[0].children[1],
    buttonLine3: button.children[0].children[2],
    items: document.getElementById("navbar-items"),
  };
}

function initTimeline(timeline) {
  const elements = getElements();

  // Button timeline
  timeline.to(elements.buttonLine1, {
    translateY: "10px",
    duration: 0.1,
  });
  timeline.to(
    elements.buttonLine3,
    {
      translateY: "-10px",
      duration: 0.1,
    },
    "-=.1"
  );
  timeline.to(elements.buttonLine2, {
    opacity: 0,
    duration: 0,
  });

  timeline.to(elements.buttonLine1, {
    rotation: 45,
    transformOrigin: "center center",
    duration: 0.1,
  });
  timeline.to(
    elements.buttonLine3,
    {
      rotation: -45,
      transformOrigin: "center center",
      duration: 0.1,
    },
    "-=.1"
  );

  // Items timeline
  timeline.to(elements.items, {
    maxHeight: "100%",
  });

  Array.from(elements.items.children)
    .filter((item) => item.children[0].tagName === "A")
    .forEach((item) => {
      timeline.to(item, {
        opacity: 1,
        duration: 0.1,
      });
    });
}

function showMobileNavbar(timeline) {
  timeline.play();
}

function hideMobileNavbar(timeline) {
  timeline.reverse();
}

function toggleMobileNavbar(timeline) {
  navActive = !navActive;
  if (navActive) showMobileNavbar(timeline);
  else hideMobileNavbar(timeline);
}

window.addEventListener("load", () => {
  const timeline = gsap.timeline();
  initTimeline(timeline);
  timeline.pause();

  const button = document.getElementById("navbar-button");
  button.addEventListener("click", () => toggleMobileNavbar(timeline));
});
