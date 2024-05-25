import { useUser } from "../hooks/useUser";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import FormInput from "../components/FormInput";
import FormSubmitButton from "../components/FormSubmitButton";
import FormButton from "../components/FormButton";
import Form from "../components/Form";

const StyledSection = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 5px;
   background-color: 000;
   height: 100%;
   width: 100%;
`;

const ButtonsContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: end;
   align-items: center;
   gap: 10px;
`;

const Login = () => {
   const { login } = useUser();
   const passwordRef = useRef();
   const usernameRef = useRef();
   const navigation = useNavigate();

   async function handleLogin(ev) {
      ev.preventDefault();

      alert("Voy a iniciar");

      if (login(usernameRef.current.value, passwordRef.current.value)) {
         navigation(`/home`);
      }
   }

   async function handleSignUp(ev) {
      navigation(`/signup`, { replace: true });
   }

   return (
      <StyledSection>
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
            <ButtonsContainer>
               <FormButton textValue="Sign up" onClick={handleSignUp} />
               <FormSubmitButton textValue="Login" />
            </ButtonsContainer>
         </Form>
      </StyledSection>
   );
};

export default Login;
