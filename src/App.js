import logo from './logo.svg';
import promamahric from './promamahric.png';
import promo2 from './promo2.png';
import am1 from './am1.png';
import am2 from './am2.png';
import './App.css';
import React, {useEffect} from 'react';



function App() {


  const downloadHandler = () => {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.amharicmovies.drama';
  }

  useEffect(() => {
    
    setTimeout(() => {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.amharicmovies.drama';
    }, 4000);
  }, []);



  return (
    <div className="App">
      <header className="App-header">
       <h1>የአማርኛ ፊልም እና ድራማ።  አፑን ከፕለይስቶር ያውርዱ። </h1>
       <button onClick={downloadHandler} className='download-button'>Download</button>
       <img src={am2} className="mobile-image" alt="logo" />
       <img src={promamahric} className="App-log am-dis" alt="logo" />
       <img src={promo2} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
