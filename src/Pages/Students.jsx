import React, { useContext } from "react";
import GlobalContext from "../Hooks/GlobalContext";
import Student from "./Student";

const Students = () => {
  const { students, filter } = useContext(GlobalContext);
  //   console.log(students);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {students.map((el) =>
          filter === el.status || filter === 0 ? (
            <Student student={el} key={el.id} />
          ) : null
        )}
      </tbody>
    </table>
  );
};

export default Students;
