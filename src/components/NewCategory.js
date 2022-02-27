import React, { Fragment, useEffect, useState } from "react";
import { getCategories } from "../api/get-categories";
import CategoryInput from "./CategoryInput";
// import "@reach/checkbox/styles.css";

function NewCategory({ data, setData }) {
	const [categories, setCategories] = useState();
	const [categoriesChecked, setCategoriesChecked] = useState([]);
	const handleChange = (e) => {
		const cboxName = e.target.name;
		// console.log(cboxName);
		if (e.target.checked) {
			setCategoriesChecked([...categoriesChecked, cboxName]);
		} else if (!e.target.checked) {
			setCategoriesChecked(categoriesChecked.filter((c) => c !== e.target.name));
		}
	};
	console.log("categoriesChecked", categoriesChecked);

	useEffect(() => {
		getCategories()
			.then(({ data }) => setCategories(data.categories))
			.catch((error) => console.log(error));
	}, []);

	const onSubmitCategories = () => {
		setData({ ...data, categories: categoriesChecked });
	};

	return (
		<Fragment>
			<h3 className="mb-0">Category</h3>
			{categories ? (
				categories.map((category) => (
					<div key={`${category.name}:${category.id}`}>
						<CategoryInput {...category} handleChange={handleChange} value={category} />
					</div>
				))
			) : (
				<Fragment></Fragment>
			)}
			<button className="mt-3" onClick={onSubmitCategories}>
				Add Categories
			</button>
		</Fragment>
	);
}

export default NewCategory;
