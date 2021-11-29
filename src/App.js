import React from 'react';
import  { NavBar }  from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

function App() {


  return (
      <BrowserRouter>
     
          <NavBar/>
          <AppRouter/>

          {/* <Footer/> */}
        

      </BrowserRouter>
  );
}

export default App;