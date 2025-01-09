// import logo from './logo.svg';
import img from './bb.png';
// import img1 from './bb1.jpg';
import MyComponents from '../components/MyComponents';


import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />


        <MyComponents  />
      </header>
    </div>
  );
}

export default App;
