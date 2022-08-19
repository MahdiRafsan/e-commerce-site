import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";

import "./authentication.css";

const Authentication = () => {
  return (
    <div className="authentication-form-container">
      {/* <button onClick={logGoogleUser}>GOOGLE SIGN IN</button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
