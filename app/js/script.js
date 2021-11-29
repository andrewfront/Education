require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
require('fslightbox');
import hamburger from './modules/hamburger'
import lazyLoad from './modules/lazyLoad'
import typetext from './modules/typetext'
import Swiper, { Navigation, Autoplay} from 'swiper';
Swiper.use([Navigation, Autoplay]);
import slider from './modules/slider'
import fixShake from './modules/fixShake'
import fixed from './modules/fixed'
import AOS from '../../node_modules/aos/dist/aos'
import Videoplayer from './modules/youtube'
import counter from './modules/counter'
window.addEventListener('DOMContentLoaded', () => {
    hamburger()
    lazyLoad()
    typetext()
    slider()
    fixShake()
    fixed()
    AOS.init()
    AOS.refresh()
    const player = new Videoplayer('.tabs__btn', '.tabs__frame')
    player.init()
    counter()
})