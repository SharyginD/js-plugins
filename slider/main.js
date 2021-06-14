document.addEventListener('DOMContentLoaded', () => {
    const downButton = document.querySelector('.down-button');
    const upButton = document.querySelector('.up-button');
    const sideBar = document.querySelector('.sidebar');
    const mainSlide = document.querySelector('.main-slide');
    const slidesCount = mainSlide.querySelectorAll('div').length;
    const container = document.querySelector('.container');

    sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;

    let activeSlideIndex = 0;


    upButton.addEventListener('click', () => {
        changeSlide('up');
    });

    downButton.addEventListener('click', () => {
        changeSlide('down');
    });

    function changeSlide(direction) {
        if (direction === 'up') {
            activeSlideIndex++;
            if (activeSlideIndex === slidesCount) {
                activeSlideIndex = 0;
            }
        } else if (direction === 'down') {
            activeSlideIndex--;
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesCount - 1;
            }
        }
        const clientHeight = container.clientHeight;
        mainSlide.style.transform = `translateY(-${activeSlideIndex * clientHeight}px)`;

        sideBar.style.transform = `translateY(${activeSlideIndex * clientHeight}px)`
    }
});