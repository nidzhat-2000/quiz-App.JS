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

/*
let place = 0;
let result = 0;
let correct;

const fetchQuestion = async () => {
  const response = await fetch('./data.json');
  const data = await response.json();
  // Fetch Part ⤴

  // Finishh game ⤵
  if (place == data.datas.length) {
    app.classList.add('blur');
    endGame.style.opacity = '1';
    return;
  }

  ////////////////////////////////////////
  const question = data.datas[`${place}`].question;
  const answers = data.datas[`${place}`].answers;
  const first = data.datas[`${place}`].answers[0];
  const second = data.datas[`${place}`].answers[1];
  const third = data.datas[`${place}`].answers[2];
  const fourth = data.datas[`${place}`].answers[3];
  correct = data.datas[`${place}`].answers[data.datas[`${place}`].correctAns];

  questionTab.innerHTML = question;
  answer1.innerHTML = first;
  answer2.innerHTML = second;
  answer3.innerHTML = third;
  answer4.innerHTML = fourth;

  place++;
};
fetchQuestion();

allAnswers.forEach(ab =>
  ab.addEventListener('click', e => {
    if (ab.innerHTML == correct) {
      result++;

      /////////////////////////////
      // Result indicator ⤵
      const percentage = (result / 15) * 100;
      // CorrectAns ⤵
      countedCorrect.innerHTML = result;
      // Percentage Indicator
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
    timerFun();
  }, 500);
};
*/

let place = 0;
let result = 0;
let correct;
// let interval

const intervalizer = () => {
  const interval = Math.round(Math.random() * (7 - 0)) + 0;
  console.log(interval);

  const fetchQuestion = async () => {
    const response = await fetch('./data.json');
    const data = await response.json();
    // Fetch Part ⤴

    // Finishh game ⤵
    if (place == data.datas.length) {
      app.classList.add('blur');
      endGame.style.opacity = '1';
      return;
    }

    ////////////////////////////////////////
    const question = data.datas[`${interval}`].question;
    const answers = data.datas[`${interval}`].answers;
    const first = data.datas[`${interval}`].answers[0];
    const second = data.datas[`${interval}`].answers[1];
    const third = data.datas[`${interval}`].answers[2];
    const fourth = data.datas[`${interval}`].answers[3];
    correct =
      data.datas[`${interval}`].answers[data.datas[`${interval}`].correctAns];

    questionTab.innerHTML = question;
    answer1.innerHTML = first;
    answer2.innerHTML = second;
    answer3.innerHTML = third;
    answer4.innerHTML = fourth;

    place++;
  };

  fetchQuestion();
};
intervalizer();

allAnswers.forEach(ab =>
  ab.addEventListener('click', e => {
    if (ab.innerHTML == correct) {
      result++;
      console.log(result);
      /////////////////////////////
      // Result indicator ⤵
      const percentage = (result / 15) * 100;
      // CorrectAns ⤵
      countedCorrect.innerHTML = result;
      // Percentage Indicator
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
    intervalizer();
    // fetchQuestion();
    // timerFun();
  }, 500);
};

// Restart game ⤵
restart.addEventListener('click', e => window.location.reload());
