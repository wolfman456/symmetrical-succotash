
let forms =
`<form>
  <input type="text" id="toDoName" placeholder="name">
  <input type="text" id="des" placeholder="Description">
  <input type="text" id="complete" placeholder= Completed>
  <button type="button" name="button" onclick="saveToDo(toDoName, des, complete)">save</button>
  <button type="button" onclick="location.reload()">Clear</button>
</form>`
document.getElementById("form").innerHTML = forms;
let todolist = [];


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
      todolist = data;
      console.log(todolist);
      show(data)
    })
    .catch((error) => console.error("FETCH ERROR:", error));

function show(data) {
  let todolist = data;
  let tab =
    `<tr>
          <th>ID</th>
          <th>Name</th>
          <th>description</th>
          <th>complete</th>
          <th>Action</Action>
         </tr>`;
         let i = 1;
  // Loop to access all rows 
  for (let r of todolist) {
    tab += `<tr>
    <td <input>${r.id}</td>     
    <td><input id="${"nameTag"+i}">${r.name}</td>
    <td><input id="${"desTag"+i}">${r.description}</td>
    <td><input id=${"statusTag"+i}>${r.complete}</td>
    <td><button type="button" onclick="updateItem(${i})"> update</button>
    <button type="button" onclick="deleteToDo(${i})">Delete</button></td>      
</tr>`;
i++;
  }
  document.getElementById("todos").innerHTML = tab;

}
function saveToDo() {
  let name = document.getElementById("toDoName").value;
  console.log(name);
  let des = document.getElementById("des").value;
  let complete = document.getElementById("complete").value;
  if(name==""){
    alert("Name required");
    location.reload();
  }
  if (des == "") {
    
  }
  if(complete == "false" || complete == null){
    complete = false;
    console.log(complete);
  }
  if(complete = "true"){
    complete = false;
  }

  fetch("http://localhost:9092/todo/create", {
  method: "POST",
  body: JSON.stringify({
    name: name,
    description: des,
    complete: complete
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
  return location.reload();
})
.catch((error) => console.error("FETCH ERROR:", error));
}


function updateItem(i) {
  let nameTag = document.getElementById(`${"nameTag"+ i}`).value;
  let desTag = document.getElementById(`${"desTag"+ i}`).value;
  let statusTag = document.getElementById(`${"statusTag"+ i}`).value
  let id = todolist[i-1].id;

  fetch("http://localhost:9092/todo/update", {
    method: "POST",
    body: JSON.stringify({
      id:id,
      name: nameTag,
      description: desTag,
      complete: statusTag
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
    return location.reload();
  })
  .catch((error) => console.error("FETCH ERROR:", error));
  }

