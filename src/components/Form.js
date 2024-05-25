import styled from "styled-components";

const FormContainer = styled.div`
   display: flex;
   flex-direction: column;
   background-color: white;
   border-radius: 8px;
   padding: 15px 15px 15px 15px;
`;

const StyledHeading = styled.h1`
   color: black;
   font-size: 2rem;
   text-align: center;
`;

const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   gap: 10px;
   justify-content: center;
   align-items: center;
   margin: 15px;
   width: 300px;
`;

export default function Form({ children, formName, handleSubmit }) {
   return (
      <FormContainer>
         <StyledHeading>{formName}</StyledHeading>
         <StyledForm onSubmit={handleSubmit}>{children}</StyledForm>
      </FormContainer>
   );
}
