import { useEffect, useState } from "react";
import PackageFormFlow from "./components/PackageFormFlow";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import "./styles.css";

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

export default function App() {
  const [values, setValues] = useState(initialState);
  const [imageFiles, setImageFiles] = useState(null);
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
    images
  } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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

    console.log([...packageOffer][9][1]);
    return () => {};
  };

  useEffect(() => {
    if (imageFiles) {
      setValues({ ...values, images: imageFiles });
    }
  }, [imageFiles]);

  const handleNext = () => {
    if (currentIndex < 1) {
      setCurrentIndex(currentIndex + 1);
      return;
    }
  };

  return (
    <PackageFormFlow currentIndex={currentIndex} handleSubmit={handleSubmit}>
      <StepOne handleNext={handleNext} handleChange={handleChange} />
      <StepTwo handleChange={handleChange} setImageFiles={setImageFiles} />
    </PackageFormFlow>
  );
}
