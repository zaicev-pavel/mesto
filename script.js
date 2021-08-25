let openPopupButton = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');
let nameTitle = document.querySelector('.profile__title');
let jobTitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.form-profile');
let nameInput = document.querySelector('.form-profile__text_type_name');
let jobInput = document.querySelector('.form-profile__text_type_job');


function togglePopup() {
  popup.classList.toggle('popup_opened');
  nameInput.value = nameTitle.textContent
  jobInput.value = jobTitle.textContent
}

openPopupButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);



function formSubmitHandler (evt) {
    evt.preventDefault();
    nameTitle.textContent = nameInput.value;
    jobTitle.textContent = jobInput.value;
    togglePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

