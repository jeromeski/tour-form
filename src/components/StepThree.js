import { Fragment } from "react";

export default function StepThree({ handleSubmit, handlePrev }) {
  return (
    <Fragment>
      <h1>Are you sure you wanna submit?</h1>
      <button onClick={handlePrev}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </Fragment>
  );
}
