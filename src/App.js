// import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";


function App() {

    return <div className="wrapper clear">

        <Header />


        <Drawer/>




<div className="content p-40 ">

    <div className="d-flex align-center justify-between">
        <h1>Все кроссовки</h1>

        <div className="search-block d-flex ">
            <img  width={18} height={18} src="/img/search.png" alt=""/>
            <input placeholder="Search"/>
        </div>
    </div>


    <div className="d-flex">
        <Card />

    </div>

</div>

    </div>;
}

export default App;
