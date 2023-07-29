import React from 'react';
import Home from './HomePage/Home/Home';
import toast, { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Outlet/>
            <Toaster/>
        </div>
    );
};

export default Main;