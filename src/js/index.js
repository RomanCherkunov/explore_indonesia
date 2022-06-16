new Gallery(document.getElementById('gallery'), {
    margin: 10
})

/** Burger**/

const BODY = document.querySelector('body')
const modal = document.querySelector('.modal')
const modal_active = document.querySelector('.modal_active')
const MENU_OPENED_CLASS = 'burger-menu_opened'
const burgerNode = document.querySelector('.burger-menu')
const burgerControlNode = document.querySelector('.burger-menu__control')
console.log(BODY)

burgerControlNode.addEventListener('click', (_e) => {
    if(modal.style.display === 'block') {
        modal.style.display = 'none'
    } else {
        modal.style.display = 'block'
    }
    if(BODY.style.overflow === 'hidden') {
        BODY.style.overflow = 'auto'
    } else {
        BODY.style.overflow = 'hidden'
    }
    burgerNode.classList.toggle(MENU_OPENED_CLASS)
    // BODY.classList.toggle('body_burger-opened')
    modal.addEventListener('click', (e) => {
        modal.style.display = 'none'
        burgerNode.classList.remove(MENU_OPENED_CLASS)
        BODY.style.overflow = 'auto'
        console.log('fsfsfsfsfsf')
    })
    // burgerNode.classList.toggle(MENU_OPENED_CLASS)
    // BODY.classList.toggle('body_burger-opened')
    // modal.classList.remove('modal')
    // modal.classList.add('modal_active')
})
