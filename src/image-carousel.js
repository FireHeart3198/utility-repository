const slideWidth = 500;

function createArray() {
  const nodeList = document.querySelectorAll('.slide-list .slide');
  const photoArray = [];
  nodeList.forEach(() => {
    photoArray.push('photo');
  });
  return photoArray;
}

function createNavigationCircle(index) {
  const navigationElement = document.querySelector('.circles');
  const circle = document.createElement('div');
  circle.innerHTML = '&#9675;';
  circle.dataset.index = index;
  circle.classList.add('circle');
  circle.addEventListener('click', (e) => {
    slideToSlideNum(e.target);
  });
  navigationElement.append(circle);
}

function createCarousel() {
  const photoArray = createArray();
  const navigationElement = document.querySelector('.circles');
  navigationElement.innerText = '';
  photoArray.forEach((photo, index) => {
    createNavigationCircle(index);
  });
}

const slideList = document.querySelector('.slide-list');

function moveSlideList(amount) {
  slideList.style.left = `-${amount}px`;
}

function colourSlideCircle(amount) {
  const slideNum = amount / 500;
  const newSlide = document.querySelector(`[data-index='${slideNum}']`);
  newSlide.innerHTML = '&#9679;';
}

function setSlide(amount) {
  createCarousel();
  moveSlideList(amount);
  colourSlideCircle(amount);
}

function getSlidePositionAndLength() {
  const currentLeft = parseInt(
    getComputedStyle(slideList)
      .getPropertyValue('left')
      .replace('px', '')
      .replace('-', ''),
    10,
  );
  const slideLength = parseInt(
    getComputedStyle(slideList).getPropertyValue('width').replace('px', ''),
    10,
  );
  return { currentLeft, slideLength };
}

function slideLeft() {
  const { currentLeft, slideLength } = getSlidePositionAndLength();
  if (currentLeft === 0) {
    const amount = slideLength - slideWidth;
    setSlide(amount);
  } else {
    const amount = currentLeft - slideWidth;
    setSlide(amount);
  }
}

function slideRight() {
  const { currentLeft, slideLength } = getSlidePositionAndLength();
  if (currentLeft === slideLength - slideWidth) {
    const amount = 0;
    setSlide(amount);
  } else {
    const amount = currentLeft + slideWidth;
    setSlide(amount);
  }
}

function slideToSlideNum(targetSlide) {
  const location = targetSlide.dataset.index;
  const amount = location * 500;
  setSlide(amount);
}

export { setSlide, slideLeft, slideRight, slideToSlideNum };
