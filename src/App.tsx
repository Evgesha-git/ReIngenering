import React from 'react';
import './App.css';
import Header from "./components/header/header";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/homePage/homePage";
import LogPage from "./components/logPage/logPage";
import AccountPage from "./components/accountPage/accountPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Header/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='login' element={<LogPage/>}/>
                    <Route path='account' element={<AccountPage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
