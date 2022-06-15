import { useEffect, useRef } from "react";
import useObserver from "../hooks/useObserver";
import Loader from "./Loader";
import styled from "styled-components";

const TopBottomVisor = styled.div`
  height: 20px;
  width: 100%;
  position: relative;
  align-self: end;

  @media (min-width: 800px) {
    grid-column: span 2;
  }
  @media (min-width: 1366px) {
    grid-column: span 3;
  }
`;

const Visor = ({ toDoWhenReached }) => {
  const toObserve = useRef();
  const [observer, setElements, entries] = useObserver({
    rootMargin: "200px",
    root: null,
  });

  useEffect(() => {
    const element = [toObserve.current];
    setElements(element);
  }, []);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        toDoWhenReached();
      }
    });
  }, [observer, entries]);

  return (
    <TopBottomVisor ref={toObserve}>
      <Loader />
    </TopBottomVisor>
  );
};

export default Visor;
