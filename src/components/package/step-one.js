import { Fragment, useEffect, useState } from "react";
import { useLogger } from "react-use";
import Input from "components/ui/input.js";
import TextArea from "components/ui/text-area.js";

let dataState = null;
const initialState = {
	title: "",
	description: "",
	maxCount: "",
	days: "",
	nights: "",
	category: "",
	salesPrice: "",
	regularPrice: "",
	discount: ""
};

export default function StepOne({ handleNext, values }) {
	useLogger("StepOne -->");
	const [data, setData] = useState({ ...(dataState || initialState) });

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		dataState = data;
	});

	return (
		<Fragment>
			<div className="container p-5">
				<div className="row">
					<div className="col-md-6">
						<fieldset className="p-3">
							<div className="form-group mb-2">
								<Input
									type="text"
									name="title"
									labelTitle="Title"
									labelClassName="d-block"
									inputClassName="input d-block"
									placeholderNote="Enter Title"
									handleChange={handleChange}
									encased={false}
									errorMessage=""
								/>
							</div>
							<div className="form-group mb-2">
								<TextArea
									inputClassName="text-area"
									name="description"
									labelTitle="Description"
									labelClassName="text-area d-block"
									inputClassName="text-area d-block"
									placeholderNote="Enter Description"
									onChange={handleChange}
									encased={false}
									errorMessage=""
								/>
							</div>
							<div className="form-group mb-2">
								<Input
									labelClassName="label d-block"
									inputClassName="input d-block"
									labelTitle="Group Size"
									type="number"
									name="maxCount"
									placeholderNote="No of Pax"
									onChange={handleChange}
									encased={false}
									errorMessage=""
								/>
							</div>
							<div className="form-group mb-2">
								<Input
									labelClassName="label d-block"
									inputClassName="input d-inline-block"
									labelTitle="Trip Duration"
									type="number"
									name="days"
									placeholderNote="No. of Days"
									onChange={handleChange}
									encased={false}
									errorMessage=""
								/>
								<Input
									labelClassName="label d-inline-block ml-2"
									inputClassName="input d-inline-block"
									labelTitle=""
									type="number"
									name="nights"
									placeholderNote="No. of Nights"
									onChange={handleChange}
									encased={false}
									errorMessage=""
								/>
							</div>
							<div className="form-group mb-2">
								<label className="label d-block">Category</label>
								<select defaultValue="Choose One" name="category" onChange={handleChange}>
									<option value="Choose One" disabled="disabled">
										Choose One
									</option>
									<option value="Adult">Adult</option>
									<option value="child">Child</option>
									<option value="couple">Couple</option>
								</select>
							</div>
							<div className="form-group mb-2">
								<Input
									labelClassName="label d-block"
									inputClassName="input d-block"
									labelTitle="Sales Price"
									type="number"
									name="salesPrice"
									placeholderNote="Enter Sales Price"
									onChange={handleChange}
									encased={false}
									errorMessage=""
								/>
							</div>
							<div className="form-group mb-2">
								<Input
									labelClassName="label d-block"
									inputClassName="input d-block"
									labelTitle="Regular Price"
									type="number"
									name="regularPrice"
									placeholderNote="Enter Regular Price"
									onChange={handleChange}
									encased={false}
									errorMessage=""
								/>
							</div>
							<div className="form-group mb-2">
								<Input
									labelClassName="label d-block"
									inputClassName="input d-block"
									labelTitle="Discount"
									type="number"
									name="discount"
									placeholderNote="Enter Discount"
									onChange={handleChange}
									encased={false}
									errorMessage=""
								/>
							</div>
							<button className="button mt-2" onClick={() => handleNext(data)}>
								Next
							</button>
						</fieldset>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-6">
								<pre>{JSON.stringify(data, null, 4)}</pre>
							</div>
							<div className="col-md-6">
								<pre>{JSON.stringify(values, null, 4)}</pre>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
