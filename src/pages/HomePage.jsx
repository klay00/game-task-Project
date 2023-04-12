import React from "react";
import '../App.css';
import { useEffect, useState } from 'react';
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import MainPage from "../components/Main";


function HomePage() {
    
    
    return (
        <div className='body'>
    
        <NavBar/>
        <div className="in-pages">
        <SideBar/>
        <MainPage/>
        </div>
    </div>

    );

}
export default HomePage;