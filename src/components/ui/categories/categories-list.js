import React, { Fragment, useEffect } from "react";
import CategoryCheckbox from "./categories-checkbox";

function CategoryList({ categories, labelClassName, handleCheckedCategories, onCheckboxChange }) {
	return (
		<Fragment>
			<label className={labelClassName}>Category</label>
			{categories &&
				categories.map((category) => (
					<div key={`${category.name}:${category.id}`}>
						<CategoryCheckbox
							name={category.name}
							onCheckboxChange={onCheckboxChange}
							{...category}
						/>
					</div>
				))}
			<button type="button" className="mt-3" onClick={handleCheckedCategories}>
				Add Categories
			</button>
		</Fragment>
	);
}

export default CategoryList;

/*
<CategoryInput {...category} handleChange={handleChange} value={category} />
*/
