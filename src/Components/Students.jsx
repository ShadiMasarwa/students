import React, { useContext, useState } from "react";
import GlobalContext from "../Hooks/GlobalContext";
import Student from "./Student";

const Students = () => {
  const { students, setStudents, filter } = useContext(GlobalContext);
  const [currStudent, setCurrStudent] = useState({});

  const handleEdit = (id) => {
    const temp = students.find((el) => el.id === id);
    setCurrStudent(temp);
  };

  const handleUpade = () => {
    const temp = students.map((st) =>
      st.id === currStudent.id ? currStudent : st
    );
    setStudents(temp);
  };

  const UpdateTempStudent = (Field, value) => {
    const temp = { ...currStudent };
    switch (Field) {
      case "name":
        temp.name = value;
        break;
      case "address":
        temp.address = value;
        break;
      case "gender":
        temp.gender = value;
        break;
      case "age":
        temp.age = value;
        break;
      default:
        break;
    }
    setCurrStudent(temp);
  };
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" style={{ textAlign: "center" }}>
              Delete
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Edit
            </th>
            <th scope="col">Image</th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((el) =>
            filter === el.status || filter === 0 ? (
              <Student student={el} handleEdit={handleEdit} key={el.id} />
            ) : null
          )}
        </tbody>
      </table>
      {/* Edit Modal */}

      <div
        className="modal fade"
        id="EditModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 " id="staticBackdropLabel">
                Edit Student Info
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label
                  htmlFor="IDInput"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="IDInput"
                  placeholder="Id number"
                  value={currStudent.id}
                  disabled="true"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="NameInput"
                  className="form-label "
                  style={{ fontWeight: "bold" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="NameInput"
                  placeholder="Full Name"
                  value={currStudent.name}
                  onChange={(e) => UpdateTempStudent("name", e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="AddressInput"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="AddressInput"
                  placeholder="Address Name"
                  value={currStudent.address}
                  onChange={(e) => UpdateTempStudent("address", e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="GenderInput"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Gender
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="GenderInput"
                  placeholder="Gender"
                  value={currStudent.gender}
                  onChange={(e) => UpdateTempStudent("gender", e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="AgeInput"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="AgeInput"
                  placeholder="Age"
                  value={currStudent.age}
                  onChange={(e) => UpdateTempStudent("age", e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleUpade}
                data-bs-dismiss="modal"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
