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
  // console.log(question)
  const answers = data.datas[`${place}`].answers;
  // console.log(answers);
  const first = data.datas[`${place}`].answers[0];
  const second = data.datas[`${place}`].answers[1];
  const third = data.datas[`${place}`].answers[2];
  const fourth = data.datas[`${place}`].answers[3];
  correct = data.datas[`${place}`].answers[data.datas[`${place}`].correctAns];
  // console.log(correct);

  questionTab.innerHTML = question;
  answer1.innerHTML = first;
  answer2.innerHTML = second;
  answer3.innerHTML = third;
  answer4.innerHTML = fourth;

  place++;
};
fetchQuestion();

// allAnswers.forEach(ab =>
answerTab.forEach(ab =>
  ab.addEventListener('click', e => {
    if (e.target.innerHTML == correct) {
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
    // timerFun();
  }, 500);
};
*/

/**/
function pick(n, min, max) {
  var values = [],
    i = max;
  while (i >= min) 
  values.push(i--);
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
console.log(randomNums);
const randomAns = pick(4,0,4)
console.log(randomAns);

let place = 0;
let result = 0;
let correct;


const fetchQuestion = async () => {
  const response = await fetch('./data.json');
  const data = await response.json();
  // Fetch Part ⤴

  // Finishh game ⤵
  if (place == randomNums.length) {
    app.classList.add('blur');
    endGame.style.opacity = '1';
    return;
  }
  console.log(randomNums);
  // console.log(randomNums[place]);
  // console.log(`${randomNums[place]}`);

  ////////////////////////////////////////
  // console.log(`${randomNums[place]}`);
  const question = data.datas[`${randomNums[place]}`].question;
  // const answers = data.datas[`${randomNums[place]}`].answers;
  const first = data.datas[`${randomNums[place]}`].answers[`${randomAns[0]}`];
  const second = data.datas[`${randomNums[place]}`].answers[`${randomAns[1]}`];
  const third = data.datas[`${randomNums[place]}`].answers[`${randomAns[2]}`];
  const fourth = data.datas[`${randomNums[place]}`].answers[`${randomAns[3 ]}`];
  correct =
    data.datas[`${randomNums[place]}`].answers[
      data.datas[`${randomNums[place]}`].correctAns
    ];
    console.log(correct);

  questionTab.innerHTML = question;
  answer1.innerHTML = first;
  answer2.innerHTML = second;
  answer3.innerHTML = third;
  answer4.innerHTML = fourth;

  place++;
  // console.log(place);
};
fetchQuestion();

allAnswers.forEach(ab =>
  ab.addEventListener('click', e => {
    if (ab.innerHTML == correct) {
      result++;
      // console.log(result);
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
    // intervalizer();
    fetchQuestion();
    // timerFun();
  }, 500);
};


// Restart game ⤵
restart.addEventListener('click', e => window.location.reload());

// console.log(pick(15, 0, 15));

function randomArrayShuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
var alphabet=["a","b","c","d","e"];
// console.log( randomArrayShuffle(alphabet) );; 