import React from "react";
import '../App.css';
import ButtonSidebar from "./buttonSidbar";


function SideBar(params) {

    const handelHomePage=()=>{
        
    }
    return (
        <>
            <div className="sidebar">
                <div className="top">
                <ButtonSidebar event={handelHomePage} name={'Home Page'} image={"./images/star.png"} className={'orange-border'}/>
                <ButtonSidebar event={''} name={'Games Page'} image={"./images/catogares.png"} className={''}/>

                </div>
                <div className="down">
                <ButtonSidebar event={''} name={'Setting'} image={"./images/setting.png"} className={''}/>
                <ButtonSidebar event={''} name={'Help'} image={"./images/down.png"} className={''}/>
                   
                </div>
            </div>
        </>
    );
}
export default SideBar;