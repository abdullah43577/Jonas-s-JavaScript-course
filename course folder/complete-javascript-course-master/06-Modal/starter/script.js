'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = () => {
  //this removes the hidden class from the HTML document
  modal.classList.remove('hidden');
  //this removes the hidden class from the HTMl document for the background blur
  overlay.classList.remove('hidden');
};

// for closing the popup window when clicking the cancel button and the overlay
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// passing in the closeModal function without the curly braces that denotes it's a function closes the popup when clicked and also closes the popup when clicked on the overlay
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //   console.log(e.key);

  // if the press key is 'Escape' and does not contains the class of hidden
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // calling the closeModal function with curly braces
    closeModal();
  }
});
