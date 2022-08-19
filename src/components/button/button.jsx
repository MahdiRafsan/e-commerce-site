import "./button.css";

// custom classes passed in from props for styling button differently
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = (props) => {
  const { children, buttonType, ...otherProps } = props;
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps} // otherProps include type of button
    >
      {children}
    </button>
  );
};

export default Button;
