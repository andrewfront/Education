const hamburger = () => {
const hamburgeIcon = document.querySelector('.menu-toggle')
const navBar = document.querySelector('nav')
hamburgeIcon.addEventListener('click', () => {
    hamburgeIcon.classList.toggle('active')
    if (hamburgeIcon.classList.contains('active')) {
        navBar.classList.add('show')
        document.body.style.overflow = 'hidden'
    } else {
        navBar.classList.remove('show')
        document.body.style.overflow = ''
    }
})
}
export default hamburger