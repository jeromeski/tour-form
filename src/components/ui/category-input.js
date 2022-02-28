import { CustomCheckbox } from "@reach/checkbox";
import { useToggle } from "react-use";

export default function CategoryInput({ name, handleChange, ...props }) {
	const [checked, toggle] = useToggle(false);

	const handleCheck = (e) => {
		toggle();
		handleChange(e);
	};

	return (
		<label>
			{name}
			<CustomCheckbox name={name} checked={checked} {...props} onChange={handleCheck} />
		</label>
	);
}
