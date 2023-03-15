function getToDos() {
  fetch("http://localhost:9092/todo")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then(data => {
      console.log(data);
      show(data)
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}
function show(data) {
  console.log("show")
  let todolist = data;
  console.log(todolist[0].name)
  let tab =
    `<tr>
          <th>ID</th>
          <th>Name</th>
          <th>description</th>
          <th>complete</th>
          <th>Action</Action>
         </tr>`;

  // Loop to access all rows 
  for (let r of todolist) {
    tab += `<tr>
    <td>${r.id}</td>     
    <td><input placeholder=${r.name}> </td>
    <td><input placeholder=${r.description}></td>
    <td><input placeholder=${r.complete}></td>
    <td><button type="button">update</button>
    <button type="button" onclick="updateItem(td)">Delete</button></td>      
</tr>`;
  }
  document.getElementById("todos").innerHTML = tab;

  let forms =
    `<form>
      <input type="text" id="toDoName" placeholder="name">
      <input type="text" id="des" placeholder="Description">
      <input type="text" id="complete" placeholder= Completed>
      <button type="button" name="button" onclick="saveToDo(name, des, complete)">save</button>
      <button type="button">Clear</button>
    </form>`
  document.getElementById("form").innerHTML = forms;

}
function saveToDo() {
  let name = document.getElementById("toDoName").value;
  let des = document.getElementById("des").value;
  let complete = document.getElementById("complete").value;
  if (name == null | des == null) {
    name.innerHTML = "required";
    des.innerHTML = "required";
    return;

  } else if (complete != false || complete != true || complete == null) {
    complete = false;
  }
  console.log(name, des, complete);

  fetch("http://localhost:9092/todo/create", {
  method: "POST",
  body: JSON.stringify({
    name: name,
    description: des,
    completed: complete
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
}).then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("NETWORK RESPONSE ERROR");
  }
})
.then(data => {
  console.log(data);
  return getToDos();
})
.catch((error) => console.error("FETCH ERROR:", error));
}


function updateItem(td) {
  console.log(td);
}

getToDos();