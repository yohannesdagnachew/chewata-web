import logo from './logo.svg';
import promo from './promo.png';
import './App.css';

function App() {


  const downloadHandler = () => {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.amharicmovies.drama';
  }



  return (
    <div className="App">
      <header className="App-header">
       <h1>ይህ ቃና ቴሌቪዥን ነው።  አፑን ከፕለይስቶር ያውርዱ። </h1>

       <button onClick={downloadHandler} className='download-button'>Download</button>
       <img src={promo} className="App-log" alt="logo" />
      </header>
    </div>
  );
}

export default App;
