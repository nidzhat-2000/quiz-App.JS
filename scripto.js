'use strict';

////////////////////////////////////////////////////////////////
// Elements ⤵
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
const startGame = document.querySelector('.start');
const welcomeTab = document.querySelector('.welcome');
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const numofQues = document.querySelector('.numOfQues');
const sualSay = document.querySelector('.sualSay');

////////////////////////////////////////////////////////////////
// Array Random Maker ⤵
function pick(n, min, max) {
  var values = [],
    i = max;
  while (i >= min) values.push(i--);
  var results = [];
  var maxIndex = max;
  for (i = 1; i <= n; i++) {
    maxIndex--;
    var index = Math.floor(maxIndex * Math.random());
    results.push(values[index]);
    values[index] = values[maxIndex];
  }
  return results;
}
// For answers ⤵
const randomAns = pick(4, 0, 4);

let place = 0;
let result = 0;
let correct;
let trying2 = [1];
// let other;

////////////////////////////////////////////////////////////////
// Indicator QUES-ANS ⤵
const fetchQuestion = async () => {
  const response = await fetch('./data.json');
  const data = await response.json();
  // Fetch Part ⤴

  // Finish game ⤵
  if (place == trying2.length) {
    app.style.visibility = 'hidden';
    setTimeout(() => (endGame.style.visibility = 'visible'), 1000);
    return;
  }

  const question = data.datas[`${trying2[place]}`].question;
  const first = data.datas[`${trying2[place]}`].answers[`${randomAns[0]}`];
  const second = data.datas[`${trying2[place]}`].answers[`${randomAns[1]}`];
  const third = data.datas[`${trying2[place]}`].answers[`${randomAns[2]}`];
  const fourth = data.datas[`${trying2[place]}`].answers[`${randomAns[3]}`];
  correct =
    data.datas[`${trying2[place]}`].answers[
      data.datas[`${trying2[place]}`].correctAns
    ];

  questionTab.innerHTML = question;
  answer1.innerHTML = first;
  answer2.innerHTML = second;
  answer3.innerHTML = third;
  answer4.innerHTML = fourth;

  place++;
};

////////////////////////////////////////////////////////////////
// Question Delayer ⤵
const questionDelayer = () => {
  setTimeout(() => {
    fetchQuestion();
    // timerFun();
  }, 500);
};

////////////////////////////////////////////////////////////////
// Setting numbers of Questions ⤵
increase.addEventListener('click', () => {
  if (numofQues.value >= 15) return;
  else {
    const randomNums = numofQues.value++;
    const numberItself = randomNums + 1;
    // other = pick(numberItself, 0, 15);
    trying2 = pick(numberItself, 0, 15);
    sualSay.textContent = trying2.length;
  }
});

decrease.addEventListener('click', () => {
  if (numofQues.value <= 1) return;
  else {
    const randomNums = numofQues.value--;
    const numberItself = randomNums - 1;
    // other = pick(numberItself, 0, 15);
    trying2 = pick(numberItself, 0, 15);
    sualSay.textContent = trying2.length;
  }
});

/////////////////////////////////////////////////////////////////
// Result indicator ⤵
answerTab.forEach(ab =>
  ab.addEventListener('click', e => {
    e.target.innerHTML == correct ? result++ : console.log(result);
    questionDelayer();

    //Answers indicator ⤵
    countedCorrect.innerHTML = result; // correctAnsers
    sualSay.textContent = trying2.length; //numsOfQuestions

    // Percentage indicator ⤵
    const percentage = (result / sualSay.textContent) * 100;
    percentageTab.innerHTML = `Success ${
      !String(percentage).endsWith('0') ? percentage.toFixed(1) : percentage
    }%`;
  })
);

///////////////////////////////////////////////////////////////
// Game starter ⤵
const starterGame = () => {
  // fetchQuestion();
  questionDelayer();
  welcomeTab.style.visibility = 'hidden';
  setTimeout(() => {
    app.style.opacity = 1;
  }, 500);
};

startGame.addEventListener('click', starterGame);

// Game restarter  ⤵
restart.addEventListener('click', e => window.location.reload());

/*
////////////////////////////////////////////////////////////////
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

timer.innerHTML = 'Good Luck 🙌';
