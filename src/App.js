import React, { useState } from "react";
import Scene from "./Scene";
import Controls from "./Controls";
import "./styles.css";

export default function App() {
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const [zPosition, setZPosition] = useState(0);
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const [zRotation, setZRotation] = useState(0);
  const [xScale, setXScale] = useState(1);
  const [yScale, setYScale] = useState(1);
  const [zScale, setZScale] = useState(1);

  return (
    <div className="app">
      <Scene
        controls={{ xPosition, yPosition, zPosition, xRotation, yRotation, zRotation, xScale, yScale, zScale }}
      />
      <Controls
        controls={{ xPosition, yPosition, zPosition, xRotation, yRotation, zRotation, xScale, yScale, zScale, setXPosition, setYPosition, setZPosition, setXRotation, setYRotation, setZRotation, setXScale, setYScale, setZScale }}
      />
    </div>
  );
}
