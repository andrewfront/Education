const hamburger = () => {
const hamburgeIcon = document.querySelector('.hambergerIcon')
const navBar = document.querySelector('nav')
hamburgeIcon.addEventListener('click', () => {
    hamburgeIcon.classList.toggle('open')
    if (hamburgeIcon.classList.contains('open')) {
        navBar.classList.add('active')
        document.body.style.overflow = 'hidden'
    } else {
        navBar.classList.remove('active')
        document.body.style.overflow = ''
    }
})
}
export default hamburger