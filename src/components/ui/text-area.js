import React, { Fragment } from "react";

const TextArea = ({
	errorMessage,
	labelTitle,
	name,
	handleChange,
	encased = false,
	labelClassName,
	inputClassName,
	placeholderNote,
	...rest
}) => {
	if (encased)
		return (
			<label className={labelClassName} htmlFor={name}>
				{labelTitle}
				<textarea
					className={inputClassName}
					name={name}
					onChange={handleChange}
					placeholder={placeholderNote}
					{...rest}
				/>
				;{errorMessage && <span>{errorMessage}</span>}
			</label>
		);
	return (
		<Fragment>
			<label className={labelClassName} htmlFor={name}>
				{labelTitle}
			</label>
			<textarea
				className={inputClassName}
				name={name}
				onChange={handleChange}
				placeholder={placeholderNote}
				{...rest}
			/>
			{errorMessage && <span>{errorMessage}</span>}
		</Fragment>
	);
};

export default TextArea;
