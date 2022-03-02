import React, { Fragment } from "react";
import { capitalizeFirstLetter, getObjectValue } from "utils";

const TextArea = ({
	name,
	labelTitle,
	encased = false,
	removeLabel,
	inputClassName,
	labelClassName,
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
			{labelTitle && (
				<label
					htmlFor={name}
					className={`text-muted ${labelClassName ? labelClassName : "d-block"}`}>
					{capitalizeFirstLetter(labelTitle)}
				</label>
			)}
			{!labelTitle && !removeLabel && (
				<label
					htmlFor={name}
					className={`text-muted ${labelClassName ? labelClassName : "d-block"}`}>
					{capitalizeFirstLetter(name)}
				</label>
			)}
			{removeLabel && <label></label>}
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
