import React, { Fragment } from "react";
import { Formik } from "formik";
import { validationSchema } from "validation/add-package";

const initialState = {
	title: "",
	description: "",
	maxCount: "",
	days: "",
	nights: "",
	category: "",
	salesPrice: "",
	regularPrice: "",
	discount: "",
	images: [],
	programs: [],
	location: "",
	categories: []
};

export default function PackageFormFlow({ children, currentIndex }) {
	const currentChild = React.Children.toArray(children)[currentIndex];
	console.log(currentIndex);
	return (
		<Formik initialValues={initialState} validationSchema={validationSchema}>
			{(formik) => React.cloneElement(currentChild, formik)}
		</Formik>
	);
}
