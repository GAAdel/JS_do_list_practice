let message_input = document.querySelector('.widget_input');
let message_button = document.querySelector('.widget_btn');
let tasks_todo = document.querySelector('.widget__task');

let mas = [];

message_button.onclick = function(){
  
  let new_task = {
    task: message_input.value,
    checked: false,
    important: false
  };

  mas.push(new_task);
  message_input.value = "";
  displayMessages();

};

function displayMessages() {
  let pool_message = '';
  mas.forEach(function(elem, index){
    pool_message += `
    <li>
      <input type="checkbox">
      <label>${elem.task}</label>
    </li>
    `;
    tasks_todo.innerHTML = pool_message;
  });
}