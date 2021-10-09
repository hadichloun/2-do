import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  return (
    <div className="App">
    <span className="heading"> 2-Do</span>
    <InputFeild /> 

    </div>
  );
}

export default App;
