const counter = () => {
    const counterContainer = document.querySelector('.counter')
    const counters = document.querySelectorAll('.number')
    let a = 0
    if (counterContainer && counters) {
        window.addEventListener('scroll', () => {
            const containerElementToViewport = counterContainer.getBoundingClientRect().top
            const {scrollTop, clientHeight} = document.documentElement
            if (a == 0 && scrollTop > (scrollTop + containerElementToViewport).toFixed() - clientHeight * 0.5) {
            counters.forEach(counter => {
                counter.innerText = '0'
                function updateCounter() {
                    const target = +counter.getAttribute('data-target')
                    const c = +counter.innerText
                    const increment = target / 200
                    if (c < target) {
                        counter.innerText = `${Math.ceil(c + increment)}`
                        setTimeout(updateCounter, 1)
                    } else {
                        counter.innerText = target
                    }
                }
                updateCounter()
                a = 1
            })
        }
            })
    }
}
export default counter