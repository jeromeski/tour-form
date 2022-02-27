import React, { Fragment } from "react";

const Input = ({
	errorMessage,
	labelTitle,
	type,
	name,
	encased = false,
	labelClassName,
	inputClassName,
	placeholderNote,
	handleChange,
	...rest
}) => {
	if (encased)
		return (
			<label className={labelClassName} htmlFor={name}>
				{labelTitle}
				<input
					type={type}
					name={name}
					className={inputClassName}
					placeholder={placeholderNote}
					onChange={handleChange}
					{...rest}
				/>
				;{errorMessage && <span>{errorMessage}</span>}
			</label>
		);
	return (
		<Fragment>
			<label htmlFor={name} className={labelClassName}>
				{labelTitle}
			</label>
			<input
				type={type}
				name={name}
				className={inputClassName}
				placeholder={placeholderNote}
				onChange={handleChange}
				{...rest}
			/>
			{errorMessage && <span>{errorMessage}</span>}
		</Fragment>
	);
};

export default Input;
