import { Fragment, useEffect, useState } from "react";
import { useLogger } from "react-use";
import DragDrop from "./DragNDrop";

let dataCache = null;
let initialState = {
  images: [],
  programs: []
};

export default function StepTwo({ setValues, handlePrev, handleNext }) {
  useLogger("StepTwo -->");
  // Ilagay sa iisang programState
  const [programs, setPrograms] = useState({
    programTitle: "",
    programDescription: ""
  });

  const [data, setData] = useState(dataCache || initialState);

  const handleChange = (e) => {
    setPrograms({ ...programs, [e.target.name]: e.target.value });
  };

  const resetPrograms = () => {
    setPrograms({
      programTitle: "",
      programDescription: ""
    });
  };

  const handleAddProgram = () => {
    setData((prev) => ({ ...data, programs: [...prev.programs, programs] }));
    resetPrograms();
  };

  const handleAddImages = (files) => {
    setData((prev) => ({ ...data, images: [...prev.images, files] }));
  };

  console.log("Programs -->", programs, "Data -->", data);
  console.log("StepTwo DATA -->", data);

  useEffect(() => {
    dataCache = data;
  });

  return (
    <Fragment>
      <div className="form-group">
        <DragDrop handleAddImages={handleAddImages} />
      </div>
      <div className="form-group">
        <label className="label d-block">Program</label>
        <input
          className="input d-block"
          type="text"
          name="programTitle"
          value={programs.programTitle}
          placeholder="Enter Title"
          onChange={handleChange}
        />
        <textarea
          className="text-area"
          name="programDescription"
          placeholder="Description"
          value={programs.programDescription}
          onChange={handleChange}
        />
        <button onClick={handleAddProgram}>Add Program</button>
      </div>
      <div className="mt-5">
        <button onClick={handlePrev}>Back</button>
        <button
          onClick={() => {
            if (data === null) {
              console.log(data);
            }
            handleNext(data);
          }}
        >
          HandleNext
        </button>
      </div>
    </Fragment>
  );
}
