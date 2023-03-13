
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

  function show(data) {
    console.log("show")
    let todolist = data;
    console.log(todolist[0].name)
    let tab = 
        `<tr>
          <th>Name</th>
          <th>description</th>
          <th>complete</th>
          <th>Action</Action>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of todolist) {
        tab += `<tr> 
    <td>${r.name} </td>
    <td>${r.description}</td>
    <td>${r.complete}</td>
    <td><button type="button">update</button>
    <button type="button">Delete</button></td>      
</tr>`;
    }
    let form = document.getElementById("form")
    let name = document.createElement("input");
    name.setAttribute("placeholder", "Name");
    let des = document.createElement("input");
    des.setAttribute("placeholder","Descrition");
    let status = document.createElement("input");
    status.setAttribute("placeholder", "completed");
    form.append(name, des, status);
    // form.appendChild(des);
    // // Setting innerHTML as tab variable
    document.getElementById("todos").innerHTML = tab;
    
  }
  