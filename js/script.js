
const startButton = document.getElementsByClassName('start')[0];
const lapButton =  document.getElementsByClassName("lap")[0];
const resetButton = document.getElementsByClassName('reset' )[0];   
const second = document.getElementsByClassName('sec')[0];
const msecond = document.getElementsByClassName('msec')[0];
const minute = document.getElementsByClassName('min')[0];
const laps = document.getElementsByClassName('laps')[0];
const clearLaps = document.getElementsByClassName('clear-laps')[0];
const bg = document.getElementsByClassName('outer-circle')[0];


let isPlay = false;
let isReset = false;
let secCount = 0;
let msecCount = 0;
let minCount = 0;
let sec;
let min;
let msec;
let itemNum = 0;

const toggleButton = () => {
    lapButton.classList.remove('hidden');
    resetButton.classList.remove('hidden');
}


const start = () => { 
    if (!isPlay && !isReset) {
     startButton.innerHTML = 'stop';
     bg.classList.add('animation-bg');

     min =setInterval(() => {
        if (minCount === 60) {
            minCount = 0;
        }
        minute.innerHTML =`${++minCountCount} :`;
    },1000 * 60);

      sec =setInterval(() => {
         if (secCount === 60) {
            secCount = 0;
         }
         second.innerHTML = `&nbsp;${++secCount} .`;
          
      },1000);

      msec =setInterval(() => { 
        if (msecCount === 100) {
            msecCount = 0;
        }
        msecond.innerHTML =`&nbsp;${++msecCount} `;
    },10);



     isPlay = true;
     isReset = true;
    } else {
     startButton.innerHTML = 'Start';
     bg.classList.remove('animation-bg');
     clearInterval(sec);
     clearInterval(msec);
     clearInterval(min);
     isPlay = false;
     isReset = false;
    }
 
     toggleButton();
   }
const reset = ( )  => {
    isPlay = true;
    start();
    clear();
    lapButton.classList.add('hidden');
    resetButton.classList.add('hidden');
   
    minute.innerHTML = '0 : ';
    second.innerHTML = '&nbsp;0 .';
    msecond.innerHTML = '&nbsp;0';
    secCount = 0;
    msecCount = 0;
    minCount = 0;
    

}
const lap = () => {
const li = document.createElement('li');
const number = document.createElement('span')
const timestamp = document.createElement('span')

li.setAttribute('class','lap-items');
number.setAttribute('class', 'lap-number');
timestamp.setAttribute('class', 'lap-time');

number.innerHTML = `${++itemNum} .`;
timestamp.innerHTML = `${minCount} : ${secCount} : ${msecCount}`;
li.append(number, timestamp);   
laps.append(li);
clearLaps.classList.remove('hidden');

}

const clear = () => {
    laps.innerHTML = '';

    itemNum = 0;

    clearLaps.classList.add('hidden');
}

startButton.addEventListener('click', start);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', lap);
clearLaps.addEventListener('click', clear);