import { Fragment, useState } from "react";
import DragDrop from "./DragNDrop";

export default function StepTwo({
  setImageFiles,
  handleSubmit,
  values,
  setValues
}) {
  const [programs, setPrograms] = useState([]);

  const handleProgram = (e) => {
    setPrograms();
  };

  return (
    <Fragment>
      <div className="form-group">
        <DragDrop setImageFiles={setImageFiles} />
      </div>
      <div className="form-group">
        <label className="label d-block">Program Title</label>
        <input
          className="input d-block"
          type="text"
          name="programTitle"
          placeholder="Enter Title"
          onChange={handleProgram}
        />
      </div>
      <div className="form-group">
        <label className="label d-block">Program Description</label>
        <textarea
          className="text-area"
          name="programDescription"
          placeholder="Description"
          onChange={handleProgram}
        />
        <button
          onClick={() =>
            setValues({ ...values, programs: [...programs, programs] })
          }
        >
          Add Program
        </button>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </Fragment>
  );
}
