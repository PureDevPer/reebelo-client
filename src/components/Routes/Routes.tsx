import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../landing/Landing";
import Order from "../order/Order";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/order/:name" component={Order} />
        </Switch>
    );
};

export default Routes;
