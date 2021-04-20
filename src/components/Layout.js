import React from 'react';
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <div className='flex'>
            <Navbar />
            <main className='flex-1'>
                <div className='bg-gray-400 py-4 px-2'>
                    <img className='w-12 h-12 rounded-full ml-auto'
                         src='https://images.immediate.co.uk/production/volatile/sites/3/2018/08/Simpsons_SO28_Gallery_11-fb0b632.jpg?quality=90&resize=620,413'
                         alt="Homer"/>

                </div>
                <div className="px-6 my-6" >
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;