import gsap from 'gsap'

function getElements(element) {
    return {
        arrow: element.children[0],
        itemsContainer: element.children[1],
        items: element.children[1].children[0]
    }
}

function showDropdown(element, timelineStop, timelineShow) {
    timelineStop.pause();
    timelineStop.clear();
    timelineShow.play();

    const elements = getElements(element);

    timelineShow.to(elements.arrow, {
        rotate: 180,
        duration: .2
    });
    
    timelineShow.to(elements.itemsContainer, {
        display: 'flex',
        duration: 0,
    });
    timelineShow.to(elements.itemsContainer, {
        height: "auto",
        duration: .2
    });
    timelineShow.to(elements.items, {
        opacity: 1,
        duration: .2,
    });
}

function closeDropdown(element, timelineStop, timelineShow) {
    timelineShow.pause();
    timelineShow.clear();
    timelineStop.play();

    const elements = getElements(element);
    
    timelineStop.to(elements.items, {
        opacity: 0,
        duration: .2,
    });
    timelineStop.to(elements.itemsContainer, {
        height: "0",
        duration: .2,
        paddingTop: "0",
        paddingBottom: "0",
    });
    timelineStop.to(elements.itemsContainer, {
        display: 'none',
        duration: 0,
    });
    timelineStop.to(elements.arrow, {
        rotate: 0,
        duration: .2,
    });
}

window.addEventListener('load', () => {
    const elements = document.getElementsByClassName('dropdown-navbar');
    Array.from(elements).forEach((dropdown) => {
        const timelineStop = gsap.timeline();
        const timelineShow = gsap.timeline();

        dropdown.addEventListener('mouseenter', () => showDropdown(dropdown, timelineStop, timelineShow));
        dropdown.addEventListener('mouseleave', () => closeDropdown(dropdown, timelineStop, timelineShow));
        dropdown.addEventListener('focusin', () => showDropdown(dropdown, timelineStop, timelineShow));
        dropdown.addEventListener('focusout', () => closeDropdown(dropdown, timelineStop, timelineShow));
    })
})