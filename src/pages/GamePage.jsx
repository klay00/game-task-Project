import axios from "axios";
import React, { useEffect, useState } from "react";
import '../App.css';
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function GamePage() {

    const [product, setProducr] = useState([]);
    const conection=true;
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((response) => {
           
           if (response.status!=200) {
          
           }else{
            console.log('is 200'); 
            setProducr(response.data);
           }
                                      
        })
    }, [])
    return (
        <>

            

            <NavBar />
            <div className="in-pages">
                <SideBar />
                
                <div className="game-page">
                    {
                        product==''?<div class="lds-circle"><div></div></div>:
                        product.map(product => {
                            return (
                                <div key={product.id} className='game'>
                                    <img src={product.image} alt="" />
                                    <h5>{product.title}</h5>
                                    <span>{product.price}$</span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>




        </>
    );
}