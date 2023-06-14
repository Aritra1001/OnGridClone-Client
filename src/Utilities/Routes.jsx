import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../NavPages/Home/Home';
import Faq from '../NavPages/Faq/Faq';
import Signup from '../NavPages/Auth/Signup';
import Login from '../NavPages/Auth/Login';
import BookDemo from '../NavPages/Auth/BookDemo';
// import Why from '../NavPages/Home/Why';

const RouterCompo = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path='/why' element={<Why/>}/> */}
                {/* <Route path='/' */}
                <Route path='/faq' element={<Faq/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/bookDemo' element={<BookDemo/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default RouterCompo