import React from "react";
import '../App.css';
function BouttonAdd({ name, type }) {
    return (
        <>
            <button className="botton-add" type={type}>{name}</button>
        </>
    );
}
export default BouttonAdd