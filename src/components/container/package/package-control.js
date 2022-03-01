import { useState } from "react";
import PackageFormFlow from "./package-form-flow";
import StepOne from "components/package/step-one";
import StepTwo from "components/package/step-two";

export default function PackageControl() {
	// useLogger("PackageControl => ");
	const [currentIndex, setCurrentIndex] = useState(0);

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

	const handleNext = (e) => {
		e.preventDefault();
		if (currentIndex < 1) {
			setCurrentIndex(currentIndex + 1);
			return;
		}
	};

	const handlePrev = () => {
		if (currentIndex <= 1) {
			setCurrentIndex(currentIndex - 1);
			return;
		}
	};

	return (
		<PackageFormFlow currentIndex={currentIndex}>
			<StepOne handleNext={handleNext} />
			<StepTwo handlePrev={handlePrev} handleNext={handleNext} />
		</PackageFormFlow>
	);
}
