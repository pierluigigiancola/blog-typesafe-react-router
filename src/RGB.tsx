import { useParams } from "react-router-dom";

const RBG = () => {
  const { red, green, blue } = useParams<{
    red: string;
    green: string;
    blue: string;
  }>();

  return (
    <div style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>
      <h1>RGB</h1>
      <p>Red: {red}</p>
      <p>Green: {green}</p>
      <p>Blue: {blue}</p>
    </div>
  );
};

export default RBG;
