import React from 'react';
import Home from './HomePage/Home/Home';
import toast, { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Home/>
            <Toaster/>
        </div>
    );
};

export default Main;