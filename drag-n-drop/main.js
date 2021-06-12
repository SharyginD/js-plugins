document.addEventListener('DOMContentLoaded', () => {
    const item = document.querySelector('.item');
    const placeHolders = document.querySelectorAll('.placeholder');

    const dragOver = (event) => {
        event.preventDefault();
    };

    const dragEnter = (event) => {
        event.target.classList.add('hovered');
    };

    const dragLeave = (event) => {
        event.target.classList.remove('hovered');
    };

    const dragDrop = (event) => {
        event.target.classList.remove('hovered');
        event.target.append(item);
    };

    const dragStart = (event) => {
        event.target.classList.add('hold');
        setTimeout(() => {
            event.target.classList.add('hide')
        }, 0);
    };

    const dragEnd = (event) => {
        event.target.classList.remove('hold', 'hide');
    };

    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);

    placeHolders.forEach((placeHolder) => {
        placeHolder.addEventListener('dragover', dragOver);
        placeHolder.addEventListener('dragenter', dragEnter);
        placeHolder.addEventListener('dragleave', dragLeave);
        placeHolder.addEventListener('drop', dragDrop);
    });
});