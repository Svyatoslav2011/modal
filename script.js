const openBtn = document.querySelector(".open-modal-btn");
const closeBtn = document.querySelector(".modal__header img")
const container = document.querySelector(".container");
const modal = document.querySelector(".modal");
const submitBtn = document.querySelector(".modal__button");
const nameInput = document.querySelector(".modal__name");
const surnameInput = document.querySelector(".modal__surname");


openBtn.addEventListener("click", () => {
    container.classList.add("active");
    modal.classList.add("active");
    submitBtn.removeAttribute("disabled");
});


function closeModal(){
    container.classList.remove("active");
    modal.classList.remove("active");
    nameInput.value = "";
    surnameInput.value = "";
};


closeBtn.addEventListener("click", closeModal);


container.addEventListener("click", (event) => {
    if (!event.target.closest(".modal")){
        closeModal();
    };
});

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (!nameInput.value || !surnameInput.value){
        const isConfirmed = confirm("Вы не заполнили одно из полей. Продолжить заполнение?");
        if (!isConfirmed){
            closeModal();
        }

        else if (isConfirmed){
            isConfirmed === true
        }
    }

    else{
        closeModal();
    }
});