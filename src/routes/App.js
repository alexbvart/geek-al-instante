import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import comicPath from '../components/comicPath';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Switch >
                <Route path='/' component={Home} exact />
                <Route path='/login' component={Login} exact />
                <Route path='/register' component={Register} exact />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}
export default App;