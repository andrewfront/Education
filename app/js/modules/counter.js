const counter = () => {
    window.addEventListener('scroll', () => {

    })
    const numberBlock = document.querySelector('.counter__inner')
    function getCoords(block) {
        let box = block.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
    getCoords(numberBlock);
    console.log(getCoords(numberBlock));
    const counters = document.querySelectorAll('.number')
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
    })
}
export default counter