import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import NewPackage from "./components/NewPackage";
import "react-toastify/dist/ReactToastify.css";
// import "@reach/checkbox/styles.css";

import "./styles.css";

export default function App() {
  return (
		<div className="bootstrap-wrapper">
			<NewPackage />
			<ToastContainer />
		</div>
	);
}
