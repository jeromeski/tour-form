import { Fragment, useEffect, useState } from "react";
import { useLogger } from "react-use";
import KeywordInput from "./KeywordInput";
import DragDrop from "./DragNDrop";
import LocationInput from "./LocationInput";
import { DeleteOutlined } from "@ant-design/icons";
import NewCategory from "./NewCategory";

let dataCache = null;
let initialState = {
	images: [],
	programs: [],
	location: "",
	keywords: [],
	categories: []
};

export default function StepTwo({ setValues, handlePrev, handleNext }) {
	useLogger("StepTwo -->");
	// Ilagay sa iisang programState
	const [programs, setPrograms] = useState({
		programTitle: "",
		programDescription: ""
	});

	const [data, setData] = useState(dataCache || initialState);

	const handleChange = (e) => {
		setPrograms({ ...programs, [e.target.name]: e.target.value });
	};

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

	useEffect(() => {
		dataCache = data;
	});

	// console.log("Programs -->", programs);
	console.log("StepTwo DATA -->", data);

	return (
		<Fragment>
			<div className="form-group mb-3">
				<DragDrop handleAddImages={handleAddImages} />
			</div>
			<div className="form-group mb-4">
				<label className="label d-block">Program</label>
				<input
					className="input d-block"
					type="text"
					name="programTitle"
					value={programs.programTitle}
					placeholder="Enter Title"
					onChange={handleChange}
				/>
				<textarea
					className="text-area"
					name="programDescription"
					placeholder="Description"
					value={programs.programDescription}
					onChange={handleChange}
				/>
				<button onClick={handleAddProgram}>Add Program</button>
			</div>
			<div className="form-group mb-4">
				<LocationInput setData={setData} data={data} />
			</div>
			<div className="form-group">
				<label>Add Keywords</label>
				<KeywordInput setData={setData} />
			</div>
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
			<div className="form-group">
				<NewCategory data={data} setData={setData} />
			</div>
			<div className="mt-5">
				<button onClick={handlePrev}>Back</button>
				<button
					onClick={() => {
						if (data === null) {
							console.log(data);
						}
						handleNext(data);
					}}>
					HandleNext
				</button>
			</div>
		</Fragment>
	);
}
