console.log('Estoy en app.js');

// Selectors
const $input = document.querySelector(".form__input");
const $button = document.querySelector(".form__button");
const $list = document.querySelector(".todo__list");


// Event Listeners
$button.addEventListener('click', addItem);




// Function

function addItem(event) {
  event.preventDefault();
  console.log(`Hola ${event}`);

}
