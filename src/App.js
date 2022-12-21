import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');


  return (
    <div>
      <button style={{ backgroundColor: buttonColor }} onClick={() => setButtonColor('blue')}>
        Change to {`${buttonColor === 'red' ? 'blue' : 'red'}`}
      </button>
    </div>
  );
}

export default App;
