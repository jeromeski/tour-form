import React, { Fragment } from "react";
import { capitalizeFirstLetter, getObjectValue } from "utils";

const TextArea = ({
	name,
	encased = false,
	labelClassName,
	inputClassName,
	placeholderNote,
	handleChange,
	handleBlur,
	touched,
	errors
}) => {
	if (encased)
		return (
			<label className={labelClassName} htmlFor={name}>
				{capitalizeFirstLetter(name)}
				<textarea
					className={inputClassName}
					name={name}
					placeholder={placeholderNote}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				<div className="text-danger">
					{errors && touched[getObjectValue(touched, name)] ? (
						<span>{errors[getObjectValue(errors, name)]}</span>
					) : (
						<span>&nbsp;</span>
					)}
				</div>
			</label>
		);
	return (
		<Fragment>
			<label className="d-block text-muted" htmlFor={name}>
				{capitalizeFirstLetter(name)}
			</label>
			<textarea
				className={inputClassName}
				name={name}
				placeholder={placeholderNote}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<small className="text-danger d-block" style={{ height: "1rem" }}>
				{errors && touched[getObjectValue(touched, name)]
					? errors[getObjectValue(errors, name)]
					: ""}
			</small>
		</Fragment>
	);
};

export default TextArea;
