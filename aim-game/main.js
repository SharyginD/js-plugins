document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.start');
    const screens = document.querySelectorAll('.screen');
    const timeList = document.querySelector('.time-list');
    const timeEl = document.querySelector('#time');
    const board = document.querySelector('.board');
    const colors = ['#e94b3c', '#6f9fd8', '#eadedb', '#ce3175', '#838487', '#d8ae47', '#79c753'];
    let score = 0;
    let time = 0;

    startBtn.addEventListener('click', (event) => {
        event.preventDefault();
        screens[0].classList.add('up');
    });

    timeList.addEventListener('click', (event) => {
        if (event.target.classList.contains('time-btn')) {
            time = Number(event.target.getAttribute('data-time'));
            startGame();
        }
    });

    board.addEventListener('click', event => {
        if (event.target.classList.contains('circle')) {
            score++;
            event.target.remove();
            createRandomCircle();
        }
    });

    function startGame() {
        screens[1].classList.add('up');
        setInterval(decreaseTime, 1000);
        createRandomCircle();
        timeEl.innerHTML = `00:${time}`;
    }

    function decreaseTime() {
        if (time === 0) {
            finishGame();
        }
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        timeEl.innerHTML = `00:${current}`;
    }

    function finishGame() {
        timeEl.parentNode.classList.add('hide');
        board.innerHTML = `<h1>Счет : ${score}</h1>`;
    }

    function createRandomCircle() {
        const circle = document.createElement('div');
        const size = getRandomNumber(10, 60);
        const {width, height} = board.getBoundingClientRect();
        const x = getRandomNumber(0, (width - size));
        const y = getRandomNumber(0, (height - size));
        const color = randomColor();
        circle.classList.add('circle');
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;

        circle.style.top = `${x}px`;
        circle.style.left = `${y}px`;

        circle.style.backgroundColor = color;

        board.append(circle);
    }

    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    function randomColor() {
        const index = Math.floor(Math.random() * colors.length);
        return colors[index];
    }
});