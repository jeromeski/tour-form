import React from "react";

const TextArea = React.forwardRef(({ errorMessage, labelTitle, type, name, ...rest, encased = false }, ref) => {
	if (encased) return <label htmlFor={name}>{labelTitle}
    <textarea type={type} name={name} ref={ref} {...rest}/>;
    {errorMessage && <span>{errorMessage}</span>}
  </label>
  return  <Fragment>
    <label htmlFor={name}>{labelTitle}</label>
    <textarea type={type} name={name} ref={ref} {...rest} />
    {errorMessage && <span>{errorMessage}</span>}
  </Fragment>
});

export default TextArea;
