import { useState } from "react";
import "./App.css";
import Students from "./Pages/Students";
import GlobalContext from "./Hooks/GlobalContext";
import data from "./students.json";
import Layout from "./Components/Layout";

function App() {
  const [students, setStudents] = useState(data.students);
  const [filter, setFilter] = useState(0);

  return (
    <div className="">
      <GlobalContext.Provider
        value={{ students, setStudents, filter, setFilter }}
      >
        <Layout>
          <Students />
        </Layout>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
