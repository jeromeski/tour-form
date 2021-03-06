import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import NewPackage from "./components/NewPackage";
import "react-toastify/dist/ReactToastify.css";

import "./styles.css";

export default function App() {
  return (
    <Fragment>
      <NewPackage />
      <ToastContainer />
    </Fragment>
  );
}
