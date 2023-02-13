import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
    'timeupdate',
    throttle(data => {
        localStorage.setItem('videoplayer-current-time', data.seconds);
    }, 1000)
);

if (localStorage.getItem('videoplayer-current-time') !== null) {
    player
        .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
        .catch(function (error) {
            console.error(error);
        });
}

// player.setCurrentTime(localStorage.getitem('videoplayer-current-time')|| 0).catch(function (error) {
//   console.error(error);
// });
