import logo from './logo.svg';
// import img from './bb.png';
// import img1 from './bb1.jpg';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <img src={img} className="App-logo" alt="logo" /> */}
        {/* <img src={img1} className="App-logo" alt="logo" /> */}


        <p>
          Hello world with reactjs huy
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
