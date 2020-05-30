
// Selectors
const $input = document.querySelector('.form__input');
const $button = document.querySelector('.form__button');
const $list = document.querySelector('.todo__list');
const $filterData = document.querySelector('.todo__filter');


// Event Listeners
document.addEventListener('DOMContentLoaded', getLocalItem);
$button.addEventListener('click', addItem); //event add new item with function addItem.
$list.addEventListener('click', deleteCheckItem);
$filterData.addEventListener('click', filterTodo);

// Function add Item

function addItem(event) {
  // prevent form submit
  event.preventDefault();
  // todo div
  // console.log(`Hola ${event}`);
  const $itemDiv = document.createElement('div');
  $itemDiv.classList.add('todo__div');
  // console.log($itemDiv);

  // create list 🔥 
  const $listItem = document.createElement('li');
  $listItem.classList.add('todo__item');
  $listItem.innerText = $input.value;
  $itemDiv.appendChild($listItem);
  // console.log($itemDiv);

  //Save localStorage
  saveLocalTodos($input.value);

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

//function delete item
function deleteCheckItem(event){
  const $item = event.target;
  // console.log($item);

  // Delete Item
  if($item.classList[0] === 'trash__btn') {
    // console.log($item.classList[0]);
    const $todo = $item.parentElement;
    // console.log($item.parentElement);
    const $request = confirm(`Deseas eliminar "${$todo.children[0].innerText}"`);
    if($request === true) {
      removeLocalItem($todo);
      $todo.remove();
    }
    //animation
    /* $todo.classList.add('fall');
    $todo.addEventListener('transitionend', function() {
    }) */
  }

  //check mark item
  if ($item.classList[0] === 'complete__btn') {
    const $todo = $item.parentElement;
    $todo.classList.toggle('completed__item');
  }

}


function filterTodo(event) {
  const $items = $list.childNodes;
  // console.log(todos);
  $items.forEach((todo) => {
    if (todo.classList !== undefined) {

      switch (event.target.value) {
        case 'all':
          todo.style.display = 'flex';
          break;
        case 'completed':
          if(todo.classList.contains('completed__item')) {
            todo.style.display = 'flex';
          } else {
            todo.style.display = 'none';
          }
          break;
        case 'uncompleted':
          if(!todo.classList.contains('completed__item')) {
            todo.style.display = 'flex';
          } else {
            todo.style.display = 'none';
          }
          break;
      }
    }
  });
}


function saveLocalTodos(todo) {
  let $items;
  
  if(localStorage.getItem('$items') === null) {
    $items = [];
  }
  else {
    $items = JSON.parse(localStorage.getItem('$items'));
    console.log($items);
  }
  
  // Array de objetos
  /* let data = {
      name: todo,
      status: "uncompleted"
  }; */

  $items.push(todo);
  // alert($items);

  localStorage.setItem('$items', JSON.stringify($items));

}

function getLocalItem() {
  let $items;
  
  if(localStorage.getItem('$items') === null) {
    $items = [];
  }
  else {
    $items = JSON.parse(localStorage.getItem('$items'));
    // console.log($items);
  }

  $items.forEach(function(todo) {
      // todo div
    // console.log(`Hola ${event}`);
    const $itemDiv = document.createElement('div');
    $itemDiv.classList.add('todo__div');
    // console.log($itemDiv);

    // create list 🔥 
    const $listItem = document.createElement('li');
    $listItem.classList.add('todo__item');
    $listItem.innerText = todo;
    $itemDiv.appendChild($listItem);
    // console.log($itemDiv);

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

  });
}

function removeLocalItem(todo) {
  
  let $items;
  
  if(localStorage.getItem('$items') === null) {
    $items = [];
  }
  else {
    $items = JSON.parse(localStorage.getItem('$items'));
  }
  
  const todoIndex = todo.children[0].innerText;
  $items.splice($items.indexOf(todoIndex), 1);
  localStorage.setItem('$items', JSON.stringify($items));
  // console.log(todo.children[0].innerText);
  // console.log($items.indexOf('hola 1'));
  
}
