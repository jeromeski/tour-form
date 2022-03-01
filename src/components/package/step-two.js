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
// import { getCategories } from "api/get-categories";
// import { getKeywords } from "api/get-keywords";




export default function StepTwo({
	values,
	errors,
	touched,
	handleChange,
	handleBlur,
	handleSubmit,
	isValid,
	dirty,
	handlePrev
}) {
	const [data, setData] = useState("");
	useLogger("StepTwo -->");
	// const [categories, setCategories] = useState([]);
	// const [keywords, setKeywords] = useState([]);
	const [programs, setPrograms] = useState({
		programTitle: "",
		programDescription: ""
	});

	const [showDialog, setShowDialog] = React.useState(false);

	const resetPrograms = () => {
		setPrograms({
			programTitle: "",
			programDescription: ""
		});
	};

	const handleAddProgram = () => {
		setData((prev) => ({ ...data, programs: [...prev.programs, programs] }));
		resetPrograms();
	};

	const handleAddImages = (files) => {
		setData((prev) => ({ ...data, images: { ...prev.images, files } }));
	};

	const handleDeleteKeyword = (e, keyword) => {
		setData({
			...data,
			keywords: data.keywords.filter((item) => item !== keyword)
		});
	};

	const handlePreSubmit = (e) => {
		e.preventDefault();
		setShowDialog(true);
	};


	// useEffect(() => {
	// 	getCategories().then(({ data }) => {
	// 		setCategories(data.categories);
	// 	});
	// 	getKeywords().then(({ data }) => {
	// 		setKeywords(data.keywords);
	// 	});
	// }, []);

	// console.log("Programs -->", programs);
	console.log("StepTwo DATA -->", data);

	return (
		<Fragment>
			<div className="container p-5">
				<div className="row">
					<div className="col-md-6">
						<form onSubmit={handlePreSubmit}>
							<fieldset className="p-5">
								<div className="form-group mb-4">
									<DragDrop handleAddImages={handleAddImages} />
								</div>
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
										name="programDescription"
										placeholderNote="Description"
										value={programs.programDescription}
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
								<div className="mt-5">
									<button className="mr-2" onClick={handlePrev}>
										Back
									</button>
									<button onClick={handlePreSubmit}>Submit</button>
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
				value={values}
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

*/
