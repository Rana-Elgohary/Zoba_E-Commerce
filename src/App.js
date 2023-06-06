import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Women from './Pages/Women';

import { Routes, Route } from "react-router-dom"
import Beauty from './Pages/Beauty';
import Men from './Pages/Men';
import Home from './Pages/Home';
import Kids from './Pages/Kids';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Cart from './Pages/Cart';

import { ScrollToTop } from 'react-router-scroll-to-top';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <ScrollToTop>
        <Routes>
          <Route path="kids" element={
            <>
            <Kids></Kids>
            </>
          }></Route>
          <Route path="home" element={
            <>
            <Home></Home>
            </>
          }></Route>
          <Route path="men" element={
            <>
            <Men></Men>
            </>
          }></Route>
          <Route path="beauty" element={
            <>
            <Beauty></Beauty>
            </>
          }></Route>
          <Route path="/" element={
            <>
            <Women></Women>
            </>
          }></Route>
          <Route path="signin" element={
            <>
            <SignIn></SignIn>
            </>
          }></Route>
          <Route path="signup" element={
            <>
            <SignUp></SignUp>
            </>
          }></Route>
          <Route path="cart" element={
            <>
            <Cart></Cart>
            </>
          }></Route>

        </Routes>
      </ScrollToTop>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
