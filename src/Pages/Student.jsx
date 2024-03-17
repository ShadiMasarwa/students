import { useContext } from "react";
import GlobalContext from "../Hooks/GlobalContext";

const Student = ({ student }) => {
  const { students, setStudents } = useContext(GlobalContext);
  const handleClick = (status) => {
    const temp = students.map((std) => {
      if (std.id === student.id) std.status = status;
      return std;
    });
    setStudents([...temp]);
  };
  return (
    <tr style={{ verticalAlign: "middle" }}>
      <td className="w-25">
        <img
          src={student.image}
          alt={student.name}
          style={{ width: 70, borderRadius: "50%" }}
        />
      </td>
      <td className="w-25">
        <h5>{student.id}</h5>
      </td>
      <td className="w-25">
        <h5>{student.name}</h5>
      </td>
      <td className="w-25">
        <div className="btn-group" role="group">
          <input
            type="radio"
            className="btn-check"
            name={`btnradio-${student.id}`}
            id={`btnradio1-${student.id}`}
            onClick={() => handleClick(1)}
            checked={student.status === 1 ? true : false}
          />
          <label
            className="btn btn-outline-success"
            htmlFor={`btnradio1-${student.id}`}
          >
            Present
          </label>

          <input
            type="radio"
            className="btn-check"
            name={`btnradio-${student.id}`}
            id={`btnradio2-${student.id}`}
            onClick={() => handleClick(2)}
            checked={student.status === 2 ? true : false}
          />
          <label
            className="btn btn-outline-danger"
            htmlFor={`btnradio2-${student.id}`}
          >
            Absent
          </label>

          <input
            type="radio"
            className="btn-check"
            name={`btnradio-${student.id}`}
            id={`btnradio3-${student.id}`}
            onClick={() => handleClick(3)}
            checked={student.status === 3 ? true : false}
          />
          <label
            className="btn btn-outline-primary"
            htmlFor={`btnradio3-${student.id}`}
          >
            Late
          </label>
          <input
            type="radio"
            className="btn-check"
            name={`btnradio-${student.id}`}
            id={`btnradio4-${student.id}`}
            onClick={() => handleClick(4)}
            checked={student.status === 4 ? true : false}
          />
          <label
            className="btn btn-outline-dark"
            htmlFor={`btnradio4-${student.id}`}
          >
            Sick
          </label>
        </div>
      </td>
    </tr>
  );
};

export default Student;
