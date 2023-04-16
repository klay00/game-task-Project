import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function ButtonSidebar({ image, name, path, className }) {
    const [isActive,setActive]=useState(false);

    const handelActive=(()=>{
      setActive(true);
    });

    return (<>
    <button onClick={handelActive}   className={isActive?"orange-border":''}>
         <Link  className={className+'button-sid'} to={path}>
            <img src={image} alt="no imag" />
            <h3>{name}</h3>

        </Link>
    </button>
       
    </>
    );

}