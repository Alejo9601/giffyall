import { useUser } from "../hooks/useUser";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

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

const FormContainer = styled.div`
   display: flex;
   background-color: white;
   border-radius: 8px;
`;

const StyledHeading = styled.h1`
   color: white;
   font-size: 2rem;
`;

const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 15px;
   width: 300px;
   height: 300px;
`;

const StyledInput = styled.input`
   width: 100%;
   height: 40px;
   padding: 10px 0px 10px 0px;
   border-radius: 8px;
   padding: 0px 20px 0px 20px;
   background-color: beige;
`;

const StyledLabel = styled.label`
   width: 100%;
   margin-top: 8px;
`;

const StyledSubmitButton = styled.input`
   color: white;
   margin-top: 30px;
   padding: 10px 20px 10px 20px;
   align-self: flex-end;
   background-color: blueviolet;
   cursor: pointer;
   font-size: 1rem;
   border-radius: 4px;
`;

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

   return (
      <StyledSection>
         <StyledHeading />
         <FormContainer>
            <StyledForm onSubmit={handleLogin}>
               <StyledLabel htmlFor="username">
                  Username
                  <StyledInput
                     ref={usernameRef}
                     type="text"
                     name="username"
                     placeholder="alejo9601"
                  />
               </StyledLabel>
               <StyledLabel htmlFor="password">
                  Password
                  <StyledInput
                     ref={passwordRef}
                     type="password"
                     name="password"
                     placeholder="***********"
                  />
               </StyledLabel>
               <StyledSubmitButton type="submit" value="Login" />
            </StyledForm>
         </FormContainer>
      </StyledSection>
   );
};

export default Login;
