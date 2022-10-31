const heightHiddenMenu = () => {
    const updateHeightHiddenMenu = () => {
        const headerHeight = document.querySelector('.header__container').clientHeight;
        let calcesHeight = document.documentElement.clientHeight - headerHeight;
        document.querySelector('.hidden-menu__content').style.height = `${calcesHeight}px`;
    }
    setInterval(updateHeightHiddenMenu, 1000)
}

export { heightHiddenMenu };