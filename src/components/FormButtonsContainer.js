import styled from "styled-components";

const ButtonsContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: end;
   align-items: center;
   gap: 10px;
`;

export default function FormButtonsContainer({ children }) {
   return <ButtonsContainer>{children}</ButtonsContainer>;
}
