'use strict';



document.querySelector('.play').addEventListener('click', function () {
  const fullName = document.querySelector('.name').value;
  document.querySelector('#name').textContent = 'Welcome ' + fullName + ' 🙏';
  document.querySelector('.overlay').style.display = 'none';
  document.querySelector('.intro').style.display = 'none';
})



document.querySelector('#htp').addEventListener('click', function () {
  document.querySelector('.overlay').style.display = 'block';
  document.querySelector('.howtoplay').style.display = 'block';
})

document.querySelector('.close').addEventListener('click', function () {
  document.querySelector('.overlay').style.display = 'none';
  document.querySelector('.intro').style.display = 'none';
  document.querySelector('.howtoplay').style.display = 'none';
})

document.querySelector('.closehtp').addEventListener('click', function () {
  document.querySelector('.overlay').style.display = 'none';
  document.querySelector('.intro').style.display = 'none';
  document.querySelector('.howtoplay').style.display = 'none';
})


document.querySelector('.overlay').addEventListener('click', function () {
  document.querySelector('.overlay').style.display = 'none';
  document.querySelector('.intro').style.display = 'none';
  document.querySelector('.howtoplay').style.display = 'none';
})




let crr_num = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let high_score = 0;
var image = document.getElementById('imgresponse');

document.querySelector('#lock').addEventListener('click', function () {
  const guess = Number(document.querySelector('#ans').value);


  if (!guess) {
    document.querySelector('#response').textContent = 'No Number!';
  } else if (guess === crr_num) {
    document.querySelector('#response').textContent = 'Correct!';

    image.src = "/images/victory.png";
    document.querySelector('#score').textContent = 'Your Score: ' + score;
    if (score > high_score) {
      high_score = score;
    }
    document.querySelector('#high_score').textContent = 'High Score: ' + high_score;
  } else if (guess != crr_num) {
    if (score > 1) {
      score--;
      document.querySelector('#score').textContent = 'Current Score: ' + score;

      if (guess > crr_num) {
        document.querySelector('#response').textContent = 'Too High!';
        image = document.getElementById('imgresponse');
        image.src = "/images/high.png";
      } else {
        document.querySelector('#response').textContent = 'Too Low!';
        image = document.getElementById('imgresponse');
        image.src = "/images/low.png";
      }
    } else {

      document.querySelector('#response').textContent = 'You lost the game. The number was ' + crr_num;
      document.querySelector('#score').textContent = 'Current Score: ' + 0;
      image = document.getElementById('imgresponse');
      image.src = "/images/loss.png";
    }
  }

});

document.querySelector('#reset').addEventListener('click', function () {
  document.querySelector('#ans').value = null;
  image.src = "/images/check.png";
  score = 5;
  document.querySelector('#score').textContent = 'Current Score: ' + score;
  document.querySelector('#response').textContent = 'Make a guess!';
  crr_num = Math.trunc(Math.random() * 20) + 1;
});