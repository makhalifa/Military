import './App.css';
import CountDownList from './components/CountDownList/CountDownList';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

const dates = Array.from(require('./dates.json'))

function App() {
  return (
    <div className="App">
      <Nav />
      <CountDownList dates={dates} />
      <Footer />
    </div>
  );
}

export default App;
