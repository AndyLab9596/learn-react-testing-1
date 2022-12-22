import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);

  const color = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  console.log(color);

  return (
    <div>
      <button
        disabled={disabled}
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={() => setButtonColor(color)}>
        Change to {replaceCamelWithSpaces(color)}
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
