import gsap from 'gsap'

function getElements(element) {
    return {
        arrow: element.children[0],
        itemsContainer: element.children[1],
        items: element.children[1].children[0]
    }
}

function showDropdown(element) {
    console.log('here')
    const elements = getElements(element);

    gsap.to(elements.arrow, {
        rotate: 180,
        duration: .2
    });
    
    gsap.to(elements.itemsContainer, {
        display: 'flex',
        duration: 0,
    });
    gsap.to(elements.itemsContainer, {
        height: "auto",
        duration: .2
    });
    gsap.to(elements.items, {
        paddingTop: "30px",
        paddingBottom: "30px",
        duration: .2
    });
    gsap.to(elements.items, {
        opacity: 1,
        duration: .2,
        delay: .2
    });
}

function closeDropdown(element) {
    const elements = getElements(element);
    
    gsap.to(elements.items, {
        opacity: 0,
        duration: .2,
    });
    gsap.to(elements.itemsContainer, {
        height: "0",
        duration: .2,
        paddingTop: "0",
        paddingBottom: "0",
        delay: .2
    });
    gsap.to(elements.itemsContainer, {
        display: 'none',
        duration: 0,
        delay: .4
    });
    gsap.to(elements.arrow, {
        rotate: 0,
        duration: .2,
        delay: .4
    });
}

window.addEventListener('load', () => {
    const elements = document.getElementsByClassName('dropdown-navbar');
    Array.from(elements).forEach((dropdown) => {
        dropdown.addEventListener('mouseenter', () => showDropdown(dropdown));
        dropdown.addEventListener('mouseleave', () => closeDropdown(dropdown));
        dropdown.addEventListener('focusin', () => showDropdown(dropdown));
        dropdown.addEventListener('focusout', () => closeDropdown(dropdown));
    })
})