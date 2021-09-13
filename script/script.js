let message_input = document.querySelector('.widget_input');
let message_button = document.querySelector('.widget_btn');
let tasks_todo = document.querySelector('.widget__task');
let mas = [];

if (localStorage.getItem('tasks_todo')) {                      //получаем данные
  mas = JSON.parse(localStorage.getItem('tasks_todo'));        // в массив возвращаем данные(JSON преобразуем в массив)
  displayMessages();
}

message_button.onclick = function(){
  
  let new_task = {
    task: message_input.value,
    checked: false,
    important: false
  };

  mas.push(new_task);
  message_input.value = "";
  displayMessages();
  localStorage.setItem('tasks_todo', JSON.stringify(mas));  // сохраняем данные в localstorage (принимает только строку "первращаем массив в строку")

};


// смотрим на параметр checked и добавляем атрибут checked к input
// смотрим на парамет important и добавляем класс important

function displayMessages() {
  let pool_message = '';
  if (mas.length === 0) {
    tasks_todo.innerHTML = '';
  };
  mas.forEach(function(elem, index){         // принимает параметром callback функцию. Функция принимает 3 аргумента (1 - сам элемент, 2 - индекс, 3 - сам массив)
    pool_message += `
    <li>
      <input type="checkbox" id="item_${index}" ${elem.checked ? 'checked' : ''}> 
      <label for="item_${index}" class="${elem.important ? 'important' : ''}">${elem.task}</label>
      <button id="item_btn_${index}" class="">Удалить дело</button>
    </li>
    `;
    tasks_todo.innerHTML = pool_message;
  });
}

// при изменении чекбокса с помощоью его id узнаем его label и вытаскиваем значение цифры
// потом перебираем массив и если цифра уже есть в массиве, то меняем его аттрибут checked
// записываем данные в localStorage
tasks_todo.onchange = function(event) {
  let idInput = event.target.getAttribute('id');
  let forLabel = tasks_todo.querySelector('[for=' + idInput + ']');
  let valueLabel = forLabel.innerHTML;
  mas.forEach(function(elem, index){
    if (elem.task == valueLabel) {
      elem.checked = !elem.checked;
      localStorage.setItem('tasks_todo', JSON.stringify(mas));
    };
  });
}

tasks_todo.onclick = function(event) {
  let idButton = event.target.getAttribute('id');
  if (idButton.includes("btn")) {
    let idButton_index = idButton.replace(/item_btn_/gi, '');
    mas.splice(idButton_index, 1);
    displayMessages();
    localStorage.setItem('tasks_todo', JSON.stringify(mas)); 
  };           
}
