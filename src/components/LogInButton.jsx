import LogInSVG from "./LogInSVG";
import styled from "styled-components";

const StyledAnchor = styled.a`
   cursor: pointer;
`;

export default function LogInButton() {
   return (
      <StyledAnchor href="/login">
         <LogInSVG />
      </StyledAnchor>
   );
}
