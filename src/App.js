import { useState } from "react";
import "./App.css";
import Students from "./Pages/Students";
import GlobalContext from "./Hooks/GlobalContext";
import data from "./students.json";
import Layout from "./Components/Layout";

function App() {
  const [students, setStudents] = useState(data.students);

  return (
    <div className="">
      <GlobalContext.Provider value={{ students, setStudents }}>
        <Layout>
          <Students />
        </Layout>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
