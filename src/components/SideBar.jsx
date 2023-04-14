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
                    <ButtonSidebar path={'/'} name={'Home Page'} image={"./images/star.png"} className={''} catev={true} />
                    <ButtonSidebar path={'/GamePage'} name={'Games Page'} image={"./images/catogares.png"} catev={true} className={''} />
                </div>
                <div className="down">
                    <ButtonSidebar path={'kf'} name={'Setting'} image={"./images/setting.png"} catev={true} className={''} />
                    <ButtonSidebar path={'df'} name={'Help'} image={"./images/down.png"} catev={true} className={''} />
                </div>
            </div>
        </>
    );
}
export default SideBar;