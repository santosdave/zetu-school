import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home';
import StudentSignIn from '../student/StudentSignIn';
import StudentSignUp from '../student/StudentSignUp';
import StudentDashboard from '../student/StudentDashboard';
function MainRoute() {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/studentSignIn" exact component={StudentSignIn}/>
            <Route path="/studentSignUp" exact component={StudentSignUp}/>
            <Route path="/studentDashboard" exact component={StudentDashboard}/>
        </Switch>
    )
}

export default MainRoute
