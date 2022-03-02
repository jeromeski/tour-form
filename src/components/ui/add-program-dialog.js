import React, { useRef } from "react";
import {
	// AlertDialog,
	AlertDialogLabel,
	AlertDialogDescription,
	AlertDialogOverlay,
	AlertDialogContent
} from "@reach/alert-dialog";

const AddProgramDialog = ({ showDialog, setShowDialog, handleSubmit, values }) => {
	const cancelRef = useRef();
	const close = () => setShowDialog(false);
	return (
		showDialog && (
			<AlertDialogOverlay leastDestructiveRef={cancelRef} onClick={(e) => e.stopPropagation()}>
				<AlertDialogContent style={{ background: "#f0f0f0" }}>
					<AlertDialogLabel className="font-weight-bold">Please Confirm!</AlertDialogLabel>

					<AlertDialogDescription className="mt-5">
						Are you sure you want to submit?
					</AlertDialogDescription>

					<div className="alert-buttons mt-5" onClick={(e) => e.stopPropagation()}>
						<button onClick={() => handleSubmit(values)}>Yes, Submit!</button>{" "}
						<button type="button" ref={cancelRef} onClick={() => close()}>
							Nevermind
						</button>
					</div>
				</AlertDialogContent>
			</AlertDialogOverlay>
		)
	);
};

export default AddProgramDialog;
