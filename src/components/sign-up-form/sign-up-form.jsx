import { useState } from "react";

import FormInput from "../form-input/form-input";
import Button from "../button/button";
import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import "./sign-up-form.css";

const defaultFormFields = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, email, password, confirmPassword } = formFields;

  // reset the form fields to be empty
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await createAuthUserWithEmailandPassword(
        email,
        password
      );

      // create a new user and set displayName from the username passed in form
      // response.user gets the user info
      await createUserDocumentFromAuth(response.user, {
        displayName: username,
      });

      resetFormFields();
    } catch (error) {
      console.log("User creation encountered an error", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target; //destructuring from the 'name and value attributes' on form
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="User Name"
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
          required
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleInputChange}
          required
        />
        {/* default button (no button type)*/}
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
