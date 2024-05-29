import styled from "styled-components";

const StyledInput = styled.input`
   width: 100%;
   height: 40px;
   padding: 10px 0px 10px 0px;
   border-radius: 8px;
   padding: 0px 20px 0px 20px;
   background-color: beige;
   color: darkslateblue;
   font-weight: bolder;
   font-size: 1rem;

   ::placeholder {
      color: lightgray;
      font-weight: 600;
      font-size: 0.8rem;
   }
`;

const StyledLabel = styled.label`
   width: 100%;
   margin-top: 8px;
`;

export default function FormInput({
   valueRef,
   type,
   name,
   placeholder,
   label,
}) {
   return (
      <StyledLabel htmlFor={name}>
         {label}
         <StyledInput
            ref={valueRef}
            type={type}
            name={name}
            placeholder={placeholder}
         />
      </StyledLabel>
   );
}