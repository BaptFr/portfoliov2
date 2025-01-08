
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/homepage/Homepage';
import styles from './App.module.scss';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';


function App() {
  return (
    <div >
      <div className= 'd-flex flex-column background background-image '>
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