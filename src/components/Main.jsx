import React from "react";
import '../App.css';
import BouttonAdd from "./button";
import Cardes from "./Card";

function MainPage() {


    return (
        <>
            
            <div className='main'>

                <div>
                    <img src="https://i.ytimg.com/vi/4uP2MyUL49s/maxresdefault.jpg" alt="" />

                </div>
                <div className="contant">
                    <h2>title for game</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum laborum libero molestiae cumque obcaecati, vel corporis, neque dolore optio sapiente ipsa ex culpa accusamus rerum, tempore sunt sequi deleniti. Quia.</p>
                    <span>19.99$</span>
                    <BouttonAdd name={'Play now'} type='button' />
                </div>
                <div>
                    <div>
                        <img src="https://cdn.mos.cms.futurecdn.net/Dy845n8HqhQp5R4FrKtEpB.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://images.ladbible.com/resize?type=jpeg&quality=70&width=720&fit=contain&gravity=null&url=https://eu-images.contentstack.com/v3/assets/bltbc1876152fcd9f07/blt21c4a27a0e4503b0/62de8369ac437b3b425d8556/straythumb.jpg" alt="" />

                    </div>
                </div>

                <Cardes />


            </div>

        </>

    );

}
export default MainPage;