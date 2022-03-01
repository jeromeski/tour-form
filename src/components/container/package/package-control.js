import { useState } from "react";

import PackageFormFlow from "./package-form-flow";
import StepOne from "components/package/step-one";
import StepTwo from "components/package/step-two";

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

export default function PackageControl() {
	// useLogger("PackageControl => ");
	const [values, setValues] = useState(initialState);
	const [currentIndex, setCurrentIndex] = useState(0);

	const {
		title,
		description,
		maxCount,
		days,
		nights,
		category,
		salesPrice,
		regularPrice,
		discount,
		images,
		programs,
		location,
		categories
	} = values;

	const handleSubmit = (e) => {
		e.preventDefault();
		const packageOffer = new FormData();
		packageOffer.append("title", title);
		packageOffer.append("description", description);
		packageOffer.append("maxCount", maxCount);
		packageOffer.append("days", days);
		packageOffer.append("nights", nights);
		packageOffer.append("category", category);
		packageOffer.append("salesPrice", salesPrice);
		packageOffer.append("regularPrice", regularPrice);
		packageOffer.append("discount", discount);
		packageOffer.append("images", images);
		packageOffer.append("programs", programs);
		packageOffer.append("location", location);
		packageOffer.append("categories", categories);

		console.log([...packageOffer]);
	};

	const handleNext = (data) => {
		if (currentIndex < 1) {
			setValues({ ...values, ...data });
			setCurrentIndex(currentIndex + 1);
			return;
		}
		return;
	};

	const handlePrev = () => {
		if (currentIndex <= 1) {
			setCurrentIndex(currentIndex - 1);
			return;
		}
	};

	return (
		<PackageFormFlow currentIndex={currentIndex}>
			<StepOne
			// handleNext={handleNext}
			// values={values}
			/>
			<StepTwo
				setValues={setValues}
				handlePrev={handlePrev}
				handleNext={handleNext}
				values={values}
			/>
		</PackageFormFlow>
	);
}
