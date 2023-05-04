import axios from "axios";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../App.css';
import LodingComp from "../components/loding";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";



export default function GamePage() {

    const [product, setProducr] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((response) => {

            if (response.status != 200) {

            } else {
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
                        product == '' ? <LodingComp/> :
                            product.map(product => {
                                return (
                                    <div key={product.id} className='game'>
                                        <LazyLoadImage
                                            loading="lazy"
                                            src={product.image} alt=""
                                            useEffect="blur"
                                        />
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