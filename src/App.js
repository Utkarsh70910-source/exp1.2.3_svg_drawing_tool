import { useState } from "react";
import "./App.css";

function App() {
  const [circles, setCircles] = useState([]);

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCircles([...circles, { x, y }]);
  };

  const undoLast = () => {
    setCircles(circles.slice(0, -1));
  };

  return (
    <div className="container">
      <h2>Experiment 1.2.3</h2>
      <p>SVG Drawing Tool</p>

      <button onClick={undoLast}>Undo</button>

      <svg className="canvas" onClick={handleClick}>
        {circles.map((c, index) => (
          <circle key={index} cx={c.x} cy={c.y} r="6" />
        ))}
      </svg>

      <p>Circles drawn: {circles.length}</p>
    </div>
  );
}

export default App;
