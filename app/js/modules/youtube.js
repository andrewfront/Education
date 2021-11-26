const youtube = () => {
    const parentBtnsContainer = document.querySelector('.tabs__btns')
    const videoBtns = document.querySelectorAll('.tabs__btn')
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;

// function getDataUrl() {
//     parentBtnsContainer.addEventListener('click', (e) => {
//         let target = e.target
//         if (target.classList.contains('tabs__btn')) {
//             for (let i = 0; i < videoBtns.length; i++) {
//                 videoBtns[i].classList.remove('focus')
//             }
//             target.classList.add('focus')
//         }
//         let path = target.getAttribute('data-url')
//         onYouTubeIframeAPIReady(path)
//     })
// }
// getDataUrl()
}
export default youtube