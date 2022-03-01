import React, { useRef } from "react";
import {
	// AlertDialog,
	AlertDialogLabel,
	AlertDialogDescription,
	AlertDialogOverlay,
	AlertDialogContent
} from "@reach/alert-dialog";

const PackageAlertDialog = ({ showDialog, setShowDialog, handleSubmit, values }) => {
	const cancelRef = useRef();
	const close = () => setShowDialog(false);
	return (
		showDialog && (
			<AlertDialogOverlay leastDestructiveRef={cancelRef}>
				<AlertDialogContent style={{ background: "#f0f0f0" }}>
					<AlertDialogLabel className="font-weight-bold">Please Confirm!</AlertDialogLabel>

					<AlertDialogDescription className="mt-5">
						Are you sure you want to submit?
					</AlertDialogDescription>

					<div className="alert-buttons mt-5">
						<button onClick={() => handleSubmit(values)}>Yes, Submit!</button>{" "}
						<button ref={cancelRef} onClick={() => close()}>
							Nevermind
						</button>
					</div>
				</AlertDialogContent>
			</AlertDialogOverlay>
		)
	);
};

export default PackageAlertDialog;
