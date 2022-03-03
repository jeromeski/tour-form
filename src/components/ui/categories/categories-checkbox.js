import { CustomCheckbox } from "@reach/checkbox";
import React from "react";
import { useToggle } from "react-use";

export default function CategoryCheckbox({ name, onCheckboxChange }) {
	const [checked, toggle] = useToggle(false);

	const handleChange = (e) => {
		toggle();
		onCheckboxChange(e);
	};

	return (
		<label>
			{name}
			<CustomCheckbox name={name} checked={checked} onChange={(e) => handleChange(e)} />
		</label>
	);
}
