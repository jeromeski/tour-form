import { Field, FieldArray } from "formik";
import { remove } from "lodash";
import React, { Fragment, useState } from "react";

function TestInput() {
	const [currentIdx, setCurrentIdx] = useState(0);

	const handlePush = (push) => {
		push("");
		setCurrentIdx((prev) => prev + 1);
	};

	const handleConfirm = (push, remove) => {
		const result = confirm("Do you want to add another program?");
		console.log(result);
		if (result) {
			push({ title: "", description: "" });
			setCurrentIdx((prev) => prev + 1);
			return;
		} else {
			remove(currentIdx + 1);
		}
	};
	return (
		<Fragment>
			<FieldArray name="programs">
				{({ insert, push, remove, ...props }) => {
					console.log(props);
					return (
						<Fragment>
							<Field name={`programs.${currentIdx}.title`}>
								{({ form, field, meta }) => {
									return (
										<Fragment>
											<label
												htmlFor={`programs.${currentIdx}.title`}
												className="d-block text-muted">
												Title
											</label>
											<input type="text" {...field} />
											<small className="text-danger d-block" style={{ height: "1rem" }}>
												{meta.error && meta.touched ? meta.error : ""}
											</small>
										</Fragment>
									);
								}}
							</Field>
							<Field name={`programs.${currentIdx}.description`}>
								{({ form, field, meta }) => {
									return (
										<Fragment>
											<label
												htmlFor={`programs.${currentIdx}.description`}
												className="d-block text-muted">
												Description
											</label>
											<textarea {...field} />
											<small className="text-danger d-block" style={{ height: "1rem" }}>
												{meta.error && meta.touched ? meta.error : ""}
											</small>
										</Fragment>
									);
								}}
							</Field>
							<button type="button" onClick={() => handleConfirm(push, remove)}>
								+ Add Another
							</button>
						</Fragment>
					);
				}}
			</FieldArray>
		</Fragment>
	);
}

export default TestInput;

/*
<Field name="programTitle">
				{({ form, field, meta }) => {
					return (
						<Fragment>
							<input {...field} />
							<small className="text-danger d-block" style={{ height: "1rem" }}>
								{meta.error && meta.touched ? meta.error : ""}
							</small>
						</Fragment>
					);
				}}
			</Field>
			<Field name="programDescription">
				{({ form, field, meta }) => {
					return (
						<Fragment>
							<textarea {...field} />
							<small className="text-danger d-block" style={{ height: "1rem" }}>
								{meta.error && meta.touched ? meta.error : ""}
							</small>
						</Fragment>
					);
				}}
			</Field>
*/
