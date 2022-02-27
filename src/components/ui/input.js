import React, {Fragment} from "react";

const Input = React.forwardRef(({ errorMessage, labelTitle, type, name, ...rest, encased = false }, ref) => {
	if (encased) return <label htmlFor={name}>{labelTitle}
    <input type={type} name={name} ref={ref} {...rest}/>;
    {errorMessage && <span>{errorMessage}</span>}
  </label>
  return  <Fragment>
    <label htmlFor={name}>{labelTitle}</label>
    <input type={type} name={name} ref={ref} {...rest} />
    {errorMessage && <span>{errorMessage}</span>}
  </Fragment>
});

export default Input;
