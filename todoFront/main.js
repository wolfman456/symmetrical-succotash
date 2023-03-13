
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
         </tr>`;
    
    // Loop to access all rows 
    for (let r of todolist) {
        tab += `<tr> 
    <td>${r.name} </td>
    <td>${r.description}</td>
    <td>${r.complete}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("todos").innerHTML = tab;
  }