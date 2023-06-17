import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../NavPages/Home/Home';
import Faq from '../NavPages/Faq/Faq';
import Signup from '../NavPages/Auth/Signup';
import Login from '../NavPages/Auth/Login';
import BookDemo from '../NavPages/Auth/BookDemo';
import AboutUs from '../FootPages/AboutUs'
import Careers from '../FootPages/Careers';
import Contact from '../FootPages/Contact';
import Blog from '../FootPages/Blog';
import Privacy from '../FootPages/Privacy';
import Tnc from '../FootPages/Tnc';
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
                <Route path='/aboutus' element={<AboutUs/>}/>
                <Route path='/career' element={<Careers/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/privacyPolicy' element={<Privacy/>}/>
                <Route path='/tnc' element={<Tnc/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default RouterCompo