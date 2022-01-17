import * as React from "react";
import { Switch, Route, Link } from "react-router-dom";

export default function Dashboard() {
  // These routes are defined when this component is loaded on demand via
  // dynamic import() on the home page!
  return (
    <Switch>
      <Route path="/" component={<DashboardLayout />}>
        <Route index component={<DashboardIndex />} />
        <Route path="messages" component={<Messages />} />
      </Route>
    </Switch>
  );
}

function DashboardLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard Home</Link>
          </li>
          <li>
            <Link to="/dashboard/messages">Messages</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function DashboardIndex() {
  return (
    <div>
      <h2>Dashboard Index</h2>
    </div>
  );
}

function Messages() {
  return (
    <div>
      <h2>Messages</h2>
      <ul>
        <li>Message 1</li>
        <li>Message 2</li>
      </ul>
    </div>
  );
}
