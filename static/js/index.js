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
    modal.addEventListener('click', (e) => {
        modal.classList.remove('modal_active')
        console.log('fsfsfsfsfsf')
    })
    burgerNode.classList.toggle(MENU_OPENED_CLASS)
    BODY.classList.toggle('body_burger-opened')
    modal.classList.remove('modal')
    modal.classList.add('modal_active')
})

// document.addEventListener('click', (e) => {
//     // e.stopPropagation()
//     // console.log(e.target)
//     if(burgerNode.classList.contains(MENU_OPENED_CLASS)) {
//         burgerNode.classList.toggle(MENU_OPENED_CLASS)
//         console.log('sfsdfdsfsdf')
//     }
// })