import React from 'react';
import '../src/index.css'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";

import Gallary from './components/Gallary';
import InfoProduct from './components/InfoProduct';
import Header from './components/Header';




function App() {

  return (
    <>

      <main className='max-w-1440px mx-auto'>
          <Header />
        <div className='w-[870px] right-0 left-0 mx-auto mt-16 rounded-md p-3 h-auto flex justify-between  '>

        <Gallary />
        
        <InfoProduct />
          
        </div>

      </main>

    </>
  )
}

export default App