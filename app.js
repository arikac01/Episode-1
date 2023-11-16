import React from "react";
import ReactDOM from "react-dom/client";

//Creating Nested Elements using core React with React.createElement, without JSX
const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },[
        React.createElement("h1", {}, "Chandana"), 
        React.createElement("h2", {}, "Learnings")
    ]), React.createElement("div", { id: "child2" },[
        React.createElement("h1", {}, "I'm h1 tag"), 
        React.createElement("h2", {}, "I'm h2 Tag")
    ])]
);


console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);