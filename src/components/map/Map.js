import { useState } from "react";
import Parser from "html-react-parser";

import useHTMLtoReact from "../../hooks/use-html-react";
import LocationInput from "../LocationInput";

export default function Map() {
  const [tag, setTag] = useState(
    '<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">embed map in email</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>'
  );
  const [data, setData] = useState();
  const map = useHTMLtoReact(tag);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const onSetTag = () => {
    setTag(data);
    setData("");
  };

  console.log(data);
  return (
    <div className="map">
      <LocationInput handleChange={handleChange} onSetTag={onSetTag} />
      <div className="map-wrapper">{map && Parser(map)}</div>
    </div>
  );
}
