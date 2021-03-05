import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import Layout from '../pages/Layout';

const App = () => {
    return (
        <BrowserRouter>
                <Layout>
            <Switch >
                <Route path='/login' component={Login} exact />
                <Route path='/register' component={Register} exact />
                    <Route path='/' component={Home} exact />
                    <Route component={NotFound} />
                
            </Switch>
                </Layout>
        </BrowserRouter>
    );
}
export default App;