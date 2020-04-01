import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NewProduct from './pages/NewProduct';
import EditProduct from './pages/EditProduct';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/products/new" component={NewProduct} />
                <Route path="/products/edit" component={EditProduct} />

            </Switch>
        </BrowserRouter>
    );
}
