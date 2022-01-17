import * as React from "react";
import { Switch, Route, Link } from "react-router-dom";

export default function Dashboard() {
  // These routes are defined when this component is loaded on demand via
  // dynamic import() on the home page!
  return (
     <Messages />
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
