import React, { Fragment, useState } from "react";
import { Field } from "formik";
import _ from "lodash";

const isEmpty = _.isEmpty;

// lodash isEmpty

function ProgramsInput({
	name = "programs",
	inputClassName = "form-group",
	textAreaClassName = "form-group",
	inputTitle = "Program Title",
	textAreaTitle = "Program Description"
}) {
	const [program, setProgram] = useState({});

	return (
		<Field name={name}>
			{({ form, field, meta }) => {
				const handleAddProgram = () => {
					const newProgram = [...field.value, inputData];
					form.setFieldValue(name, Array.from(newProgram));
				};

				const handleChange = (e) => {
					setProgram((prev) => ({ ...prev, [e.target.name]: e.target.value }));
				};

				return (
					<Fragment>
						<div>
							<div>
								<label className="text-muted">{inputTitle}</label>
								<input
									name={program.programTitle}
									type="text"
									className={inputClassName}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label className="text-muted">{textAreaTitle}</label>
								<textarea
									name="programDescription"
									className={textAreaClassName}
									onChange={handleChange}
								/>
							</div>
							<button type="button" onClick={handleAddProgram}>
								Add Program
							</button>
						</div>
						<small className="text-danger d-block" style={{ height: "1rem" }}>
							{meta.error && meta.touched ? meta.error : ""}
						</small>
					</Fragment>
				);
			}}
		</Field>
	);
}

export default ProgramsInput;
