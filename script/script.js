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
  mas.forEach(function(elem, index){
    console.log(elem);
  });
}
   