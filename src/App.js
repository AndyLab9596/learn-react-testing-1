import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');

  const handleChangeColor = () => {
    if (buttonColor === 'red') {
      setButtonColor('blue');
    } else {
      setButtonColor('red')
    }

  }

  return (
    <div>
      <button style={{ backgroundColor: buttonColor }} onClick={handleChangeColor}>
        Change to {`${buttonColor === 'red' ? 'blue' : 'red'}`}
      </button>
      <input type={'checkbox'} />
    </div>
  );
}

export default App;
