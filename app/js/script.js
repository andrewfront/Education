require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
require('fslightbox');
import hamburger from './modules/hamburger'
import lazyLoad from './modules/lazyLoad'
import typetext from './modules/typetext'
import Swiper, { Navigation} from 'swiper';
Swiper.use([Navigation]);
import slider from './modules/slider'
import fixShake from './modules/fixShake'
import fixed from './modules/fixed'
import AOS from '../../node_modules/aos/dist/aos'
import youtube from './modules/youtube'
window.addEventListener('DOMContentLoaded', () => {
    hamburger()
    lazyLoad()
    typetext()
    slider()
    fixShake()
    fixed()
    AOS.init()
    AOS.refresh()
    youtube()
})