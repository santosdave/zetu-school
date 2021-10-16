import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home';
import StudentSignIn from '../student/StudentSignIn';
import StudentSignUp from '../student/StudentSignUp';
import StudentDashboard from '../student/StudentDashboard';
import Student from '../student/Student';
import StudentUpdate from '../student/StudentUpdate';
import StudentDelete from '../student/StudentDelete';
import StudentList from '../student/StudentList';
import Admin from '../admin/Admin';
import AdminSignIn from '../admin/AdminSignIn';
function MainRoute() {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/studentSignIn" exact component={StudentSignIn}/>
            <Route path="/adminSignIn" exact component={AdminSignIn}/>
            <Route path="/studentSignUp" exact component={StudentSignUp}/>
            <Route path="/student" exact component={Student}/>
            <Route path="/admin" exact component={Admin}/>
            <Route path="/studentlist" exact component={StudentList}/>
            <Route path="/update/:id" exact component={StudentUpdate}/>
            <Route path="/delete/:id" exact component={StudentDelete}/>
            <Route path="/studentdashboard" exact component={StudentDashboard}/>
        </Switch>
    )
}

export default MainRoute
