import "./form-input.css";

const FormInput = (props) => {
  // otherProps are all attributes other than label in the input tag
  const { label, ...otherProps } = props;

  return (
    <div className="input-group">
      <input className="form-input" {...otherProps} />
      {/*render label if it exists*/}
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : "" //shrink label if there is a value, i.e there is text in input field
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
