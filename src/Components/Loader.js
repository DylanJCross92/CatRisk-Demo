import React from 'react';
import { Preloader } from "ui-toolkit";
require("../global.css");

const Loader = () => (
   <div className="loaderOverlayWrapper">
       <Preloader size={64} color="#FFF"/>
   </div>
);

export default Loader;
