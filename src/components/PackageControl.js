import { useState } from "react";
import { useLogger } from "react-use";
import PackageFormFlow from "./PackageFormFlow";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

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
  programs: []
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
    programs
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

    console.log([...packageOffer]);
  };

  const handleNext = (data) => {
    if (currentIndex < 2) {
      setValues({ ...values, ...data });
      setCurrentIndex(currentIndex + 1);
      return;
    }
    return;
  };

  const handlePrev = () => {
    if (currentIndex <= 2) {
      setCurrentIndex(currentIndex - 1);
      return;
    }
  };
  console.log("Values -->", values);

  return (
    <PackageFormFlow currentIndex={currentIndex}>
      <StepOne handleNext={handleNext} />
      <StepTwo
        setValues={setValues}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
      <StepThree handleSubmit={handleSubmit} handlePrev={handlePrev} />
    </PackageFormFlow>
  );
}
