import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

const GridSquare = ({ text }) => {
  return (
    <div className="square">
      <div className="square-content">{text}</div>
    </div>
  );
};


function App() {
  const gridData = []; // Array to hold the custom text for each square

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
          {row.map((text, columnIndex) => (
            <GridSquare key={columnIndex} text={text} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;