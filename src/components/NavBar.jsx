import React from "react";
import '../App.css';
import BouttonAdd from "./button";
function NavBar() {


    return (
        <>
            <nav>
                <div className="logo">

                    <img src="./images/logo.png" alt="" />
                    <form action="">
                        <input type="text" name="" id="" placeholder="search for game" />
                        <BouttonAdd name={'search'} type='submit' />
                    </form>
                </div>

                <div className="info">
                    <img src="./images/like.png" alt="" />
                    <img src="./images/shop.png" alt="" />
                    <img src="./images/message.png" alt="" />


                </div>

            </nav>

        </>

    );

}
export default NavBar;