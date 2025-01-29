
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
      <div>
        <img src={Blur} className='background-image-blur absolute'/>
        <div className='header-fixed'>
        <Header />
        </div>
        <div>
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