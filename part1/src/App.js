import './App.css';

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      Hola Mundo
      <Footer></Footer>
    </div>
  );
}

export default App;
