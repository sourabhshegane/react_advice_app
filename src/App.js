import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'

function App() {
  
  useEffect(() => {
    getAdvice()
  }, []);

  const [advice, setAdvice] = useState('')
  
  const getAdvice = () => {
    setAdvice('Hang on, getting you an awesome advice...');
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
          <h2 className="made_by">Made with ❤️ by Sourabh</h2>
        </div>
    </div>
  );
}

export default App;
