import { Fragment, useEffect, useState } from "react";
import useHTMLtoReact from "hooks/use-html-react";
import { Field } from "formik";

export default function LocationInput({ name = "location", inputClassName }) {
	const [tag, setTag] = useState("");
	const filteredCode = useHTMLtoReact(tag);

	const handleChange = (e) => {
		setTag(e.target.value);
	};

	return (
		<Fragment>
			<span>You can get your HTML code here. </span>
			<button
				onClick={() => {
					window.open("https://google-map-generator.com/");
				}}>
				Get HTML Code
			</button>

			<Field name={name}>
				{({ form, field, meta }) => {
					const handleSetCode = () => {
						form.setFieldValue(field.name, filteredCode);
					};
					return (
						<Fragment>
							<input
								className={inputClassName}
								onChange={handleChange}
								placeholder="Paste code here."
							/>
							<button onClick={handleSetCode}>
								<span role="img" aria-label="location-pin">
									📍
								</span>{" "}
								Set Map
							</button>
						</Fragment>
					);
				}}
			</Field>
		</Fragment>
	);
}
