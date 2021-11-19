import { gsap, TextPlugin, ScrollTrigger } from "gsap/all";
const typetext = () => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);
    const headerTitle = document.querySelector('.headertop__title')
    // const bbb = document.querySelector('.about__item-title')
    gsap.to(headerTitle, {text: {value: "Forming a new <br> generation of leaders"}, duration: 2, delay: 0, ease: "none"})
    // gsap.to(bbb, {
    //     scrollTrigger: bbb,
    //         text: {value: "Explore Crestview"},
    //         duration: 3,
    //         delay: 0,
    //         ease: "none"
    // })
}
export default typetext