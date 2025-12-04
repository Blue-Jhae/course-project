const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hrHand = document.querySelector('.hr-hand');

function setClockFace(){
    const now = new Date();

    const sec = now.getSeconds();
    const secDeg = (sec / 60) * 360 + 90;

    if (sec === 0) {
        secHand.classList.add('no-transition');
    } else {
        secHand.classList.remove('no-transition');
    }
    secHand.style.transform = `rotate(${secDeg}deg)`;

    const min = now.getMinutes();
    const minDeg = (min / 60) * 360 + 90;

    if (min === 0 && sec === 0) {
        minHand.classList.add('no-transition');
    } else {
        minHand.classList.remove('no-transition');
    }
    minHand.style.transform = `rotate(${minDeg}deg)`;

    const hr = now.getHours();
    const hrDeg = ((hr % 12) / 12) * 360 + (min / 60) * 30 + 90;

    if (hr % 12 === 0 && min === 0 && sec === 0) {
        hrHand.classList.add('no-transition');
    } else {
        hrHand.classList.remove('no-transition');
    }
    hrHand.style.transform = `rotate(${hrDeg}deg)`;

    var time = padTwo(hr) + ":" + padTwo(min) + ":" + padTwo(sec);
    const digitalClockTime = document.querySelector('.time')
    digitalClockTime.innerHTML = time;
}

function padTwo(number) {
    return (number <10 ? '0' : '') + number;
}

setInterval(setClockFace, 1000);