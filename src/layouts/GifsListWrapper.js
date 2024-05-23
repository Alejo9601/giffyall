import styled from "styled-components";

const ResultsSection = styled.section`
   display: grid;

   @media (min-width: 1366px) {
      grid-template-columns: 1.5fr 3fr;
      align-self: center;
   }

   @media (min-width: 1600px) {
      grid-template-columns: 1fr 3fr;
      align-self: center;
   }
`;

export function GifsListWrapper({ children }) {
   return <ResultsSection>{children}</ResultsSection>;
}
