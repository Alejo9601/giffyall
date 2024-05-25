import styled from "styled-components";

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

export default function UserLoginSignUp({ children }) {
   return <StyledSection>{children}</StyledSection>;
}
