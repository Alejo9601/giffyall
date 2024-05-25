import UserLoginSignUp from "../layouts/UserLoginSignUp";
import FormInput from "../components/FormInput";
import FormSubmitButton from "../components/FormSubmitButton";
import Form from "../components/Form";
import FormButtonsContainer from "../components/FormButtonsContainer";

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
            <FormButtonsContainer>
               <FormSubmitButton textValue="Sign up" />
            </FormButtonsContainer>
         </Form>
      </UserLoginSignUp>
   );
}
