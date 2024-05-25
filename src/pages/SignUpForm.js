import styled from "styled-components";
import UserLoginSignUp from "../layouts/UserLoginSignUp";
import FormInput from "../components/FormInput";
import FormSubmitButton from "../components/FormSubmitButton";

const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 15px;
   width: 300px;
   height: 300px;
`;

const FormContainer = styled.div`
   display: flex;
   background-color: white;
   border-radius: 8px;
   padding: 15px 0px 15px 0px;
`;

const ButtonsContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: end;
   align-items: center;
`;

export default function SignUpForm() {
   return (
      <UserLoginSignUp>
         <FormContainer>
            <StyledForm>
               <FormInput label="Name" name="name" placeholder="" type="text" />
               <FormInput
                  label="Last Name"
                  name="lastname"
                  placeholder=""
                  type="text"
               />
               <FormInput
                  label="Password"
                  name="password"
                  placeholder="enter new password"
                  type="password"
               />
               <FormInput
                  label="Repeat Password"
                  name="password"
                  placeholder=""
                  type="password"
               />
               <ButtonsContainer>
                  <FormSubmitButton textValue="Sign up" />
               </ButtonsContainer>
            </StyledForm>
         </FormContainer>
      </UserLoginSignUp>
   );
}
