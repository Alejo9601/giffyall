import { useEffect, useState } from "react";

const COLORS = ["#FBCB0A", "#C70A80", "#37E2D5"];

const useRandomColor = () => {
  const [backgroundColor, setBackgroundColor] = useState();

  useEffect(() => {
    const rand = Math.floor(Math.random() * COLORS.length);
    setBackgroundColor(COLORS[rand]);
  }, []);

  return backgroundColor;
};

export default useRandomColor;
