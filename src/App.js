import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
  
import {Layout,Typograhy,Space} from 'antd';
const App = () => {
    return (
        <div className="app">
            <div className="navbar"></div>
            <div className="main"></div>
            <div className="footer"></div>
        </div>
    );
};

export default App;