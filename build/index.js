const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const lottieFileByNumber = {
  1: 'crocosaurus.json',
  2: 'dindino.json',
  3: 'mrcroco.json',
};

window.onload = () => {
  const lottiePlayer = document.querySelector('lottie-player');
  const randomLottieFile = lottieFileByNumber[getRandomNumber(1, 3)];

  lottiePlayer.setAttribute('src', `./lotties/${randomLottieFile}`);
  lottiePlayer.style.opacity = '1';

  const clone = lottiePlayer.cloneNode(true);
  lottiePlayer.replaceWith(clone);
};