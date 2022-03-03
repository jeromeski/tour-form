import { getCategories } from "api";
import { Field } from "formik";
import React, { useEffect, useState } from "react";
import CategoriesList from "./categories-list";

function CategoriesContainer({ name, labelClassName }) {
	const [categories, setCategories] = useState();
	const [categoriesChecked, setCategoriesChecked] = useState([]);

	const onCheckboxChange = (e) => {
		const cboxName = e.target.name;
		if (e.target.checked) {
			setCategoriesChecked([...categoriesChecked, cboxName]);
		} else if (!e.target.checked) {
			setCategoriesChecked(categoriesChecked.filter((c) => c !== e.target.name));
		}
	};

	useEffect(() => {
		getCategories()
			.then(({ data }) => {
				setCategories(data.categories);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<Field name={name}>
			{({ form, field, meta }) => {
				console.log("CategoriesList -->", form, field, meta);
				const handleCheckedCategories = () => {
					form.setFieldValue(field.name, [...field.value, categoriesChecked]);
				};
				return (
					<CategoriesList
						categories={categories}
						form={form}
						field={field}
						meta={meta}
						labelClassName={labelClassName}
						handleCheckedCategories={handleCheckedCategories}
						onCheckboxChange={onCheckboxChange}
					/>
				);
			}}
		</Field>
	);
}

export default CategoriesContainer;

/*
const onCheckboxChange = (e) => {
					const cboxName = e.target.name;
					if (e.target.checked) {
						form.setFieldValue(name, [...field.value, cboxName]);
					} else if (!e.target.checked) {
						form.setFieldValue(
							name,
							field.value.filter((c) => c !== e.target.name)
						);
					}
				};
*/
