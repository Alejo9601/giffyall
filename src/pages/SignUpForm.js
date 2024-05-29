import UserLoginSignUp from "../layouts/UserLoginSignUp";
import FormInput from "../components/FormInput";
import FormSubmitButton from "../components/FormSubmitButton";
import Form from "../components/Form";
import FormButtonsContainer from "../components/FormButtonsContainer";

export default function SignUpForm() {
   return (
      <UserLoginSignUp>
         <Form formName="Sign up ">
            <FormInput
               label="Username"
               name="username"
               placeholder="we will identify you through your nick"
               type="text"
            />
            <FormInput
               label="Password"
               name="password"
               placeholder="think of a funny one"
               type="password"
            />
            <FormInput
               label="Repeat Password"
               name="password"
               placeholder="just to be sure"
               type="password"
            />
            <FormButtonsContainer>
               <FormSubmitButton textValue="Sign up" />
            </FormButtonsContainer>
         </Form>
      </UserLoginSignUp>
   );
}
