import React from 'react';
import SideBar from '../components/SideBar/SideBar';
import MainPage from '../components/Home/MainPage';

const Main = () => {
    return (
        <main className='bg-raisinBlack text-coolGray font-OpenSans flex '>
            <SideBar />
            <MainPage />
        </main>
    );
};

export default Main;