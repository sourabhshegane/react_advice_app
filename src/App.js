import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {useState} from 'react'

function App() {

  const [advice, setAdvice] = useState('')
  
  const getAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then(res => {
      setAdvice(res.data.slip.advice)
      console.log(res.data.slip.advice)
    }).catch(error => console.log(error))
  }

  return (
    <div>
      <div className="main_container">
        <div className="sub_main_container">
          <div className="adv_container">
              <h1 className="adv">{advice}</h1>
          </div>
          <button className="adv_btn" onClick={getAdvice}>
            Get advice
          </button> 
          </div>
          <h2>Made with ❤️ by Sourabh Shegane</h2>
        </div>
    </div>
  );
}

export default App;
