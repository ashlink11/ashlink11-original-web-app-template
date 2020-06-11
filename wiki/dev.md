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

Next, create an `index.html` and `index.js` file.

```
touch index.html
touch index.js
```

Leave `index.js` empty for now. 

Paste this in `index.html`:

```html
<!DOCTYPE html>
<html>
  <body>
    <script src="./index.js"></script>
    <h1>Hello</h1>
  </body>
</html>
```
Parcel has a development server built in, which will automatically rebuild your app as you change files and supports hot module replacement for fast development. Point it at your entry file with either of these identical-in-functionality commands in the terminal:

`parcel index.html` or its equivalent `yarn start`

This command starts the local development environment so we can change `index.html` and see the changes in our browser.

Then open up <http://localhost:1234/> to see a page that has the text "Hello". Hopefully this works! This means the dev environment is set up!

## [Home](./../README.md)
## [Prev <== Set up local files](./local.md)
## [Next ==> Set up build process](./build_process.md)
