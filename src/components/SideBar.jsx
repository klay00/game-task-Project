import React from "react";
import '../App.css';

function SideBar(params) {
    return (
        <>
            <div className="sidebar">
                <div className="top">
                    <button className="orange-border">
                        <img src="./images/star.png" alt="" />
                       <h3>Home Page</h3>
                    </button>
                    <button>
                        <img src="./images/catogares.png" alt="" />
                        <h3>Games Page</h3>

                    </button>
                </div>
                <div className="down">
                <button>
                        <img src="./images/setting.png" alt="" />
                        <h3>Setting</h3>
                    </button>
                    <button>
                        <img src="./images/down.png" alt="" />
                        <h3>Help</h3>

                    </button>
                </div>
            </div>
        </>
    );
}
export default SideBar;