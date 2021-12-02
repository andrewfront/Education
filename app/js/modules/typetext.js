import { gsap, TextPlugin, ScrollTrigger, TweenMax } from "gsap/all";
const typetext = () => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);
    const headerTitle = document.querySelector('.headertop__title')
    if (headerTitle) {
        gsap.to(headerTitle, {text: {value: "Forming a new <br> generation of leaders"}, duration: 2, delay: 0, ease: "none"})
    }
    const text = document.querySelectorAll('.animation__title')
    for (let i = 0; i < text.length; i++) {
        const splitText = (el) => {
            el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
          return `<span class="word">` +
                    m.replace(/(-|#|@)?\S(-|#|@)?/g, "<span class='letter'>$&</span>") +
                    `</span>`;
            });
            return el;
        };
        const split = splitText(text[i]);
        function random(min, max){
        return (Math.random() * (max - min)) + min;
}
Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
	TweenMax.from(el, 2.5, {
		opacity: 0,
		scale: .1,
		x: random(-500, 500),
		y: random(-500, 500),
		z: random(-500, 500),
		delay: idx * 0.02,
		repeat: 0,
	})
});
    }

}
export default typetext