import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardHome from './../DashboardHome/DashboardHome.component';
import NewTask from './../NewTask/NewTask.component';
import Pending from './../Pending/Pending.component';
import Resolved from './../Resolved/Resolved.component';
import TicketPage from './../TicketPage/TicketPage.component';


const DashboardMain = () => {
    return (
        <div>
            <Switch>
                <Route exact path={["/", "/dashboard"]} component={DashboardHome} />
                <Route exact path="/raise-ticket" component={NewTask} />
                <Route exact path="/pending" component={Pending} />
                <Route exact path="/resolved" component={Resolved} />
                <Route exact path="/ticket/ticket" component={TicketPage} />
            </Switch>
        </div>
    )
}

export default DashboardMain
