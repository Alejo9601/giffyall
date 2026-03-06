import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import styled from "styled-components";
import LogInButton from "./LogInButton";

const StyledSpan = styled.span`
   font-size: 2rem;
   color: white;
`;

const StyledDiv = styled.div`
   position: absolute;
   top: 10px;
   right: 30px;
`;

export default function UserStatus() {
   const { userName } = useContext(UserContext);
   return (
      <StyledDiv>
         {userName ? <StyledSpan>{userName}</StyledSpan> : <LogInButton />}
      </StyledDiv>
   );
}
