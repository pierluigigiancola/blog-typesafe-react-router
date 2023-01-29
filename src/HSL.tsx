import { useParams } from "react-router-dom";


const HSL = () => {
    const { hue, saturation, lightness } = useParams<{ hue: string, saturation: string, lightness: string }>();
    return (
        <div style={{ background: `hsl(${hue}, ${saturation}%, ${lightness}%)` }}>
            <h1>HSL</h1>
            <p>hue: {hue}</p>
            <p>saturation: {saturation}</p>
            <p>lightness: {lightness}</p>
        </div>
    );
};

export default HSL;