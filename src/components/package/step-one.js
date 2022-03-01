import { Fragment, useEffect, useState } from "react";
import { useLogger } from "react-use";
import {useField} from "formik";
import Input from "components/ui/input.js";
import TextArea from "components/ui/text-area.js";
import Select from "components/ui/select";


const categoryOptions = [{ adult: "Adult" }, { child: "Child" }, { couple: "Couple" }];
  
export default function StepOne({
	values,
	errors,
	touched,
	handleChange,
	handleBlur,
	isValid,
	dirty,
	handleNext
}) {
	useLogger("StepOne -->");

	return (
		<div className="container p-5">
			<div className="row">
				<div className="col-md-6">
					<form onSubmit={handleNext}>
						<fieldset className="p-5">
							<div className="form-group mb-1">
								<Input
									inputClassName="input d-block"
									placeholderNote="Enter Title"
									encased={false}
									name="title"
									type="text"
									touched={touched}
									handleChange={handleChange}
									handleBlur={handleBlur}
									errors={errors}
								/>
							</div>
							<div className="form-group mb-1">
								<TextArea
									inputClassName="text-area d-block"
									placeholderNote="Enter Description"
									encased={false}
									name="description"
									touched={touched}
									handleChange={handleChange}
									handleBlur={handleBlur}
									errors={errors}
								/>
							</div>
							<div className="form-group mb-1">
								<Input
									inputClassName="input d-block"
									placeholderNote="No of Pax"
									encased={false}
									name="maxCount"
									type="number"
									touched={touched}
									handleChange={handleChange}
									handleBlur={handleBlur}
									errors={errors}
								/>
							</div>
							<div className="form-group mb-1">
								<Select name="category" touched={touched} errors={errors} />
							</div>
							<div className="form-group mb-1">
								<div className="text-muted">Trip Duration</div>
								<div className="row">
									<div className="col-md-6">
										<Input
											inputClassName="d-inline-block mr-1"
											labelClassName="d-block"
											placeholderNote="No. of Days"
											encased={false}
											name="days"
											type="number"
											touched={touched}
											handleChange={handleChange}
											handleBlur={handleBlur}
											errors={errors}
											removeLabel={true}
										/>
									</div>
									<div className="col-md-6">
										<Input
											name="nights"
											inputClassName="input d-inline-block"
											labelClassName="d-block"
											type="number"
											placeholderNote="No. of Nights"
											encased={false}
											touched={touched}
											handleChange={handleChange}
											handleBlur={handleBlur}
											errors={errors}
											removeLabel={true}
										/>
									</div>
								</div>
							</div>
							<div className="form-group mb-1">
								<Input
									inputClassName="input d-block"
									labelTitle="Sales Price"
									type="number"
									placeholderNote="Enter Sales Price"
									encased={false}
									name="salesPrice"
									touched={touched}
									handleChange={handleChange}
									handleBlur={handleBlur}
									errors={errors}
								/>
							</div>
							<div className="form-group mb-1">
								<Input
									inputClassName="input d-block"
									labelTitle="Regular Price"
									placeholderNote="Enter Regular Price"
									encased={false}
									name="regularPrice"
									type="number"
									touched={touched}
									handleChange={handleChange}
									handleBlur={handleBlur}
									errors={errors}
								/>
							</div>
							<div className="form-group mb-1">
								<Input
									inputClassName="input d-block"
									placeholderNote="Enter Discount"
									encased={false}
									name="discount"
									type="number"
									touched={touched}
									handleChange={handleChange}
									handleBlur={handleBlur}
									errors={errors}
								/>
							</div>

							<button
								type="submit"
								className="button mt-2"
								// disabled={!(dirty && isValid)}
							>
								Next
							</button>
						</fieldset>
					</form>
				</div>
				<div className="col-md-6">
					<div className="row">
						<div className="col-md-6">
							<pre>{JSON.stringify(values, null, 4)}</pre>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

/*


  <Select
									labelClassName="select d-block text-muted"
									labelTitle="Category"
									name="category"
									options={categoryOptions}
									touched={touched}
									handleChange={handleChange}
									handleBlur={handleBlur}
									errors={errors}
                  values={values}
								/>
											
											
											
											
											
											
  
*/ 