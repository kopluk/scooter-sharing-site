const burgerFn = () => {
    const wrapper = document.querySelector('.wrapper');
    const hiddenMenu = document.querySelector('.hidden-menu');

    wrapper.addEventListener('click', (event) => {
        if (event.target.closest('.hidden-menu__button')) {
            hiddenMenu.classList.toggle('closed-menu');
        }
        if (!event.target.closest('.hidden-menu__button') && !event.target.closest('.hidden-menu__content')) {
            hiddenMenu.classList.add('closed-menu')
        }
    });
}

export { burgerFn };