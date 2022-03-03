import * as Yup from "yup";
const { reach } = Yup;

export const validationSchema = Yup.object({
	title: Yup.string()
		.required("Title is required.")
		.min(3, "Must be at least 3 characters.")
		.max(50, "Must not exceed 50 characters."),
	description: Yup.string()
		.required("Description is required.")
		.min(50, "Must be at least 50 characters."),
	maxCount: Yup.number().required("Group size is required."),
	days: Yup.number().required("Days is required."),
	nights: Yup.number().required("Nights is required."),
	category: Yup.string().required("Category is required."),
	salesPrice: Yup.number().required("Sales Price is required."),
	regularPrice: Yup.number().required("Regular Price is required."),
	discount: Yup.number().required("Discount is required."),
	images: Yup.array().required("Images is required").min(3, "At least 3 images are required"),
	programs: Yup.array().of(
		Yup.object({
			title: Yup.string().required("Title is required"),
			// .max(50, "You have exceeded max number of characters"),
			description: Yup.string().required("Description is required")
			// .min(160, "At least 160 characters required")
		})
	),
	keywords: Yup.array().min(1, "You need to have at least one keyword.")
});