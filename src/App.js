import './App.css';
import CountDownList from './components/CountDownList/CountDownList';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

// const dates = Array.from(require('./dates.json'))
const dates = [
  {
    title: 'التقديم',
    date: '2023-08-07T06:00:00',
  },
  {
    title: 'الكشف الطبي',
    date: '2023-08-16T06:00:00',
  },
  {
    title: 'الإرجاء',
    date: '2023-09-07T06:00:00',
  },
  {
    title: 'سماع السلاح',
    date: '2023-10-07T06:00:00',
  },
  {
    title: 'التدريب',
    date: '2023-10-09T06:00:00',
  },
  {
    title: 'التجنيد',
    date: '2023-12-01T06:00:00',
  },
];

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
