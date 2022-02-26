import { Fragment, useEffect, useState } from "react";
import { useLogger } from "react-use";
import DragDrop from "./DragNDrop";
import LocationInput from "./LocationInput";

let dataCache = null;
let initialState = {
  images: [],
  programs: [],
  location: ""
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
    setData((prev) => ({ ...data, images: { ...prev.images, files } }));
  };

  useEffect(() => {
    dataCache = data;
  });

  console.log("Programs -->", programs);
  console.log("StepTwo DATA -->", data);

  return (
    <Fragment>
      <div className="form-group mb-3">
        <DragDrop handleAddImages={handleAddImages} />
      </div>
      <div className="form-group mb-3">
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
      <LocationInput setData={setData} data={data} />
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
