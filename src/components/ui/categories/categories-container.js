import { getCategories } from "api";
import { Field } from "formik";
import React, { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.development";
import CategoriesList from "./categories-list";

function CategoriesContainer({ name, labelClassName }) {
  const [categories, setCategories] = useState();
  const [categoriesChecked, setCategoriesChecked] = useState([]);

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
          form.setFieldTouched(field.name, true);
          form.setFieldValue(field.name, categoriesChecked);
        };

        const onCheckboxChange = (e) => {
          const cboxName = e.target.name;
          // form.setFieldTouched(field.name, true);
          if (e.target.checked) {
            setCategoriesChecked([...categoriesChecked, cboxName]);
          } else if (!e.target.checked) {
            setCategoriesChecked(
              categoriesChecked.filter((c) => c !== e.target.name)
            );
          }
        };
        return (
          <Fragment>
            <CategoriesList
              categories={categories}
              labelClassName={labelClassName}
              handleCheckedCategories={handleCheckedCategories}
              onCheckboxChange={onCheckboxChange}
            />
            <small className="text-danger d-block" style={{ height: "1rem" }}>
              {meta.error && meta.touched ? meta.error : ""}
            </small>
          </Fragment>
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
