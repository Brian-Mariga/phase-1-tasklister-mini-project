document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo(e.target.new_task_description.value);
    form.reset;
  });
});

function addTodo(todo) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = " x ";
  li.textContent = todo;
  li.appendChild(btn);
  document.querySelector("ul").appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
