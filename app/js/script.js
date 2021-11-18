require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
import hamburger from './modules/hamburger'
import lazyLoad from './modules/lazyLoad'
import typetext from './modules/typetext'
import Swiper, { Navigation} from 'swiper';
Swiper.use([Navigation]);
import slider from './modules/slider'
window.addEventListener('DOMContentLoaded', () => {
    hamburger()
    lazyLoad()
    typetext()
    slider()
})