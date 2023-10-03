let container = document.getElementById('imgContainer');
const counterText = document.getElementById('counterText');
restoreCounter();

function storeCounter() {
    let counterString = JSON.stringify(counter);
    localStorage.setItem('counter', counterString);
}

function restoreCounter() {
    let counterString = localStorage.getItem('counter');
    counter = JSON.parse(counterString) || 0;
    counterText.textContent = counter;
}
const jawir = ['jawir1.webp', 'jawir2.webp', 'jawir3.webp', 'jawir4.webp'];

document.addEventListener('click', click);
function click() {
    let randomElement = jawir[Math.floor(Math.random() * jawir.length)];
    counter++;
    counterText.textContent = counter;
    let img = document.createElement('img');
    img.src = 'assets/'+ randomElement;
    img.setAttribute('id', 'gambar')
    container.appendChild(img);
    // const audioIn = new Audio('assets/in.mp3');
    // const audioOut = new Audio('assets/out.mp3');
    // audioIn.play();
    storeCounter();
    measureCPS();
    setTimeout(() => {
        container.removeChild(container.children[0]);
        // audioOut.play();
    }, 2000);
}

document.addEventListener('dragstart', event => {
    event.preventDefault();
  }
);

document.addEventListener('drop', event => {
    event.preventDefault();
  }
);

let clicks = 0;
let measuring = false;
const counterCPS = document.getElementById('counterCPS');

function measureCPS() {
    if (!measuring) {
        clicks = 0;
        measuring = true;
        counterCPS.textContent = 'CPS: 0';
        updateCPS();
    }
    return clicks++;
}

function updateCPS() {
  if (measuring) {
    setTimeout(() => {
      counterCPS.textContent = 'CPS: '+ clicks;
      clicks = 0;
      updateCPS();
    }, 1000);
  }
}