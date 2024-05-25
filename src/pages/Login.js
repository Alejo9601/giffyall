import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import FormInput from "../components/FormInput";
import FormSubmitButton from "../components/FormSubmitButton";
import FormButton from "../components/FormButton";
import Form from "../components/Form";
import FormButtonsContainer from "../components/FormButtonsContainer";
import UserLoginSignUp from "../layouts/UserLoginSignUp";

const Login = () => {
   const { login } = useUser();
   const passwordRef = useRef();
   const usernameRef = useRef();
   const navigation = useNavigate();

   async function handleLogin(ev) {
      ev.preventDefault();
      if (login(usernameRef.current.value, passwordRef.current.value)) {
         navigation(`/home`);
      }
   }

   async function handleSignUp(ev) {
      navigation(`/signup`, { replace: true });
   }

   return (
      <UserLoginSignUp>
         <Form handleSubmit={handleLogin} formName="Login">
            <FormInput
               label="Username"
               name="username"
               placeholder="Alejo9601"
               type="text"
               valueRef={usernameRef}
            ></FormInput>
            <FormInput
               label="Password"
               name="password"
               placeholder="**********"
               type="password"
               valueRef={passwordRef}
            ></FormInput>
            <FormButtonsContainer>
               <FormButton textValue="Sign up" onClick={handleSignUp} />
               <FormSubmitButton textValue="Login" />
            </FormButtonsContainer>
         </Form>
      </UserLoginSignUp>
   );
};

export default Login;
