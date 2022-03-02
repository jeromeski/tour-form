import React, { Fragment, useEffect, useRef, useState } from "react";
import { useLogger } from "react-use";
import KeywordInput from "components/ui/keyword-input";
import DragDrop from "components/ui/drag-drop";
import LocationInput from "components/ui/location-input";
import { DeleteOutlined } from "@ant-design/icons";
import NewCategory from "components/ui/new-category";
import Input from "components/ui/input";
import TextArea from "components/ui/text-area";
import PackageAlertDialog from "components/ui/alert-dialog";
import ProgramsInput from 'components/ui/programs-input';
import TestInput from 'components/ui/test-input';


export default function StepTwo({
	values,
	errors,
	touched,
	handleChange,
	handleBlur,
	handleSubmit,
	isValid,
	dirty,
	handlePrev,
  setFieldValue,
  ...props
}) {
  // console.log(props);
	useLogger("StepTwo -->");

	const [showDialog, setShowDialog] = React.useState(false);


	const handlePreSubmit = (e) => {
		e.preventDefault();
    
		setShowDialog(true);
	};

	return (
		<Fragment>
			<div className="container p-5">
				<div className="row">
					<div className="col-md-6">
						<form onSubmit={handlePreSubmit}>
							<fieldset className="p-5">
								<div className="form-group mb-2">
									<DragDrop />
								</div>
								<div className="form-group mb-3">
									<TextArea
										inputClassName="text-area d-block"
										placeholderNote="Enter program introduction"
										encased={false}
										labelTitle="Program Intro"
										name="programIntro"
										touched={touched}
										handleChange={handleChange}
										handleBlur={handleBlur}
										errors={errors}
									/>
								</div>
								<div className="form-group mb-4">
									<LocationInput />
								</div>
								<div className="form-group mb-4">

										<TestInput />
									
								</div>
								<div className="mt-5">
									<button className="button mr-2" onClick={handlePrev}>
										Back
									</button>
									<button 
                    className="button" 
                    // disabled={!(dirty && isValid)} 
                    type="submit">
										Submit
									</button>
								</div>
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
			<PackageAlertDialog
				showDialog={showDialog}
				setShowDialog={setShowDialog}
				handleSubmit={handleSubmit}
				values={values}
			/>
		</Fragment>
	);
}

/*
onClick={
  () => {
  if (data === null) {
    console.log(data);
  }
  handleNext(data);
  }
}

<div className="form-group mb-4">
									<Input
										labelTitle="Program"
										labelClassName="label d-block"
										inputClassName="input d-block mb-1"
										type="text"
										name="programTitle"
										value={programs.programTitle}
										placeholderNote="Enter Title"
										onChange={handleChange}
										errorMessage=""
									/>
									<TextArea
										inputClassName="text-area d-block"
										name="programContent"
										placeholderNote="Content"
										value={programs.programContent}
										onChange={handleChange}
										errorMessage=""
									/>
									<button className="mt-2" onClick={handleAddProgram}>
										Add Program
									</button>
								</div>
								<div className="form-group mb-4">
									<LocationInput setData={setData} data={data} inputClassName="mr-1" />
								</div>
								<div className="form-group mb-4">
									<KeywordInput setData={setData} data={data} labelTitle="Add Keywords" />
									{data &&
										data.keywords &&
										data.keywords.map((keyword, idx) => {
											return (
												<div>
													<span key={`${keyword[idx]}:${keyword}`}>{keyword}</span>
													<button onClick={(e) => handleDeleteKeyword(e, keyword)}>
														<DeleteOutlined />
													</button>
												</div>
											);
										})}
								</div>
								<div className="form-group">
									<NewCategory
										data={data}
										setData={setData}
										labelClassName="font-weight-bold d-block"
									/>
								</div>
								
*/
