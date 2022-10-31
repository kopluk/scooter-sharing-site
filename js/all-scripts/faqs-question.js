const faqsQuestions = () => {
    // блок faqs
    const faqsBody = document.querySelector('.faqs');

    try {
        faqsBody.addEventListener('click', (event) => {
            if (event.target.closest('.faqs-question')) {
                // нажатый блок
                let clickedQuestion =  event.target.closest('.faqs-question');
                // добавление открытия блока
                clickedQuestion.classList.toggle('opened-question')
            }
        })
    } catch (err) {
        // page is not (main-page, careers, locations)
    }
}

export { faqsQuestions };