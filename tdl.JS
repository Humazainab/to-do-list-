
var input = document.querySelector ('#td');
	var todoList = document.querySelector ('#todoList');
	function add () {
	    if (input) {
			var ID;
			if (todoList.lastElementChild) {
			 	ID = (parseInt(todoList.lastElementChild.id) + 1).toString();
			}
			if (!ID) {
				ID = 1;
			}
	        var todo = document.createElement("li");
			todo.id = ID;
			var todoinput = document.createElement("input");
			todoinput.type="text";
			todoinput.value=input.value; 
			var todoText = document.createTextNode(input.value);
			var todocheckbox = document.createElement("input");
			todocheckbox.addEventListener('click', handletodoList);
			todocheckbox.type="checkbox";
			todo.appendChild(todoinput);
			todo.appendChild(todocheckbox);
			todoList.appendChild(todo);
			localStorage.setItem ("1", "My Task");
			
			/*if (todocheckbox =='checked') {
			input.strike (); 
			}*/
		
		function handletodoList (event) {
			console.log("cloudy"); 
			todoinput.style = "text-decoration:  line-through";	
		}
		
	}
		
	}