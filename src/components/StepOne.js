import { Fragment, useEffect, useState } from "react";
import { useLogger } from "react-use";

let dataState = null;
const initialState = {
  title: "",
  description: "",
  maxCount: "",
  days: "",
  nights: "",
  category: "",
  salesPrice: "",
  regularPrice: "",
  discount: ""
};

export default function StepOne({ handleNext }) {
  useLogger("StepOne -->");
  const [data, setData] = useState({ ...(dataState || initialState) });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dataState = data;
  });

  console.log("StepOne DATA -->", data);

  return (
    <Fragment>
      <div className="form-group">
        <label className="label d-block">Title</label>
        <input
          className="input d-block"
          type="text"
          name="title"
          placeholder="Enter Title"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="label d-block">Description</label>
        <textarea
          className="text-area"
          type=""
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="label d-block">Group Size</label>
        <input
          className="input"
          type="number"
          name="maxCount"
          placeholder="No of Pax"
          onChange={handleChange}
          onKeyDown={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="label d-block">Trip Duration</label>
        <input
          className="input"
          type="number"
          name="days"
          placeholder="Days"
          onChange={handleChange}
          onKeyDown={handleChange}
        />
        <input
          className="input"
          type="number"
          name="nights"
          placeholder="Nights"
          onChange={handleChange}
          onKeyDown={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="label d-block">Category</label>
        <select
          defaultValue="Choose One"
          name="category"
          onChange={handleChange}
        >
          <option value="Choose One" disabled="disabled">
            Choose One
          </option>
          <option value="Adult">Adult</option>
          <option value="child">Child</option>
          <option value="couple">Couple</option>
        </select>
      </div>
      <div className="form-group">
        <label className="label d-block">Sales Price</label>
        <input
          className="input"
          type="number"
          name="salesPrice"
          placeholder="Sales Price"
          onChange={handleChange}
          onKeyDown={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="label d-block">Regular Price</label>
        <input
          className="input"
          type="number"
          name="regularPrice"
          placeholder="Regular Price"
          onChange={handleChange}
          onKeyDown={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="label d-block">Discount</label>
        <input
          className="input"
          type="number"
          name="discount"
          placeholder="Discount"
          onChange={handleChange}
          onKeyDown={handleChange}
        />
      </div>
      <button onClick={() => handleNext(data)}>Next</button>
    </Fragment>
  );
}
