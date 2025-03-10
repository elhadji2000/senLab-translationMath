export default function Controls({ controls }) {
    const {
      xRotation,
      yRotation,
      zRotation,
      xPosition,
      yPosition,
      zPosition,
      xScale,
      yScale,
      zScale,
      setXRotation,
      setYRotation,
      setZRotation,
      setXPosition,
      setYPosition,
      setZPosition,
      setXScale,
      setYScale,
      setZScale
    } = controls;
  
    return (
      <div className="controls">
        <h2>Selected Object: Cube</h2>
  
        {/* Position Controls */}
        <div className="controlGroup">
          <div className="control">
            <label>X Position</label>
            <input
              value={xPosition}
              onChange={(e) => setXPosition(parseFloat(e.target.value))}
              step={0.1}
              type="number"
            />
          </div>
          <div className="control">
            <label>Y Position</label>
            <input
              value={yPosition}
              onChange={(e) => setYPosition(parseFloat(e.target.value))}
              step={0.1}
              type="number"
            />
          </div>
          <div className="control">
            <label>Z Position</label>
            <input
              value={zPosition}
              onChange={(e) => setZPosition(parseFloat(e.target.value))}
              step={0.1}
              type="number"
            />
          </div>
        </div>
  
        {/* Rotation Controls */}
        <div className="controlGroup">
          <div className="control">
            <label>X Rotation</label>
            <input
              value={xRotation}
              onChange={(e) => setXRotation(parseFloat(e.target.value))}
              step={0.1}
              type="number"
            />
          </div>
          <div className="control">
            <label>Y Rotation</label>
            <input
              value={yRotation}
              onChange={(e) => setYRotation(parseFloat(e.target.value))}
              step={0.1}
              type="number"
            />
          </div>
          <div className="control">
            <label>Z Rotation</label>
            <input
              value={zRotation}
              onChange={(e) => setZRotation(parseFloat(e.target.value))}
              step={0.1}
              type="number"
            />
          </div>
        </div>
  
        {/* Scale Controls */}
        <div className="controlGroup">
          <div className="control">
            <label>X Scale</label>
            <input
              value={xScale}
              onChange={(e) => setXScale(parseFloat(e.target.value))}
              step={0.1}
              type="number"
              min={0.1}
            />
          </div>
          <div className="control">
            <label>Y Scale</label>
            <input
              value={yScale}
              onChange={(e) => setYScale(parseFloat(e.target.value))}
              step={0.1}
              type="number"
              min={0.1}
            />
          </div>
          <div className="control">
            <label>Z Scale</label>
            <input
              value={zScale}
              onChange={(e) => setZScale(parseFloat(e.target.value))}
              step={0.1}
              type="number"
              min={0.1}
            />
          </div>
        </div>
      </div>
    );
  }
  