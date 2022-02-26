import React, { Fragment } from "react";
import { useLogger } from "react-use";

export default function PackageFormFlow({ children, currentIndex }) {
  // useLogger("Form -->");
  const currentChild = React.Children.toArray(children)[currentIndex];
  if (React.isValidElement(currentChild)) {
    return <Fragment>{React.cloneElement(currentChild)}</Fragment>;
  }
  return <Fragment>{currentChild}</Fragment>;
}
