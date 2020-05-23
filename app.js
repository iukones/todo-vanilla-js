console.log('Estoy en app.js');

// Selectors
const $input = document.querySelector(".form__input");
const $button = document.querySelector(".form__button");
const $list = document.querySelector(".todo__list");


// Event Listeners
$button.addEventListener('click', addItem); //event add new item with function addItem.
$list.addEventListener('click', deleteCheckItem);

// Function add Item

function addItem(event) {
  // prevent form submit
  event.preventDefault();
  // todo div
  // console.log(`Hola ${event}`);
  const $itemDiv = document.createElement('div');
  $itemDiv.classList.add('todo__div');
  // console.log($itemDiv);

  // create list
  const $listItem = document.createElement('li');
  $listItem.classList.add('todo__item');
  $listItem.innerText = $input.value;
  $itemDiv.appendChild($listItem);
  console.log($itemDiv);
  
  //create button 🚫 
  const $trashButton = document.createElement('button');
  $trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  $trashButton.classList.add('trash__btn');
  $itemDiv.appendChild($trashButton);

  //create button ✔ 
  const $completeButton = document.createElement('button');
  $completeButton.innerHTML = '<i class="fas fa-check"></i>';
  $completeButton.classList.add('complete__btn');
  $itemDiv.appendChild($completeButton);
  
  //add to list item
  $list.appendChild($itemDiv);

  //clear input value
  $input.value = '';
  
}
