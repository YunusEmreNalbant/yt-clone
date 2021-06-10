import React from 'react';
import './App.css'
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideo from "./RecommendedVideo";

const App = () => {
    return (
        <div className={"app"}>

            <Header/>
            <div className="app__page">
                <Sidebar/>
                <RecommendedVideo/>
            </div>

        </div>
    );
};

export default App;
