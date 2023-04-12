import React from "react";
import '../App.css';
import { useEffect, useState } from 'react';
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

function HomePage() {
    
    
    return (
        <div className='body'>
    
        <NavBar/>
        <div className="in-pages">
        <SideBar/>
        
        </div>
    </div>

    );

}
export default HomePage;