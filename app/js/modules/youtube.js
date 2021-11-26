export default class Videoplayer {
    constructor(triggers, overlay) {
        this.btns = document.querySelectorAll(triggers)
        this.overlay = document.querySelector(overlay)
    }
    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (document.querySelector('iframe#frame')) {
                    if (this.path !== btn.getAttribute('data-url')) {
                        this.path = btn.getAttribute('data-url');
                        this.player.loadVideoById({videoId: this.path});
                    }
                } else {
                    this.path = btn.getAttribute('data-url');
                    this.createPlayer(this.path);
                }
            })
        })
    }
    createPlayer(url) {
        this.player = new YT.Player('frame', {
            videoId: `${url}`,
            // events: {
            //     'onReady': onPlayerReady,
            //     'onStateChange': onPlayerStateChange
            // }
        });
    }
    init() {
        if (this.btns.length > 0) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        this.bindTriggers()
        }
    }
}