import React from "react";
import '../App.css';
function BouttonAdd({ name, type }) {
    console.log('fdfd');
    return (
        <>
            <button className="botton-add" type={type}>{name}</button>
        </>
    );
}
export default BouttonAdd