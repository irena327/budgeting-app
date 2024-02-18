import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// imports
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import LoginPage from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import MonthlyTracking from "../components/MonthlyTracking/MonthlyTracking";
import AsiaTrip from "../components/AsiaTrip/AsiaTrip";
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
            <Route exact path='/2024/January' render={(props) => <MonthlyTracking {...props} month={"January"} year={"2024"} email={user}/>} />
            <Route exact path='/2024/February' render={(props) => <MonthlyTracking {...props} month={"February"} year={"2024"} />} />
            <Route exact path='/2024/March' render={(props) => <MonthlyTracking {...props} month={"March"} year={"2024"} />} />
            <Route exact path='/2024/April' render={(props) => <MonthlyTracking {...props} month={"April"} year={"2024"} />} />
            <Route exact path='/2024/May' render={(props) => <MonthlyTracking {...props} month={"May"} year={"2024"} />} />
            <Route exact path='/2024/June' render={(props) => <MonthlyTracking {...props} month={"June"} year={"2024"} />} />
            <Route exact path='/2024/July' render={(props) => <MonthlyTracking {...props} month={"July"} year={"2024"} />} />
            <Route exact path='/2024/August' render={(props) => <MonthlyTracking {...props} month={"August"} year={"2024"} />} />
            <Route exact path='/2024/September' render={(props) => <MonthlyTracking {...props} month={"September"} year={"2024"} />} />
            <Route exact path='/2024/October' render={(props) => <MonthlyTracking {...props} month={"October"} year={"2024"} />} />
            <Route exact path='/2024/November' render={(props) => <MonthlyTracking {...props} month={"November"} year={"2024"} />} />
            <Route exact path='/2024/December' render={(props) => <MonthlyTracking {...props} month={"December"} year={"2024"} />} />
            <Route exact path='/2025/January' render={(props) => <MonthlyTracking {...props} month={"January"} year={"2025"} email={user}/>} />
            <Route exact path='/2025/February' render={(props) => <MonthlyTracking {...props} month={"February"} year={"2025"} />} />
            <Route exact path='/2025/March' render={(props) => <MonthlyTracking {...props} month={"March"} year={"2025"} />} />
            <Route exact path='/2025/April' render={(props) => <MonthlyTracking {...props} month={"April"} year={"2025"} />} />
            <Route exact path='/2025/May' render={(props) => <MonthlyTracking {...props} month={"May"} year={"2025"} />} />
            <Route exact path='/2025/June' render={(props) => <MonthlyTracking {...props} month={"June"} year={"2025"} />} />
            <Route exact path='/2025/July' render={(props) => <MonthlyTracking {...props} month={"July"} year={"2025"} />} />
            <Route exact path='/2025/August' render={(props) => <MonthlyTracking {...props} month={"August"} year={"2025"} />} />
            <Route exact path='/2025/September' render={(props) => <MonthlyTracking {...props} month={"September"} year={"2025"} />} />
            <Route exact path='/2025/October' render={(props) => <MonthlyTracking {...props} month={"October"} year={"2025"} />} />
            <Route exact path='/2025/November' render={(props) => <MonthlyTracking {...props} month={"November"} year={"2025"} />} />
            <Route exact path='/2025/December' render={(props) => <MonthlyTracking {...props} month={"December"} year={"2025"} />} />
            <Route exact path='/asiatrip' render={(props) => <AsiaTrip/>} />
            <Route exact path='/home' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Switch>
    );
  // }
}
export default Router;