import { Field } from "formik";
import React, { Fragment, useState } from "react";

const categoryOptions = [
	{ key: "adult", value: "Adult" },
	{ key: "child", value: "Child" },
	{ key: "couple", value: "Couple" }
];

function Select({ name, labelTitle = "Category", labelClassName = "d-block text-muted" }) {
	return (
		<Fragment>
			<label htmlFor={name} className={labelClassName}>
				{labelTitle}
			</label>
			<Field name={name} className="text-muted">
				{({ field: { value = "Choose One", ...field }, form, meta }) => (
					<Fragment>
						<select {...field} value={value}>
							<option value="" disabled>
								Choose One
							</option>
							{categoryOptions.map((category) => (
								<option key={`select:${category.key}`} value={category.value}>
									{category.value}
								</option>
							))}
						</select>
						<small className="text-danger d-block" style={{ height: "1rem" }}>
							{meta.error && meta.touched ? meta.error : ""}
						</small>
					</Fragment>
				)}
			</Field>
		</Fragment>
	);
}

export default Select;

/*
<option value="Adult">Adult</option>
<option value="child">Child</option>
<option value="couple">Couple</option>


			<select
				defaultValue={placeholderNote}
				name={name}
				value={values.category}
				onChange={handleChange}>
				<option value="Choose One" disabled="disabled">
					Choose One
				</option>
				{options &&
					options.map((option) => {
						<option key={`form:select:${option.key}`} value={option.value}>
							{option.value}
						</option>;
					})}
			</select>
			{errors && touched[getObjectValue(touched, name)] ? (
				<span className="text-danger d-block">{errors[getObjectValue(errors, name)]}</span>
			) : (
				<span className="d-block">&nbsp;</span>
			)}

      <option value="" disabled={true}>
					Choose One
				</option>
				{categoryOptions.map((category, idx) => (
					<option key={category.key + idx} value={category.value}>
						{category.value}
					</option>
				))}
*/

// sa loob ng Field na render fn gumawa ng select
