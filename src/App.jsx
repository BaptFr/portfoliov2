import Background from './components/Background';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import styles from './App.module.scss';

function App() {
  return (
    <div className='background-image d-flex flex-column front-content background-animation '>
          <Background />
          <Header />
          <Content />
          <Footer />
    </div>
  )
}

export default App;