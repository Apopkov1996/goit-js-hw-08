import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const key = "videoplayer-current-time";
const player = new Player(iframeEl)

const onPlay = function (e) {
    localStorage.setItem(key, e.seconds)
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(key));
