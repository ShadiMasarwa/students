import React, { useContext, useState } from "react";
import GlobalContext from "../Hooks/GlobalContext";

const Layout = (props) => {
  const { setFilter, students, setStudents } = useContext(GlobalContext);
  const handleChange = (id) => {
    setFilter(Number(id));
  };
  const std = {
    id: "",
    name: "",
    address: "",
    gender: "",
    image: "",
    age: 0,
    status: 0,
  };
  const [newStudent, setNewStudent] = useState({});
  const [errHidden, SetErrHidden] = useState(true);
  const [disableUpdate, setDisableUpdate] = useState(true);

  const handleEmptyFields = () => {
    const std = {
      id: "",
      name: "",
      address: "",
      gender: "",
      image: "",
      age: 0,
      status: 0,
    };
    setNewStudent(std);
    SetErrHidden(true);
  };

  const UpdateNewStudent = (Field, value) => {
    const temp = { ...newStudent };
    switch (Field) {
      case "id":
        temp.id = value;
        break;
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
    setNewStudent(temp);
    const found = students.find((std) => std.id === parseInt(temp.id));
    if (found) {
      SetErrHidden(false);
    } else {
      SetErrHidden(true);
    }
    if (CheckIfFullInfo(temp) && !found) setDisableUpdate(false);
    else setDisableUpdate(true);
  };

  const CheckIfFullInfo = (temp) => {
    return (
      temp.id.length &&
      temp.name.length &&
      temp.address.length &&
      (temp.gender === "male" || temp.gender === "female") &&
      temp.age
    );
  };

  const handleAddNew = () => {
    const num = Math.floor(Math.random() * 99);
    const gender = newStudent.gender === "male" ? "men" : "women";
    const imgUrl = `https://randomuser.me/portraits/thumb/${gender}/${num}.jpg`;
    const temp = { ...newStudent };
    temp.image = imgUrl;
    setStudents([...students, temp]);
  };

  return (
    <div className="container-fluid">
      <div
        className="bg-info p-2 d-flex justify-content-between align-items-center"
        style={{ height: "10vh" }}
      >
        <div>
          <button
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#AddModal"
            onClick={handleEmptyFields}
          >
            Add New Student
          </button>
        </div>
        <h3>Student Management App</h3>
        <div className="me-5">
          <select
            name="choice"
            style={{ width: "200px" }}
            onChange={(e) => handleChange(e.target.value)}
          >
            <option value="0">All</option>
            <option value="1">Present</option>
            <option value="2">Absent</option>
            <option value="3">Late</option>
            <option value="4">Sick</option>
          </select>
        </div>
      </div>
      <div
        className="p-2 container"
        style={{ height: "80vh", overflowY: "auto" }}
      >
        {props.children}
      </div>
      <div
        className="bg-dark p-2 d-flex justify-content-center align-items-center "
        style={{ height: "10vh" }}
      >
        <div style={{ color: "white" }}>All Rights Reserved &copy;</div>
      </div>
      {/* Edit Modal */}

      <div
        className="modal fade"
        id="AddModal"
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
                Add New Student
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
                  value={newStudent.id}
                  onChange={(e) => UpdateNewStudent("id", e.target.value)}
                />
                <label
                  className="form-label"
                  style={{ color: "red" }}
                  hidden={errHidden}
                >
                  ID already exist
                </label>
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
                  value={newStudent.name}
                  onChange={(e) => UpdateNewStudent("name", e.target.value)}
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
                  value={newStudent.address}
                  onChange={(e) => UpdateNewStudent("address", e.target.value)}
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
                  placeholder="male\female"
                  value={newStudent.gender}
                  onChange={(e) => UpdateNewStudent("gender", e.target.value)}
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
                  value={newStudent.age}
                  onChange={(e) => UpdateNewStudent("age", e.target.value)}
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
                onClick={handleAddNew}
                data-bs-dismiss="modal"
                disabled={disableUpdate}
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

export default Layout;
