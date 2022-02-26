import { Fragment, useEffect, useState } from "react";
import useHTMLtoReact from "../hooks/use-html-react";

export default function LocationInput({ setData, data }) {
  const [tag, setTag] = useState("");
  const [code, setCode] = useState("");
  const map = useHTMLtoReact(code);

  const handleChange = (e) => {
    setTag(e.target.value);
  };

  const onSetCode = () => {
    setData({ ...data, location: map });
  };

  useEffect(() => {
    if (map) {
      onSetCode();
    }
  }, [map]);

  return (
    <Fragment>
      <div className="form-group">
        <div className="form-group-item">
          <span>You can get your HTML code here. </span>
          <button
            onClick={() => {
              window.open("https://google-map-generator.com/");
            }}
          >
            Get HTML Code
          </button>
        </div>
      </div>
      <div className="form-group">
        <input
          name="location"
          onChange={handleChange}
          placeholder="Paste code here."
        />
        <button onClick={() => setCode(tag)}>
          <span role="img" aria-label="location-pin">
            📍
          </span>{" "}
          Set Map
        </button>
      </div>
    </Fragment>
  );
}
