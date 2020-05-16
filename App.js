// code from https://codesandbox.io/s/react-router-basic-bnpsd?from-embed=&file=/example.js:117-469
// https://reacttraining.com/react-router/web/example/basic
// https://reacttraining.com/react-router/web/guides/quick-start
import React, { Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/dojo/">Home</Link>
          </li>
          <li>
            <Link to="/dojo/about">About</Link>
          </li>
          <li>
            <Link to="/dojo/page-speed">Page Speed</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time

          404 route from this tutorial:
          https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/#router-hooks
        */}
        <Switch>
          <Route exact path="/dojo/">
            <Home />
          </Route>
          <Route path="/dojo/about">
            <About />
          </Route>
          <Route path="/dojo/page-speed">
            <Dashboard />
          </Route>
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h3> Welcome to the Dojo Project.</h3>
      <p>This is an open-source, lightweight, maintainable React app template with react-router-dom.</p>
      <p>It's built with as few dependencies and configurations as possible.</p>
      <p>Toolchain is built from scratch with yarn, Parcel, React, react-router-dom, & GitHub Pages.</p>
      <p>Learn how to build your own: <a href="https://github.com/hashbangash/dojo" target="_blank">Detailed bill of tech and comprehensive tutorial</a></p>
      <p>Last updated: Friday, May 15, 2020</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>The tutorial and documentation lives in the <a href="https://github.com/hashbangash/dojo" target="_blank">README wiki on GitHub</a> and includes:</p>
      <ul>
        <li>Detailed description of dependency choices</li>
        <li>Set up local files</li>
        <li>Set up development environment</li>
        <li>Set up build process</li>
        <li>Deploy to production</li>
        <li>Verify the build</li>
        <li>2 attempts at Dockerization</li>
        <li>etc.</li>
      </ul>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Page Speed</h1>
      <p>Open the Chrome DevTools Network tab, reload, and check out the file sizes and page load speed.</p>
      <p>Test this site on <a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank">Google PageSpeed Insights</a>.</p>
    </div>
  );
}
