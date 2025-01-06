import Background from './components/Background';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import styles from './App.module.scss';

function App() {
  return (
    <div >
      <div className= ' d-flex flex-column background '>
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  )
}

export default App;