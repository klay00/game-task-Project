import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function ButtonSidebar({ image, name, path }) {
    const [isActive,setActive]=useState(false);

    const handelActive=(()=>{
      setActive(current => !current);
    });



    return (<>
    <button  className={isActive?"orange-border":''}>
         <Link  onClick={handelActive} className={'button-sid'} to={path}>
            <img src={image} alt="no imag" />
            <h3>{name}</h3>
        </Link>
    </button>
       
    </>
    );

}