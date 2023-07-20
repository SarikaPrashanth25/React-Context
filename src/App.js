import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './component/Menu'
import Home from './component/Home'
import Pnf from './component/Pnf'
import Ex1 from './component/Ex1'
import Ex2 from './component/Ex2'
import Ex3 from './component/Ex3'


function App(props) {
  return (
    <BrowserRouter>
        <Menu/>

        <Routes> {/* to switch route path */ }
               <Route path={'/'} element={<Home/>} /> {/* index path - home page */}
               <Route path={'/ex1'} element={<Ex1/>} />
               <Route path={'/ex2'} element={<Ex2/>} />
               <Route path={'/ex3'} element={<Ex3/>} />
               <Route path={'/*'} element={<Pnf/>} /> {/* efault path (/*) - page not fount */}
        </Routes>
    </BrowserRouter>
  )
}

export default App