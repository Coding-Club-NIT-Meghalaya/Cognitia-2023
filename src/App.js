import './App.css';
import Timeline from './timeline.js';
import PopularEvents from './pop.js';
import Footer from './footer';
import ParalaxHome from './paralaxHome';
import NavBar from './navbar';

function App() {
  return (
    <>
    <div >
      <div className='fixed h-24 w-screen border-b-2 border-stone-300 z-50'>
        <NavBar/>
      </div>

      <ParalaxHome/>

    
      <div className='flex justify-center '>
        <div className="w-11/12 sm:pb-0"></div>
      </div>
      

      <div className='flex justify-center'>
        <div className="w-11/12 border-b-2 border-stone-300"></div>
      </div>

      <Timeline />


      <div className='flex justify-center'>
        <div className="w-11/12 border-b-2 border-stone-300"></div>
      </div>

      <PopularEvents/>

      <div className='flex justify-center'>
        <div className="w-11/12 border-b-2 border-stone-300"></div>
      </div>

      <Footer/>
    </div>
    </>
  );
}

export default App;
