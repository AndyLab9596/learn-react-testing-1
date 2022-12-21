import { useState } from 'react';
import './App.css';

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
        style={{ backgroundColor: buttonColor }}
        onClick={handleChangeColor}>
        Change to {`${buttonColor === 'red' ? 'blue' : 'red'}`}
      </button>
      <input type={'checkbox'}
        value={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
