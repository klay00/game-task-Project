import React from "react";
import '../App.css';
function BouttonAdd({name}) {
    return (
        <>
            <button className="botton-add" type="submit">{name}</button>
        </>
    );
}
export default BouttonAdd