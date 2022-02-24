import React from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop({ setImageFiles }) {
  const handleChange = (files) => {
    setImageFiles(files);
  };

  return (
    <FileUploader
      multiple={true}
      handleChange={handleChange}
      name="images"
      types={fileTypes}
    />
  );
}

export default DragDrop;
