import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Header from './components/Header';
import Left from './components/Left';
import Right from './components/Right';
import GsvProject from './pages/GsvProject';
import Footer from './components/Footer';

const Home=lazy(() => import('./pages/Home'));
const About=lazy(() => import('./pages/About'));
const Contact=lazy(() => import('./pages/Contact'));
const NotFound=lazy(()=> import('./pages/NotFound'));

function App() {
  return (
    <div>
    <Header/>
    <Left/>
      <Suspense fallback={ <div className=' text-white p-10'> Loading...</div>}>
      <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/home' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/contact' Component={Contact}/>
      <Route path='/gsvproject' Component={GsvProject}/>
      <Route path='*' Component={NotFound}/>
      </Routes>
      </Suspense>
      <Right/>
      <Footer/>
      </div>
  )
}

export default App
