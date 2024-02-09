import logo from './logo.svg';
import promamahric from './promamahric.png';
import promo2 from './promo2.png';
import promo from './promo.png';
import kanamob from './kanamob.png';
import am2 from './am2.png';
import './App.css';
import React, {useEffect} from 'react';



function App() {


  const downloadHandler = () => {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.kanachewata.drama';
  }

  useEffect(() => {
    
    setTimeout(() => {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.kanachewata.drama';
    }, 2000);
  }, []);



  return (
    <div className="App">
      <header className="App-header">
       <h1>ቃና ቲቪን ከሞባይልዎ ይመልከቱ። አፑን ከፕለይስቶር ያውርዱ። </h1>
       <button onClick={downloadHandler} className='download-button'>Download</button>
       <img src={kanamob} className="mobile-image" alt="logo" />
       <img src={promo} className="App-log am-dis" alt="logo" />
       <img src={promo2} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
