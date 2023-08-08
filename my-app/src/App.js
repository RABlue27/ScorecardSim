import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const GridSquare = ({ text }) => {
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
      <div className="square" style={squareStyle} >
        <div className="square-content" >{text}</div>
      </div>
      <button onClick={increaseBorder}> ++ </button> 
      <button onClick={decreaseBorder}> -- </button> 
    </div>
  );
};

const Lineup = ( { name }) => {
  return (
    <div>
      <textarea>
        {name}
      </textarea>
    </div>
  );
};

function App() {
  const gridData = [];

  for (let i = 0; i < 10; i++) {
    const row = [];
    for (let j = 0; j < 10; j++) {
      row.push(`Square ${i}-${j}`);
    }
    gridData.push(row);
  }

  return (
    <div className="grid-container">
      {gridData.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">    
          <Lineup /> 
          {row.map((text, columnIndex) => (
            <GridSquare key={columnIndex} text={text} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
