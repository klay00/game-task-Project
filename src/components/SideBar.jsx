import React from "react";
import '../App.css';
import ButtonSidebar from "./buttonSidbar";


function SideBar(params) {

    const handelHomePage = () => {
        <>
        
        </>
    console.log('test');
    }
    return (
        <>
            <div className="sidebar">
                <div className="top">
                    <ButtonSidebar event={handelHomePage} name={'Home Page'} image={"./images/star.png"} className={'orange-border'} />
                    <ButtonSidebar event={handelHomePage} name={'Games Page'} image={"./images/catogares.png"} className={''} />
                </div>
                <div className="down">
                    <ButtonSidebar event={handelHomePage} name={'Setting'} image={"./images/setting.png"} className={''} />
                    <ButtonSidebar event={handelHomePage} name={'Help'} image={"./images/down.png"} className={''} />
                </div>
            </div>
        </>
    );
}
export default SideBar;