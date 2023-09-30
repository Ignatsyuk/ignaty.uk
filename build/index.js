const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const lottieFiles = [
  'crocosaurus.json',
  'dindino.json',
  'mrcroco.json',
  'crazyflower.json',
  'thevampirefrog.json'
];

window.onload = () => {
  const lottiePlayer = document.querySelector('lottie-player');
  const randomLottieFile = lottieFiles[getRandomNumber(0, lottieFiles.length - 1)];

  lottiePlayer.setAttribute('src', `./lotties/${randomLottieFile}`);
  lottiePlayer.style.opacity = '1';

  const lottiePlayerNode = lottiePlayer.cloneNode(true);
  lottiePlayer.replaceWith(lottiePlayerNode);
};