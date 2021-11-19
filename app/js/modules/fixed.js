const fixed = () => {
    window.addEventListener('scroll', () => {
        const navBar = document.querySelector('#header')
        const scrollHeight = window.pageYOffset
        if (scrollHeight > 500) {
            navBar.classList.add('fixed')
        } else {

            navBar.classList.remove('fixed')
        }
    })
}
export default fixed