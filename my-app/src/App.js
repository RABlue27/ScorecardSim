import React, { useState } from 'react';
import './App.css';

const GridSquare = ({ text, onChange }) => {
  const [borderState, setBorderState] = useState(0);

  const increaseBorder = () => {
    if (borderState < 4) {
      setBorderState(borderState + 1);
    }
  };

  const decreaseBorder = () => {
    if (borderState > 0) {
      setBorderState(borderState - 1);
    }
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
      <button onClick={increaseBorder}> ++ </button>
      <button onClick={decreaseBorder}> -- </button>
    </div>
  );
};


const Lineup = ({ name, onChange }) => {
  return (
    <div>
      <textarea value={name.value} onChange={onChange} />
    </div>
  );
};

function App() {
  const [gridData, setGridData] = useState(() => {
    const data = [];
    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        row.push('');
      }
      data.push(row);
    }
    return data;
  });

  const [rowNames, setRowNames] = useState(() => {
    const names = [];
    for (let i = 0; i < 10; i++) {
      names.push('');
    }
    return names;
  });

  const handleTextChange = (rowIndex, columnIndex, newText) => {
    const newData = [...gridData];
    newData[rowIndex][columnIndex] = newText;
    setGridData(newData);
  };

  const handleRowNameChange = (index, newName) => {
    const newRowNames = [...rowNames];
    newRowNames[index] = newName;
    setRowNames(newRowNames);
  };

  return (
    <div className="grid-container">
      {gridData.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          <Lineup
            name={rowNames[rowIndex]}
            onChange={(newName) => handleRowNameChange(rowIndex, newName)}
          />
          {row.map((text, columnIndex) => (
            <GridSquare
              key={columnIndex}
              text={text}
              onChange={(newText) => handleTextChange(rowIndex, columnIndex, newText)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
