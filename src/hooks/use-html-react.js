import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { isHtml } from "../utils";

export default function useHTMLtoReact(code) {
  const [map, setMap] = useState();

  const getIframeTag = () => {
    if (!isHtml(code)) {
      toast.error("Something is wrong with your html code.");
      return;
    }

    const extract = code.match(/<iframe.*>/)[0].match(/^(.*?)<\/iframe>/);
    // const iframe = extract[0].match(/^(.*?)<\/iframe>/);
    // return iframe[0];
    // console.log(typeof extract[0])
    setMap(extract[0]);
  };

  useEffect(() => {
    if (code) {
      getIframeTag();
    }
  }, [code]);

  return map;
}
