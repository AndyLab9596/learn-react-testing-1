import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const handleChangeColor = () => {
    if (buttonColor === 'red') {
      setButtonColor('blue');
    } else {
      setButtonColor('red')
    }
  }

  return (
    <div>
      <button
        disabled={disabled}
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={handleChangeColor}>
        Change to {`${buttonColor === 'red' ? 'blue' : 'red'}`}
      </button>
      <input
        type={'checkbox'}
        id="disable-button-checkbox"
        value={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor='disable-button-checkbox' >
        Disable button
      </label>
    </div>
  );
}

export default App;
