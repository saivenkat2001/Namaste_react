import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement("h1",{id:"heading"},"Hello World");
// const heading = <h1 className="heading">Hello World!!!!</h1>;

const Title =()=>(
    <h1>Hello World!!!</h1>
);

const Heading = ()=>(
    <div>
        <Title/>
        <h2>Hiiiii</h2>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);