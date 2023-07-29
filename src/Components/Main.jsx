import React from 'react';
import Home from './HomePage/Home/Home';
import toast, { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Toaster/>
        </div>
    );
};

export default Main;