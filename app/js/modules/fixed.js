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
    function scrollToTop() {
        const headerLogo = document.querySelectorAll('.header__logo')
        return function () {
            headerLogo.forEach(logo => {
                logo.addEventListener('click', (e) => {
                    e.preventDefault()
                    window.scrollTo({
                        top: (0, 0),
                        behavior: 'smooth'
                    })
                })
            })
        }

    }
    let scrollheader = scrollToTop()
    scrollheader()
}
export default fixed