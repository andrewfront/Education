require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
import hamburger from './modules/hamburger'
import lazyLoad from './modules/lazyLoad'
import typetext from './modules/typetext'
window.addEventListener('DOMContentLoaded', () => {
    hamburger()
    lazyLoad()
    typetext()
})