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
window.addEventListener('DOMContentLoaded', () => {
    hamburger()
    lazyLoad()
    typetext()
    slider()
    fixShake()
    fixed()
})