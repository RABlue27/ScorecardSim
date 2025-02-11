import React, { useState } from 'react';
import './App.css';

const GridSquare = ({ text, onChange }) => {
  const [borderState, setBorderState] = useState(0);

  const increaseBorder = () => {
    if (borderState < 4) setBorderState(borderState + 1);
  };

  const decreaseBorder = () => {
    if (borderState > 0) setBorderState(borderState - 1);
  };

  const squareStyle = {
    borderRight: borderState >= 1 ? '2px solid black' : '1px solid gray',
    borderTop: borderState >= 2 ? '2px solid black' : '1px solid gray',
    borderLeft: borderState >= 3 ? '2px solid black' : '1px solid gray',
    borderBottom: borderState >= 4 ? '2px solid black' : '1px solid gray',
    backgroundColor: borderState >= 4 ? '#bbb' : 'white',
  };

  return (
    <div className="button-box">
      <div className="square" style={squareStyle}>
        <input
          type="text"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          className="square-content"
        />
      </div>
      <div className="button-group">
        <button onClick={increaseBorder}>++</button>
        <button onClick={decreaseBorder}>--</button>
      </div>
    </div>
  );
};

const Lineup = ({ value, onChange }) => {
  return (
    <textarea
      className="lineup-name"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

function App() {
  const [gridData, setGridData] = useState(() => 
    Array(9).fill().map(() => Array(9).fill(''))
  );

  const [rowNames, setRowNames] = useState(() => Array(9).fill(''));

  const handleRowNameChange = (index, newName) => {
    const newRowNames = [...rowNames];
    newRowNames[index] = newName;
    setRowNames(newRowNames);
  };

  const handleTextChange = (rowIndex, colIndex, newText) => {
    const newData = [...gridData];
    newData[rowIndex][colIndex] = newText;
    setGridData(newData); // This was the missing line
  };

  return (
    <div className="grid-container">
      {gridData.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          <Lineup
            value={rowNames[rowIndex]}
            onChange={(newName) => handleRowNameChange(rowIndex, newName)}
          />
          {row.map((text, colIndex) => (
            <GridSquare
              key={colIndex}
              text={text}
              onChange={(newText) => handleTextChange(rowIndex, colIndex, newText)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
