import { gsap, TextPlugin } from "gsap/all";
const typetext = () => {
    gsap.registerPlugin(TextPlugin);
    const headerTitle = document.querySelector('.headertop__title')
    let tween = gsap.to(headerTitle, {text: {value: "Forming a new <br> generation of leaders"}, duration: 2, delay: 0, ease: "none"})
}
export default typetext