import { useEffect, useState } from "react";
import DragDrop from "./components/DragNDrop";
import "./styles.css";

const initialState = {
  title: "",
  description: "",
  maxCount: "",
  days: "",
  nights: "",
  category: "",
  salesPrice: "",
  regularPrice: "",
  discount: "",
  images: []
};

export default function App() {
  const [values, setValues] = useState(initialState);
  const [imageFiles, setImageFiles] = useState(null);

  const {
    title,
    description,
    maxCount,
    days,
    nights,
    category,
    salesPrice,
    regularPrice,
    discount,
    images
  } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const packageOffer = new FormData();
    packageOffer.append("title", title);
    packageOffer.append("description", description);
    packageOffer.append("maxCount", maxCount);
    packageOffer.append("days", days);
    packageOffer.append("nights", nights);
    packageOffer.append("category", category);
    packageOffer.append("salesPrice", salesPrice);
    packageOffer.append("regularPrice", regularPrice);
    packageOffer.append("discount", discount);
    packageOffer.append("images", images);

    console.log([...packageOffer][9][1]);
    return () => {};
  };

  useEffect(() => {
    if (imageFiles) {
      setValues({ ...values, images: imageFiles });
    }
  }, [imageFiles]);

  return (
    <form onSubmit={handleSubmit}>
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
      <div className="form-group">
        <DragDrop setImageFiles={setImageFiles} />
      </div>

      <button>Submit</button>
    </form>
  );
}
