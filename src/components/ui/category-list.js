import React, { Fragment, useEffect, useState } from "react";
import { getCategories } from "api/index";
// import CategoryInput from "components/ui/category-checkbox";
// import "@reach/checkbox/styles.css";

function CategoryList({ data, setData, labelClassName }) {
	const [categories, setCategories] = useState();
	const [categoriesChecked, setCategoriesChecked] = useState([]);
	const handleChange = (e) => {
		const cboxName = e.target.name;
		if (e.target.checked) {
			setCategoriesChecked([...categoriesChecked, cboxName]);
		} else if (!e.target.checked) {
			setCategoriesChecked(categoriesChecked.filter((c) => c !== e.target.name));
		}
	};
	console.log("categoriesChecked", categoriesChecked);

	useEffect(() => {
		getCategories()
			.then(({ data }) => {
				setCategories(data.categories);
			})
			.catch((error) => console.log(error));
	}, []);

	const onSubmitCategories = () => {
		setData({ ...data, categories: categoriesChecked });
	};

	return (
		<Fragment>
			<label className={labelClassName}>Category</label>
			{categories ? (
				categories.map((category) => (
					<div key={`${category.name}:${category.id}`}>
						<CustomCheckbox />
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

export default CategoryList;

/*
<CategoryInput {...category} handleChange={handleChange} value={category} />
*/
