const clock = document.querySelector("#clock");

function showClock() {
    const time = new Date();
    const hour = time.getHours().toString();
    const minute = time.getMinutes().toString();
    const seconds = time.getSeconds().toString();
    clock.innerHTML = `${hour.padStart(2, '0')} : ${minute.padStart(2, '0')} : ${seconds.padStart(2, '0')} ⏲`;
}

showClock();

setInterval(showClock, 1000);