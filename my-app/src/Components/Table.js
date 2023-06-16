import Save from "./Save";
import Update from "./Update";
import Delete from "./Delete";

const Table = () => {
    return(
  <div className="table">
      <table>
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Complete</th>
              <th>Action</th>
          </tr>
          <tr>
              <td>1</td>
              <td>Make Table</td>
              <td>Make react table</td>
              <td>False</td>
              <td><Update/> <Delete/></td>
          </tr>
      </table>
  </div>
    )
};

export default Table