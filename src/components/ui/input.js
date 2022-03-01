import React, { Fragment } from "react";
import { capitalizeFirstLetter, getObjectValue } from "utils";

const Input = ({
	type,
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
			<label className={`text-muted ${labelClassName ? labelClassName : "d-block"}`} htmlFor={name}>
				{capitalizeFirstLetter(name)}
				<input
					type={type}
					name={name}
					className={inputClassName}
					placeholder={placeholderNote}
					onChange={handleChange}
					onblur={handleBlur}
				/>
				{errors && touched[getObjectValue(touched, name)] ? (
					<span className="text-danger d-block">{errors[getObjectValue(errors, name)]}</span>
				) : (
					<span className="d-block">&nbsp;</span>
				)}
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
			<input
				type={type}
				name={name}
				className={inputClassName}
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

export default Input;
