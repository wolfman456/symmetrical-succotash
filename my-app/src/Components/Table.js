import Save from "./Save";
import Update from "./Update";
import Delete from "./Delete";

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
          <tr>
              <td>1</td>
              <td><input placeholder="name"/></td>
              <td><input placeholder="Description"/></td>
              <td><input placeholder="Complete"/></td>
              <td>
                  <Update/>
                  <Delete/>
              </td>
          </tr>
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