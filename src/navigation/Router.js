import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// imports
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import LoginPage from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import MonthlyTracking from "../components/MonthlyTracking/MonthlyTracking";
import "../App.css";

const Router = () => {
  const [user, setUser] = useState(null);
  const authComponent = () => {
    return user ? (
      <Redirect to="/home" />
    ) : (
      <LoginPage user={user} setUser={setUser} /> 
    );
  };

  // render() {
    return (
      <Switch>
        <Route path="/" component={authComponent} exact />
        <Layout>
          <Switch>
            <Route exact path='/2023/January' render={(props) => <MonthlyTracking {...props} month={"January"} year={"2023"} email={user}/>} />
            <Route exact path='/2023/February' render={(props) => <MonthlyTracking {...props} month={"February"} year={"2023"} />} />
            <Route exact path='/2023/March' render={(props) => <MonthlyTracking {...props} month={"March"} year={"2023"} />} />
            <Route exact path='/2023/April' render={(props) => <MonthlyTracking {...props} month={"April"} year={"2023"} />} />
            <Route exact path='/2023/May' render={(props) => <MonthlyTracking {...props} month={"May"} year={"2023"} />} />
            <Route exact path='/2023/June' render={(props) => <MonthlyTracking {...props} month={"June"} year={"2023"} />} />
            <Route exact path='/2023/July' render={(props) => <MonthlyTracking {...props} month={"July"} year={"2023"} />} />
            <Route exact path='/2023/August' render={(props) => <MonthlyTracking {...props} month={"August"} year={"2023"} />} />
            <Route exact path='/2023/September' render={(props) => <MonthlyTracking {...props} month={"September"} year={"2023"} />} />
            <Route exact path='/2023/October' render={(props) => <MonthlyTracking {...props} month={"October"} year={"2023"} />} />
            <Route exact path='/2023/November' render={(props) => <MonthlyTracking {...props} month={"November"} year={"2023"} />} />
            <Route exact path='/2023/December' render={(props) => <MonthlyTracking {...props} month={"December"} year={"2023"} />} />
            <Route exact path='/home' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Switch>
    );
  // }
}
export default Router;