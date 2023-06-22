import Save from "./Save";
import Update from "./Update";
import Delete from "./Delete";

const data =[
    {id: 1, name: "something", description: "something", complete: false,},
    {id: 2, name: "something", description: "something", complete: false,},
    {id: 3, name: "something", description: "something", complete: false,}
]

const Table = () => {
    return(
  <div className="table">
      <table>
          <tbody>
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Complete</th>
              <th>Action</th>
          </tr>

              {data.map((val, key)=>{
                  return(
                  <tr key={key}>
                  <td>{val.id}</td>
                  <td><input placeholder= {val.name}/></td>
                  <td><input placeholder={val.description}/></td>
                  <td><input placeholder={val.description}/></td>
                  <td>
                      <Update/>
                      <Delete/>
                  </td>
              </tr>
                  )
              })}
          <tr>
              <td>id</td>
              <td><input placeholder="name"/></td>
              <td><input placeholder="Description"/></td>
              <td><input placeholder="Complete"/></td>
              <td><Save/></td>
          </tr>
          </tbody>
      </table>
  </div>
    )
};

export default Table