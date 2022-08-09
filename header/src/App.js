import React from "react";
import {
  BrowserRouter,
  Link,
  useMatch
} from "react-router-dom";

// This example show how you could create a custom
// <Link> that renders something special when the URL
// is the same as the one the <Link> points to.

const App = ({ name }) => {
  return (
    <BrowserRouter>
      <h1> {name} </h1>
      <div>
        <OldSchoolMenuLink to="/home-page" label="Home" />
        <OldSchoolMenuLink to="/about-page" label="About" />
        <hr />
      </div>
    </BrowserRouter>
  );
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className={match ? "active" : ""}>
      {match && "> "}
      <Link to={to}>{label}</Link>
    </div>
  );
}

export default App
