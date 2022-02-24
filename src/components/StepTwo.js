import { Fragment, useState } from "react";
import DragDrop from "./DragNDrop";

export default function StepTwo({
  setImageFiles,
  handleSubmit,
  values,
  setValues,
  handlePrev
}) {
  const [programTitle, setProgramTitle] = useState();
  const [programDescription, setProgramDescription] = useState();

  const handleProgram = () => {
    // setValues(({programs}) => ({...values, programs: programs.push({programTitle, programDescription})}))

    const programsData = { programTitle, programDescription };
    setValues(({ programs }) => ({
      ...values,
      programs: [...programs, programsData]
    }));
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
          onChange={(e) => setProgramTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="label d-block">Program Description</label>
        <textarea
          className="text-area"
          name="programDescription"
          placeholder="Description"
          onChange={(e) => setProgramDescription(e.target.value)}
        />
        <button onClick={handleProgram}>Add Program</button>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handlePrev}>Back</button>
    </Fragment>
  );
}
