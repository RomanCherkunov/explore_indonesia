new Gallery(document.getElementById('gallery'), {
    margin: 10
})

/** Burger**/

const BODY = document.querySelector('body')
const modal = document.querySelector('.modal')
const MENU_OPENED_CLASS = 'burger-menu_opened'
const burgerNode = document.querySelector('.burger-menu')
const burgerControlNode = document.querySelector('.burger-menu__control')

burgerControlNode.addEventListener('click', (_e) => {
    if(modal.style.display === 'block') {
        modal.style.display = 'none'
        burgerControlNode.style.background = "url('../images/icons/burger-outlined.svg') no-repeat center center"
    } else {
        modal.style.display = 'block'
        burgerControlNode.style.background = "url('../images/icons/close.svg') no-repeat center center"
        console.log(burgerControlNode.style.background)
    }
    if(BODY.style.overflow === 'hidden') {
        BODY.style.overflow = 'auto'
    } else {
        BODY.style.overflow = 'hidden'
    }
    burgerNode.classList.toggle(MENU_OPENED_CLASS)
    modal.addEventListener('click', (e) => {
        modal.style.display = 'none'
        burgerNode.classList.remove(MENU_OPENED_CLASS)
        BODY.style.overflow = 'auto'
    })
})

/** Sticky header **/

const HEADER_SCROLLED_CLASS = 'header_scrolled'
const headerNode = document.querySelector('.header')
const stickyStartScroll = 10

window.addEventListener('scroll', () => {
    if(window.scrollY >= stickyStartScroll
        && !headerNode.classList.contains(HEADER_SCROLLED_CLASS)) {
            headerNode.classList.add(HEADER_SCROLLED_CLASS)
            burgerControlNode.style.top = '0.8rem'
    } else if(window.scrollY < stickyStartScroll
        && headerNode.classList.contains(HEADER_SCROLLED_CLASS)){
            headerNode.classList.remove(HEADER_SCROLLED_CLASS)
            burgerControlNode.style.top = '3rem'
    }
})

/** Scroll to **/


const scrollDownButton = document.getElementById('scroll-action')
const scrollToNode = document.getElementById('scroll-to')

let currentScroll = window.scrollY
let scrollAnimationId
console.log(currentScroll)

scrollDownButton.addEventListener('click', e => {

    stopAnimationScroll()

    currentScroll = window.scrollY
    startAnimationScroll(scrollToNode.offsetTop - 60)
})

function startAnimationScroll(newScrollY) {
    const deltaScroll = (newScrollY - currentScroll)

    currentScroll+= deltaScroll * 0.08
    window.scrollTo(0, currentScroll)

    if(Math.abs(deltaScroll) > 1) {
        scrollAnimationId = window.requestAnimationFrame(
            () => startAnimationScroll(newScrollY)
        )
    } else {
        window.scrollTo(0, newScrollY)
        stopAnimationScroll()
    }
}

function stopAnimationScroll() {
    window.cancelAnimationFrame(scrollAnimationId)
    scrollAnimationId = undefined
}