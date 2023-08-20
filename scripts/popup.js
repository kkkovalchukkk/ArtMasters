    const overlay = document.querySelector('.overlay');
    const popup = overlay.querySelector('.login-section__container');
    const toggler = document.querySelector('.login-section__link--forgot')

const closePopup = () => {
        overlay.classList.remove('overlay--active')
        document.body.classList.remove('no-scroll')
                window.removeEventListener('click', closeByClickOnOverlay)
        window.removeEventListener('keydown', closeOverlayByPressEsc)
     }

     const openPopup = () => {
        overlay.classList.add('overlay--active')
        document.body.classList.add('no-scroll')
        window.addEventListener('click', closeByClickOnOverlay)
        window.addEventListener('keydown', closeOverlayByPressEsc)
     }

    const closeByClickOnOverlay = (e) => {
        if (e.target == overlay) {
            closePopup();
        }
     }

     const closeOverlayByPressEsc = (e) => {
        if (e.key === 'Escape') {
            closePopup();
        }
     }

     toggler.addEventListener('click', (e) => {
        e.preventDefault();
        openPopup();
     })
