const fixShake = () => {
    const boxImages = document.querySelectorAll('img[data-src]')
    function fixPadding() {
        let paddingOffset = window.innerWidth - document.body.offsetWidth + `px`
        const instSlide = document.querySelectorAll('.instagram__slide')
        instSlide.forEach(slide => {
            slide.addEventListener('click', () => {
                document.body.style.marginRight = paddingOffset
            })
        })
    }
    fixPadding()
}
export default fixShake