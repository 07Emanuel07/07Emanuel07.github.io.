const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add('tab-border');
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add('show');
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}


// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));

// Typo effect
const typo = document.getElementById('typing');
const text = 'Willkommen';
let idx = 1

writeText();

function writeText() {
    typo.innerText = text.slice(0, idx)

    idx++

    if (idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, 500);
};

// Image Carousel
const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let idxC = 0;

let interval = setInterval(run, 2000);

function run() {
    idxC++

    changeImage()
}

function changeImage() {
    if (idxC > img.length - 1) {
        idxC = 0
    } else if (idxC < 0) {
        idxC = img.length - 1
    }

    imgs.style.transform = `translateX(${-idxC * 100}%)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idxC++

    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idxC--

    changeImage()
    resetInterval()
})

// Arrow Rotation
// First
let clickCount = 0;
document.getElementById('toggleButton-1').addEventListener('click', function () {
  const arrow = this.querySelector('.arrow');
  // arrow.classList.toggle('rotate');
  const overview = document.querySelector('.overview-01');
    
  // Increment click count
  clickCount++;
  
  // Toggle classes based on click count
  if (clickCount % 2 === 1) {
      arrow.classList.add('rotate'); // Add rotate class on odd clicks
      overview.classList.add('move'); // Remove move class if it exists
  } else {
      overview.classList.remove('move'); // Add move class on even clicks
      arrow.classList.remove('rotate'); // Remove rotate class if it exists
  }
});
// Second
let clickCount2 = 0;
document.getElementById('toggleButton-2').addEventListener('click', function () {
  const arrow = this.querySelector('.arrow');
  // arrow.classList.toggle('rotate');
  const overview = document.querySelector('.overview-02');
    
  // Increment click count
  clickCount2++;
  
  // Toggle classes based on click count
  if (clickCount2 % 2 === 1) {
      arrow.classList.add('rotate'); // Add rotate class on odd clicks
      overview.classList.add('move'); // Remove move class if it exists
  } else {
      overview.classList.remove('move'); // Add move class on even clicks
      arrow.classList.remove('rotate'); // Remove rotate class if it exists
  }
});
// Third
let clickCount3 = 0;
document.getElementById('toggleButton-3').addEventListener('click', function () {
  const arrow = this.querySelector('.arrow');
  // arrow.classList.toggle('rotate');
  const overview = document.querySelector('.overview-03');
    
  // Increment click count
  clickCount3++;
  
  // Toggle classes based on click count
  if (clickCount3 % 2 === 1) {
      arrow.classList.add('rotate'); // Add rotate class on odd clicks
      overview.classList.add('move'); // Remove move class if it exists
  } else {
      overview.classList.remove('move'); // Add move class on even clicks
      arrow.classList.remove('rotate'); // Remove rotate class if it exists
  }
});
// Fourth
let clickCount4 = 0;
document.getElementById('toggleButton-4').addEventListener('click', function () {
  const arrow = this.querySelector('.arrow');
  // arrow.classList.toggle('rotate');
  const overview = document.querySelector('.overview-04');
    
  // Increment click count
  clickCount4++;
  
  // Toggle classes based on click count
  if (clickCount4 % 2 === 1) {
      arrow.classList.add('rotate'); // Add rotate class on odd clicks
      overview.classList.add('move'); // Remove move class if it exists
  } else {
      overview.classList.remove('move'); // Add move class on even clicks
      arrow.classList.remove('rotate'); // Remove rotate class if it exists
  }
});
// Fifth
let clickCount5 = 0;
document.getElementById('toggleButton-5').addEventListener('click', function () {
  const arrow = this.querySelector('.arrow');
  // arrow.classList.toggle('rotate');
  const overview = document.querySelector('.overview-05');
    
  // Increment click count
  clickCount5++;
  
  // Toggle classes based on click count
  if (clickCount5 % 2 === 1) {
      arrow.classList.add('rotate'); // Add rotate class on odd clicks
      overview.classList.add('move'); // Remove move class if it exists
  } else {
      overview.classList.remove('move'); // Add move class on even clicks
      arrow.classList.remove('rotate'); // Remove rotate class if it exists
  }
});
// Sixth
let clickCount6 = 0;
document.getElementById('toggleButton-6').addEventListener('click', function () {
  const arrow = this.querySelector('.arrow');
  // arrow.classList.toggle('rotate');
  const overview = document.querySelector('.overview-06');
    
  // Increment click count
  clickCount6++;
  
  // Toggle classes based on click count
  if (clickCount6 % 2 === 1) {
      arrow.classList.add('rotate'); // Add rotate class on odd clicks
      overview.classList.add('move'); // Remove move class if it exists
  } else {
      overview.classList.remove('move'); // Add move class on even clicks
      arrow.classList.remove('rotate'); // Remove rotate class if it exists
  }
});
