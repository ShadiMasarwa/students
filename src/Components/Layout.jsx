import React from "react";

const Layout = (props) => {
  return (
    <div className="container-fluid">
      <div className="bg-info p-2" style={{ height: "15vh" }}></div>
      <div
        className="p-2 container"
        style={{ height: "75vh", overflowY: "scroll" }}
      >
        {props.children}
      </div>
      <div className="bg-dark p-2" style={{ height: "10vh" }}></div>
    </div>
  );
};

export default Layout;
