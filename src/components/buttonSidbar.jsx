import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function ButtonSidebar({ image, name, path, className }) {
 

    return (<>
    <button   className=''>
         <Link  className={className+'button-sid'} to={path}>
            <img src={image} alt="no imag" />
            <h3>{name}</h3>

        </Link>
    </button>
       
    </>
    );

}