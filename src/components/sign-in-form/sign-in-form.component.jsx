import FormInput from "../form-input/form-input.component";
import {
  useState,
  //useContext
} from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
//import { UserContext } from '../../contexts/user.context'
import {
  signInWithGooglePopup,
  //createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";
import "./sign-in-form.styles.scss";

const defaultSignInFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultSignInFormFields);
  const { email, password } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defaultSignInFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      //setCurrentUser(user)
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    //signInWithGooglePopup().then(user =>{createUserDocumentFromAuth(user)})
    //console.log(user.uid)

    //setCurrentUser(user)
    //console.log (currentUser)
    //console.log(userDocRef)
  };
  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    //signInWithGooglePopup().then(user =>{createUserDocumentFromAuth(user)})
    console.log(user);
    //const userDocRef = await createUserDocumentFromAuth(user)
    //console.log(userDocRef)
  };
  return (
    <div className="sign-up-container">
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          value={email}
          name="email"
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          required
          value={password}
          name="password"
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit" label="Sign in" />
          <Button
            type="button"
            label="Google Sign in"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={logGoogleUser}
          />
          {/* <Button label='Sign in with Google redirect' buttonType='google' onClick={logGoogleRedirectUser} /> */}
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
