import { Fragment } from "react";

export default function StepThree({ handleSubmit, handlePrev }) {
  return (
		<Fragment>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1>Are you sure you wanna submit?</h1>
						<button className="button" onClick={handlePrev}>
							Back
						</button>
						<button className="button" onClick={handleSubmit}>
							Submit
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
