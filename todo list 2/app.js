const A = document.getElementById('single-task');
        const B = document.getElementById('task-input');
        const C = document.getElementById('tasks');
    
        // Add a new task to the list
        function addTask(event) {
          event.preventDefault();
          if (B.value === '') return;
          const task = createTask(B.value);
          C.appendChild(task);
          B.value = '';
        }
    
        // Create a new task element
        function createTask(taskName) {
          const task = document.createElement('li');
          task.classList.add('task');
          task.innerHTML = `
            <input type="checkbox">
            <label>${taskName}</label>
            <span class="delete">×</span>
            <span class="edit"><i class='far fa-edit'></i></span>
          `;
    
          // Add a delete button
          const deleteButton = task.querySelector('.delete');
          deleteButton.addEventListener('click', deleteTask);
    
          // Add an edit button
          const editButton = task.querySelector('.edit');
          editButton.addEventListener('click', () => editTask(task));
    
          return task;
        }
    
        // Delete a task from the list
        function deleteTask(event) {
          event.target.parentElement.remove();
        }
    
        // Edit a task in the list
        function editTask(task) {
          const label = task.querySelector('label');
          const currentTaskName = label.textContent;
    
          // Create an input field for editing
          const inputField = document.createElement('input');
          inputField.type = 'text';
          inputField.value = currentTaskName;
    
          // Replace the label with the input field
          label.replaceWith(inputField);
    
          // Focus on the input field
          inputField.focus();
    
          // Add event listener to handle editing
          inputField.addEventListener('blur', () => {
            label.textContent = inputField.value;
            inputField.replaceWith(label);
          });
        }
    
        A.addEventListener('submit', addTask);