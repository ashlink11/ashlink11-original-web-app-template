import React, { Component} from 'react'

export default function App() {
  return (
    <div>
      <div>
        <h1>The Dojo Project: A React Build Toolchain Tutorial and Template</h1>
        <p>Last updated: Wednesday, June 10, 2020</p>
      </div>
      <div>
        <h1>About</h1>
        <p>This is an open-source, lightweight, maintainable React app template.</p>
        <p>It's built with as few dependencies and configurations as possible.</p>
        <p>Toolchain is built from scratch with yarn, Parcel, React & GitHub Pages.</p>
        <p>Official documentation of all tech is heavily referenced through the tutorial for best-practices.</p>
        <p>Latest versions of all tech is used to reduce vulnerabilities.</p>
        <p>The tutorial and documentation lives in the <a href="https://github.com/hashbangash/dojo" target="_blank">README wiki on GitHub</a> and includes:</p>
        <ul>
          <li>Use cases & limitations</li>
          <li>Detailed description of dependency choices</li>
          <li>Set up local files</li>
          <li>Set up development environment</li>
          <li>Set up build process</li>
          <li>Deploy to production</li>
          <li>Verify the build</li>
          <li>2 experiments with Dockerization</li>
          <li>1 experiment with react-router-dom</li>
          <li>Reflections</li>
          <li>Extra troubleshooting</li>
          <li>etc.</li>
        </ul>
      </div>
      <div>
        <h1>Page Speed</h1>
        <p>Open the Chrome DevTools Network tab, reload, and check out the file sizes and page load speed.</p>
        <p>Test this site on <a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank">Google PageSpeed Insights</a>.</p>
      </div>
      <p>Copyright 2020 - Ash Grevelink</p>
    </div>
  );
}
