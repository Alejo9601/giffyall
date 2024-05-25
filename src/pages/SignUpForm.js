import styled from "styled-components";
import UserLoginSignUp from "../layouts/UserLoginSignUp";
import FormInput from "../components/FormInput";
import FormSubmitButton from "../components/FormSubmitButton";
import Form from "../components/Form";

const ButtonsContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: end;
   align-items: center;
`;

export default function SignUpForm() {
   return (
      <UserLoginSignUp>
         <Form formName="Sign up ">
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
         </Form>
      </UserLoginSignUp>
   );
}
