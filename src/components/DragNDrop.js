import React from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop({ handleAddImages }) {
  const handleChange = (files) => {
    handleAddImages(files);
  };

  return (
    <FileUploader
      id="images"
      multiple={true}
      handleChange={handleChange}
      types={fileTypes}
      name="images"
    />
  );
}

export default DragDrop;
