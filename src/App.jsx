

import { Routes, Route } from 'react-router'

import NavBar from './components/NavBar';
import { useState, useEffect, useContext, createContext } from 'react';
import Home from './Pages/Home';
import Phone3 from './Pages/Phone3';

export const MenuContext = createContext()
function App() {
  const [menuOpen,changeMenuOpen]=useState(false)


  return (
    <>
      <NavBar changeMenuOpen={changeMenuOpen}/>
      <MenuContext.Provider value={menuOpen}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/phone3" element={<Phone3/>}/>
        </Routes>
      </MenuContext.Provider>


    </>
  )

}

export default App;
