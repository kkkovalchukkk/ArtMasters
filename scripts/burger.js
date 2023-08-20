const burgerBtn = document.querySelector('.ham')
const overlay = document.querySelector('.window');

const openBurger = () => {
    window.addEventListener('click', closeByClickOnOverlay)
    overlay.classList.add('window--active')
    document.body.classList.add('no-scroll')
    burgerBtn.classList.add('active');
} 
const closeBurger = () => {
    window.removeEventListener('click', closeByClickOnOverlay)
    overlay.classList.remove('window--active')
    burgerBtn.classList.remove('active');
    document.body.classList.remove('no-scroll')
}
const closeByClickOnOverlay = (e) => {
    if (e.target  === overlay) {
closeBurger();
    }
}


burgerBtn.addEventListener('click' , () => {
    if (overlay.classList.contains('window--active')) {

        closeBurger();
    } else {
        openBurger();
    }
})