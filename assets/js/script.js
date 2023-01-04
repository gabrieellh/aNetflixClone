class Accordion {
    constructor(accordionListQuestions) {
        this.accordionListQuestions = document.querySelectorAll(accordionListQuestions);
        this.activeItemClass = "active";

    }

    toggleAccordion(item) {
        item.classList.toggle(this.activeItemClass)
        item.nextElementSibling.classList.toogle(this.activeItemClass);
    }

    addAccordionEvent() {
        this.accordionListQuestions.forEach ((question) => {
            question.addAccordionEvent("click", () => this.toggleAccordion(question));

        });
    }

    init () {
        if(this.accordionListQuestions.leght) {
            this.addAccordionEvent();
            
        }

        const accordion =  new accordion(".faq-question");
        accordion.init();
    }
}