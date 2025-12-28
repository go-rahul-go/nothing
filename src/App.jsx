

import { Routes, Route, useParams } from 'react-router'

import NavBar from './components/NavBar';
import { useState, useEffect, useContext, createContext } from 'react';


import Loader from './components/Loader';
export const MenuContext = createContext()
import Footer from './components/Footer';
import { Suspense, lazy } from 'react';

const AllProducts = lazy(() => import("./Pages/AllProducts"))
const Home=lazy(()=>import("./Pages/Home"))
const Phone3 = lazy(()=>import("./Pages/Phone3"))


function App() {
  const [menuOpen, changeMenuOpen] = useState(false)





  return (
    <>
      <Suspense fallback={<Loader/>}>
        <NavBar changeMenuOpen={changeMenuOpen} />
        <MenuContext.Provider value={menuOpen}>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/phone3" element={<Phone3 />} />
            <Route path="/all-products/:id" element={<AllProducts />} />
          </Routes>
        </MenuContext.Provider>
        <Footer />
      </Suspense>



    </>
  )

}

export default App;
