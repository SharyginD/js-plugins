document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('#board');
    const squaresNumbers = 1000;
    const colors = ['#e94b3c', '#6f9fd8', '#eadedb', '#ce3175', '#838487', '#d8ae47', '#79c753'];

    for (let i = 0; i < squaresNumbers; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => {
            setColor(square);
        });

        square.addEventListener('mouseleave', () => {
            removeColor(square);
        });

        board.append(square);
    }

    function setColor(element) {
        const color = getRandomColor();
        element.style.backgroundColor = color;
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    }

    function removeColor(element) {
        element.style.backgroundColor = "#1d1d1d";
        element.style.boxShadow = `0 0 2px #000`;
    }

    function getRandomColor() {
        const index = Math.floor(Math.random() * colors.length);
        return colors[index];
    }
});