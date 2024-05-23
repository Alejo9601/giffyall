import styled from "styled-components";

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

export default function FormSubmitButton({ textValue }) {
   return <StyledSubmitButton type="submit" value={textValue} />;
}
