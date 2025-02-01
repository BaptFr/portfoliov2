
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';


function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/portfoliov2/'; //To Hide the Header

  return (
    <div >
      <div>
        <img src='assets/images/blur1.webp' className='background-image-blur absolute'/>
        {!isLandingPage && (
        <div className='header-fixed'>
        <Header />
        </div>)}
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