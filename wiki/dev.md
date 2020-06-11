# Set up Development Environment

### Add Start script to package.json

This is the last step in the [Parcel React Recipe](https://parceljs.org/recipes.html#react).

```json
"scripts": {
  "start": "parcel index.html"
}
```

This means that now, when you want to run `parcel index.html` (which is explained below) that you can also run it with the shorthand `yarn start` since you added the `start` `script` to `package.json`.

### Review the setup so far

At this point, my [`package.json`](./package.json) looked like this:
```json
{
  "name": "dojo",
  "version": "1.0.0",
  "description": "First experiment with build process with yarn, parcel, and docker for React.",
  "main": "index.js",
  "repository": "https://github.com/hashbangash/dojo",
  "author": "Ash Grevelink",
  "license": "MIT",
  "private": false,
  "dependencies": {
    "core-js": "^3.6.5",
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  },
  "devDependencies": {
    "parcel-bundler": "^1.12.4"
  },
  "scripts": {
    "start": "parcel index.html"
  }
}
```
I checked online for the latest versions of `react` and `react-dom` (as of April 28, 2020) and this all looked good to me.

### Back to the [Parcel Getting Started doc](https://parceljs.org/getting_started.html) to set up the Development Environment

Next, create a few files, `index.html`, `index.js`, and `App.js`.

```
touch index.html
touch index.js
touch App.js
```

Paste this in `index.js`:
```
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

const domContainer = document.getElementById('root')
ReactDOM.render(<App />, domContainer)
``` 

Paste this in `App.js`:
```
import React, { Component} from 'react'

export default function App() {
  return (
    <div>
      <div>
        <h1>A React Web App Template</h1>
        <p>Built with yarn & Parcel</p>
      </div>
      <p>Copyright 2020 - Your name</p>
    </div>
  );
}

``` 

Paste this in `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Dojo Project Web App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="./index.js"></script>
  </body>
</html>
```
Parcel has a development server built in, which will automatically rebuild your app as you change files and supports hot module replacement for fast development. Point it at your entry file with either of these identical-in-functionality commands in the terminal:

`parcel index.html` or its equivalent `yarn start`

This command starts the local development environment so we can change `index.html` and see the changes in our browser.

Then open up <http://localhost:1234/> to see a page that has the text "Hello". Hopefully this works! This means the dev environment is set up!

#### Troubleshooting
When I was experimenting with adding a new dependency with `yarn add`, my new changes weren't showing up in the local dev environment, and one time I had to:
`rm -rf .cache`
`rm -rf dist`
It's a [confirmed bug on the parcel GitHub repo](https://github.com/parcel-bundler/parcel/issues/729).

## [Home](./../README.md)
## [Prev <== Set up local files](./local.md)
## [Next ==> Set up build process](./build_process.md)
