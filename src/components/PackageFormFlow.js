import React, { Fragment } from "react";

export default function PackageFormFlow({ children, currentIndex }) {
  const currentChild = React.Children.toArray(children)[currentIndex];
  if (React.isValidElement(currentChild)) {
    return <Fragment>{React.cloneElement(currentChild)}</Fragment>;
  }
  return <Fragment>{currentChild}</Fragment>;
}
