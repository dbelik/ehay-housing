import gsap from "gsap";

function getElements(element) {
  return {
    arrow: element.children[0],
    itemsContainer: element.children[1],
    items: element.children[1].children[0],
  };
}

function showDropdown(timeline) {
  timeline.play();
}

function closeDropdown(timeline) {
  timeline.reverse();
}

function initTimeline(timeline, element) {
  const elements = getElements(element);
  timeline.to(elements.arrow, {
    rotate: 180,
    duration: 0.1,
  });

  timeline.to(elements.itemsContainer, {
    display: "flex",
    duration: 0,
  });
  timeline.to(elements.itemsContainer, {
    height: "auto",
    duration: 0.1,
  });
  timeline.to(elements.items, {
    opacity: 1,
    duration: 0.1,
  });
}

window.addEventListener("load", () => {
  const elements = document.getElementsByClassName("dropdown-navbar");
  Array.from(elements).forEach((dropdown) => {
    const timeline = gsap.timeline();
    timeline.pause();
    initTimeline(timeline, dropdown);

    dropdown.addEventListener("mouseenter", () => showDropdown(timeline));
    dropdown.addEventListener("mouseleave", () => closeDropdown(timeline));
    dropdown.addEventListener("focusin", () => showDropdown(timeline));
    dropdown.addEventListener("focusout", () => closeDropdown(timeline));
  });
});
