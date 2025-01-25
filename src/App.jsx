
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/homepage/Homepage';
import styles from './App.module.scss';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Blur from './assets/images/blur1.png';


function App() {
  return (
    <div >
      <div className= 'd-flex flex-column background background-image '>
        <img src={Blur} className='background-image-blur absolute'/>
        <div className='header-fixed'>
        <Header />
        </div>
        <div className= ' d-flex flex-column'>
        <Suspense>
          <Outlet />
        </Suspense>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App;