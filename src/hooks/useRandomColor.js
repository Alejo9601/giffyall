import { useEffect, useState } from "react";

const useRandomColor = () => {
  const [backgroundColor, setBackgroundColor] = useState();
  const colors = ["#FBCB0A", "#C70A80", "#37E2D5"];

  useEffect(() => {
    var rand = Math.floor(Math.random() * colors.length);
    setBackgroundColor(colors[rand]);
  }, []);

  return backgroundColor;
};

export default useRandomColor;
