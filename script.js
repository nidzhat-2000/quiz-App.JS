'use strict';

const timer = document.querySelector('.timer');
const questionTab = document.querySelector('.question');
const answers = document.querySelector('.answers');
const answerTab = document.querySelectorAll('.answer');
const restart = document.querySelector('.restart');
const endGame = document.querySelector('.result');
const app = document.querySelector('.app');
const countedCorrect = document.querySelector('.correct');
const percentageTab = document.querySelector('.percentage');
const answer1 = document.querySelector('.first');
const answer2 = document.querySelector('.second');
const answer3 = document.querySelector('.third');
const answer4 = document.querySelector('.fourth');
const allAnswers = [answer1, answer2, answer3, answer4];

/*
answerTab.forEach(el =>
  el.addEventListener('click', e => console.log(e.target.innerHTML))
);
*/

/*
/////////////////////////////////////////////////////////
// Timer Function ⤵
timer.innerHTML = '00:30';
let time = 2;

const timerFun = () => {
  const bunedia = setInterval(() => {
    timer.innerHTML = `00:${String(time).padStart(2, '0')}`;

    // console.log(time);
    if (time === 0) {
      clearInterval(bunedia);
      app.classList.add('blur');
      // endGame.style.opacity = '1';
    }
    time--;
  }, 1000);
};
timerFun();
*/

function pick(n, min, max) {
  var values = [],
    i = max;
  while (i >= min) values.push(i--);
  // console.log(values);
  var results = [];
  var maxIndex = max;
  for (i = 1; i <= n; i++) {
    maxIndex--;
    var index = Math.floor(maxIndex * Math.random());
    // console.log(index);
    results.push(values[index]);
    values[index] = values[maxIndex];
  }
  return results;
}

const randomNums = pick(15, 0, 15);
// console.log(randomNums);
const randomAns = pick(4, 0, 4);
console.log(randomAns);

let place = 0;
let result = 0;
let correct;

const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const numofQues = document.querySelector('.numOfQues');

// increase.addEventListener('click', () => {
//   if (numofQues.value >= 15) return;
//   else {
//     numofQues.value++;
//     const randomNums = numofQues.value;
//     console.log(randomNums);
//     console.log(pick(randomNums, 0, 15));
//   }
// });

// decrease.addEventListener('click', () => {
//   if (numofQues.value <= 0) return;
//   else {
//     numofQues.value--;
//     const randomNums = numofQues.value;
//     console.log(randomNums);
//     console.log(pick(randomNums, 0, 15));
//   }
// });

const fetchQuestion = async () => {
  const response = await fetch('./data.json');
  const data = await response.json();
  // Fetch Part ⤴

  // Finish game ⤵
  if (place == randomNums.length) {
    app.style.visibility = 'hidden';
    setTimeout(() => (endGame.style.visibility = 'visible'), 1000);
    return;
  }
  console.log(randomNums);
  // console.log(randomNums[place]);
  // console.log(randomAns[0]);
  // console.log(randomAns[1]);
  // console.log(randomAns[2]);
  // console.log(randomAns[3]);

  const question = data.datas[`${randomNums[place]}`].question;
  const first = data.datas[`${randomNums[place]}`].answers[`${randomAns[0]}`];
  const second = data.datas[`${randomNums[place]}`].answers[`${randomAns[1]}`];
  const third = data.datas[`${randomNums[place]}`].answers[`${randomAns[2]}`];
  const fourth = data.datas[`${randomNums[place]}`].answers[`${randomAns[3]}`];
  correct =
    data.datas[`${randomNums[place]}`].answers[
      data.datas[`${randomNums[place]}`].correctAns
    ];
  // console.log(correct);

  questionTab.innerHTML = question;
  answer1.innerHTML = first;
  answer2.innerHTML = second;
  answer3.innerHTML = third;
  answer4.innerHTML = fourth;

  place++;
  // console.log(place);
};
fetchQuestion();

answerTab.forEach(ab =>
  ab.addEventListener('click', e => {
    if (ab.innerHTML == correct) {
      result++;
      // console.log(result);

      /////////////////////////////
      // Result indicator ⤵

      // CorrectAns indicator ⤵
      countedCorrect.innerHTML = result;

      // Percentage Indicator ⤵
      const percentage = (result / 15) * 100;
      percentageTab.innerHTML = `Success ${
        !String(percentage).endsWith('0') ? percentage.toFixed(1) : percentage
      }%`;

      questionDelayer();
    } else {
      questionDelayer();
    }
  })
);

const questionDelayer = () => {
  setTimeout(() => {
    fetchQuestion();
    // timerFun();
  }, 500);
};

// Restart game ⤵
restart.addEventListener('click', e => window.location.reload());

// Start Game ⤵
const startGame = document.querySelector('.start');
const welcomeTab = document.querySelector('.welcome');

const starterGame = () => {
  welcomeTab.style.visibility = 'hidden';
  setTimeout(() => {
    app.style.opacity = 1;
  }, 500);
};

startGame.addEventListener('click', starterGame);
