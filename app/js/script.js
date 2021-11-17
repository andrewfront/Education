require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
import hamburger from './modules/hamburger'
import lazyLoad from './modules/lazyLoad'
window.addEventListener('DOMContentLoaded', () => {
    hamburger()
    lazyLoad()
})