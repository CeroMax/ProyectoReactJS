
import './App.css';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

export function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
          <NavBar/>
          www.miTienda.com/
      </header>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route/>
        <Route/>
      </Routes>
      <body>
        <h1>"LALALALALAL"</h1>
      </body>
      <footer>

      </footer>
    </BrowserRouter>
  );
}

//export default App;
