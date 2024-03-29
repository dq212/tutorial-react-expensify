//install -> imoprt -> use
// import validator from 'validator';

import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
//pages
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFound from '../components/NotFound';
//components
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

 export const history = createHistory();


 const AppRouter = () => (
    <Router history={history}>
    <div>
   
    <Switch>
        <PublicRoute path='/' component={LoginPage} exact={true}/>
        <PrivateRoute path='/dashboard' component={ExpenseDashboardPage}/>
        <PrivateRoute path='/create' component={AddExpensePage}/>
        <PrivateRoute path='/edit/:id' component={EditExpensePage}/>
        <Route component={NotFound}/>
    </Switch>
    </div>
</Router>
 )

export default AppRouter;