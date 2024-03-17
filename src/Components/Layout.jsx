import React, { useContext } from "react";
import GlobalContext from "../Hooks/GlobalContext";

const Layout = (props) => {
  const { filter, setFilter } = useContext(GlobalContext);
  const handleChange = (id) => {
    console.log(id);
    setFilter(Number(id));
  };

  return (
    <div className="container-fluid">
      <div
        className="bg-info p-2 d-flex justify-content-between align-items-center"
        style={{ height: "10vh" }}
      >
        <div>Hello</div>
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
    </div>
  );
};

export default Layout;
