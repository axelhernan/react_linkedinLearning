import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// components
import App from "./../App";
import Dish from "./dish";
import Dishes from "./dishes";
import Countries from "./countries";
import Country from "./country";
import NewDish from "./newDish";
import NotFound from "./notFound"

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/platos" component={Dishes} />
            <Route path="/plato/:name" component={Dish} />
            <Route path="/paises" component={Countries} />
            <Route path="/pais" component={Country} />
            <Route path="/newdish" component={NewDish} />
            <Route component={NotFound} /> {/* el ultimo siempre es el notfound*/}
        </Switch>
    </BrowserRouter>

)

export default Router;