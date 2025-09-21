function validateForm() {
  let input = document.getElementById("taskInput").value.trim();
  if (!input) {
    alert("This field cannot be empty!");
    return false; // prevent form submission
  }
  return true; // allow form submission
}
 function showEditForm(index) {
    document.getElementById("task-text-" + index).style.display = "none";
    document.getElementById("edit-form-" + index).style.display = "block";
    document.getElementById("action-buttons-" + index).style.display = "none"; // hide Edit + Delete
     document.getElementById("edit-input-" + index).focus();
  }

  function cancelEdit(index) {
    document.getElementById("task-text-" + index).style.display = "block";
    document.getElementById("edit-form-" + index).style.display = "none";
    document.getElementById("action-buttons-" + index).style.display = "inline"; // show back
  }

  function confirmDelete() {
  if (confirm("Are you sure you want to delete this task?")) {
    alert("Task deleted successfully!");
    return true; // allow form submission
  }
  return false; // cancel form submission
}

function confirmEdit() {
  if (confirm("Do you want to save the changes?")) {
    alert("Task updated successfully!");
    return true; // allow form submission
  }
  return false; // cancel form submission
}


//   function confirmDelete() {
//   return confirm("Are you sure you want to delete this task?");
// }
// function confirmEdit() {
//   return confirm("Do you want to save the changes?");
// }
// function showEditForm(index) {
//   const itemDiv = document.getElementById("item-" + index);
//   const text = itemDiv.querySelector(".task-text");
//   const form = itemDiv.querySelector(".edit-form");
//   const editBtn = itemDiv.querySelector(".edit-btn");
//   const deleteBtn = itemDiv.querySelector(".delete-btn");

//   text.style.display = "none";     
//   form.style.display = "inline";   
//   editBtn.style.display = "none";  
//   deleteBtn.style.display = "none";
// }

// function cancelEdit(index) {
//   const itemDiv = document.getElementById("item-" + index);
//   const text = itemDiv.querySelector(".task-text");
//   const form = itemDiv.querySelector(".edit-form");
//   const editBtn = itemDiv.querySelector(".edit-btn");
//   const deleteBtn = itemDiv.querySelector(".delete-btn");

//   text.style.display = "block";    
//   form.style.display = "none";     
//   editBtn.style.display = "inline";
//   deleteBtn.style.display = "inline";
// }
