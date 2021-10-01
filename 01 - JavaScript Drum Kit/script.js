const keydiv = document.querySelector('.keys');
const key = document.querySelectorAll('.key');
const audio = document.querySelectorAll('audio');

//console.log(audio[data-key === '65']);

// for(c of k){
//     console.log(c.dataset.key);
// }

function audioPlay(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const crrkey = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio){
        return;
    }
    audio.play();
    // for(const k in key){
    //     if(k.keyCode===e.keyCode){
    //         audio.play();
    //     }
    // }
}

function transition(e) {
    if(e.propertyName !== 'transition'){
        return;
    }
    e.target.classList.remove('playing');
}

document.addEventListener('keydown', e => {


    //console.log(e.key, e.keyCode);
    Array.from(key).forEach(k => k.addEventListener('transitionend', transition));
    audioPlay(e);
    //console.log(keydiv.data.key);

});