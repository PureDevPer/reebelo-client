import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../landing/Landing";
import Order from "../product/Product";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/product/:name" component={Order} />
        </Switch>
    );
};

export default Routes;
