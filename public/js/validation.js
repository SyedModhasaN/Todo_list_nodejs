function validateForm() {
  let input = document.getElementById("taskInput").value.trim();
  if (!input) {
    alert("This field cannot be empty!");
    return false; // prevent form submission
  }
  return true; // allow form submission
}
function showEditForm(index) {
  const itemDiv = document.getElementById("item-" + index);
  const text = itemDiv.querySelector(".task-text");
  const form = itemDiv.querySelector(".edit-form");
  const editBtn = itemDiv.querySelector(".edit-btn");
  const deleteBtn = itemDiv.querySelector(".delete-btn");

  text.style.display = "none";     
  form.style.display = "inline";   
  editBtn.style.display = "none";  
  deleteBtn.style.display = "none";
}

function cancelEdit(index) {
  const itemDiv = document.getElementById("item-" + index);
  const text = itemDiv.querySelector(".task-text");
  const form = itemDiv.querySelector(".edit-form");
  const editBtn = itemDiv.querySelector(".edit-btn");
  const deleteBtn = itemDiv.querySelector(".delete-btn");

  text.style.display = "block";    
  form.style.display = "none";     
  editBtn.style.display = "inline";
  deleteBtn.style.display = "inline";
}
