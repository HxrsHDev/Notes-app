import React from "react";

function Footer(){

let date = new Date();
let year = date.getFullYear();    
return (
    <div className="Foot">
    <footer>
    <p>copyright © {year}</p>
    </footer>
    </div>
);
}

export default Footer;