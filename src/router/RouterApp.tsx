import React from 'react'
// import {
//     Router,
//     Route
// } from "react-router";
import Workout from '../components/Workout';
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import Header from '../components/Header';
import Weathers from '../components/Weathers';
// HashRouter,
function RouterApp() {
    return (
        <>
            <BrowserRouter>
            <Header/>
                <Switch >
                    <Route exact path="/" >
                        <Weathers/>
                    </Route>
                    <Route path="/workout" >
                        <Workout />
                    </Route>
                </Switch>
            </BrowserRouter>

        </>
    )
}

export default RouterApp
