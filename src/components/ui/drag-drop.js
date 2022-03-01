import React, { Fragment, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Field } from "formik";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
	return (
		<Field name="images">
			{({ form: { setFieldValue, setTouched, values }, field: { name, ...field }, meta }) => {
				const handleChange = (images) => {
					setFieldValue(name, Array.from(images));
				};
				return (
					<div className="drag-n-drop">
						<FileUploader multiple={true} handleChange={handleChange} name={name} />
						{field.value.length ? (
							<small className="text-success">You have uploaded {field.value.length} files</small>
						) : null}
						<small className="text-danger d-block" style={{ height: "1rem" }}>
							{meta.error && meta.touched ? meta.error : ""}
						</small>
					</div>
				);
			}}
		</Field>
	);
}

export default DragDrop;
