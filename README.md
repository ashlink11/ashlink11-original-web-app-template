# Dojo Project - Learning the Build Process for a React Web App
#### Date created: Tuesday, April 28, 2020
#### Date last modified: Wednesday, April 29, 2020

### Project Goals

I want to learn way more about DevOps and infrastructure as a developer. This is the first time creating my own build process from scratch. Using: `yarn`, `parcel`, `react`, `react-dom`, `react-router-dom`, and `docker`. It's really cool to learn the toolchain that leads up to containerization, container orchestration, configuration management, continuous integration/delivery (CI/CD), etc., etc.

I will use this project in order to build [my portfolio](https://github.com/hashbangash/dev) toolchain from scratch and create Version 4 of my portfolio.

***

# Dependency Choices

### yarn
I chose `yarn` for my package-manager because it's built on top of `npm` and creates the `package.lock` file like `npm` does, but also it's easy to manage licenses and ensure the dependencies all have MIT License (which is ok for commercial use) and not GNU GPLv3 (which is non-commerical).

### parcel
I chose this because Ryan Dahl (creator of Node.js and Deno JS frameworks) said that `parcel` is "really great" in his [10 Things I Regret About Node.js talk](https://www.youtube.com/watch?v=M3BM9TB-8yA) (at 23:20). He likes having a single executable file that you can give the browser runtime such as Chrome V8 Engine. Parcel creates a single, bundled JavaScript file from all my project files that I can put in V8. It makes the build process simple.

On the [React official documentation for Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app), they mention that you can use many different toolchains, including Webpack, Next.js, Gatsby, Neutrino, Parcel, and Razzle. Then, the React docs link to the [Parcel React Recipe](https://parceljs.org/recipes.html#react), which I use in my setup.

***

# Process

1. Set up local files
2. Set up development environment
3. Set up build process & deploy to production

Sidenote: I made a [very detailed yet completely unedited process doc](./process_beginners.md) for absolute beginners to follow what I did command-by-command including all of my CLI output. You can refer to this if you have more questions about my setup process. It's messy, but I never know if it would help out. You can see how many times I messed up and what I had to do to fix things.

***

# Set up Local Files

### Create the folder for my web app and move into it

`mkdir dojo`
`cd dojo`

### Using git and GitHub

First, I created a new public repository (without readme) on my GitHub. Then, I ran these commands locally:

```
git init
git remote add origin git@github.com:hashbangash/dojo.git
git remote -v // confirm I have the proper origins
```

Now, create your first file with: `touch .gitignore`

Add this into the file:
```
node_modules
dist
.cache
```

Next, push this repo to GitHub with:
```
git add .
git commit // fill out a commit message in my IDE
git push -u origin master
```

Add and commit after every step in this to trace your progress.

### Install my package manager, yarn

`brew install yarn`

If you already have yarn, you could `brew upgrade yarn` instead.

### Install my bundler, parcel, using my package manager

`yarn global add parcel-bundler` from [Parcel Getting Started](https://parceljs.org/getting_started.html)

### Initialize my project

`yarn init`

This creates a [`package.json`](./package.json) file. This is version 1 of my project, with an MIT License and public repository on GitHub. The entry-point is `index.js`.

Then I followed the [Parcel React Recipe](https://parceljs.org/recipes.html#react) from the React official docs.
```
yarn add react
yarn add react-dom
yarn add core-js // I added this command to update to core-js version 3.
yarn add --dev parcel-bundler
```

The flag `--dev` adds `parcel-bundler` in the `devDependencies` in [`package.json`](./package.json).

I did get a warning when I ran `yarn add --dev parcel-bundler` that my `core-js` was below version 3, but when I checked my `package.json`, the `core-js` version showed `^3.6.5`, so I decided I was fine for now, and to keep building.

***

# Set up Development Environment

### Add Start script to package.json

This is the last step in the [Parcel React Recipe](https://parceljs.org/recipes.html#react).

```json
"scripts": {
  "start": "parcel index.html"
}
```
### Looking over the setup so far

Then my [`package.json`](./package.json) looked like this:
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
I checked online for the latest versions of react and react-dom (as of April 28, 2020) and this all looked good to me.

### Back to the [Parcel Getting Started doc](https://parceljs.org/getting_started.html) to set up the Development Environment

Next, create an index.html and index.js file.

```
touch index.html
touch index.js
```

Paste this in index.html:

```html
<!DOCTYPE html>
<html>
  <body>
    <script src="./index.js"></script>
    <h1>Hello</h1>
  </body>
</html>
```
Parcel has a development server built in, which will automatically rebuild your app as you change files and supports hot module replacement for fast development. Point it at your entry file:

`parcel index.html`

Then open up <http://localhost:1234/>. Hopefully this works! This means the dev environment is set up!

***

# Set up Build Process & Deploy to Production

Through this process, I'm going to add a couple devDependencies and a `build` script. `package.json` will eventually look this this:

```json
"devDependencies": {
  "gh-pages": "^2.2.0",
  "parcel": "^2.0.0-alpha.3.2",
  "parcel-bundler": "^1.12.4"
},
"scripts": {
  "build": "parcel build index.html",
  "start": "parcel serve index.html"
}
```

### Add Parcel CLI

"The Parcel CLI is built into the main parcel package. While you can install it globally and run it, it is much better to install it locally into your project as a dev dependency." From the [Parcel CLI section of Parcel docs](https://github.com/parcel-bundler/parcel).

Run this: `yarn add --dev parcel@next`

Then add the build script to `package.json`:
```json
"scripts": {
  "build": "parcel build index.html",
  "start": "parcel serve index.html"
}
```

"Now you can run yarn build to bundle your project for production and yarn start to dev on your project."

### Build project

`yarn build` is now the same as `parcel build index.html`, based on the script you added to `package.json`. Use either to build the project.

A bunch of minified files get added to the `dist/` folder.

```
dist/dojo.f84e1103.js           1.11 KB     395ms
dist/index.html                   253 B    13.11s
dist/styles.91125fd8.css.map      170 B       3ms
dist/dojo.f84e1103.js.map          95 B       2ms
dist/styles.91125fd8.css           62 B     3.25s
```

They were very small for me.

### Set up GitHub pages

I went to my repository on GitHub and clicked on the "Settings" tab.

I turned on GitHub pages and it said: "Your GitHub Pages site is currently being built from the master branch."

I think this is what added `gh-pages` to devDependencies, but I am not 100% sure.

### Optional: add parcel file-size visualizer

It hasn't been maintained in a while, so I don't suggest downloading it, but I used it to measure the file size again and verify the file sizes were compressed.

[`parcel-plugin-bundle-visualiser`](https://github.com/gregtillbrook/parcel-plugin-bundle-visualiser)

I did: `yarn add --dev parcel-plugin-bundle-visualiser`

It added 24 new dependencies in the `node_modules` folder.


See how my main JS file is 590 B when compressed:
![parcel-plugin-bundle-visualiser output for this project](https://bc3-production-blobs-us-east-2.s3.us-east-2.amazonaws.com/bfacd598-8a40-11ea-b041-ecf4bbd72a88?response-content-disposition=inline%3B%20filename%3D%22Screen%20Shot%202020-04-29%20at%201.28.11%20PM.png%22%3B%20filename%2A%3DUTF-8%27%27Screen%2520Shot%25202020-04-29%2520at%25201.28.11%2520PM.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA4YU4LL6QTTS55A%2F20200429%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200429T191302Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=8a664e42e6d3e89bc6b74ee669d8ca746690a76fbe2be80ebc765e58083e3e82)

The report is located locally in `dist/report.html`.

70% of sites are larger than 1MB, which take 5 seconds to load, per Google Lighthouse Audit.

### Verify build in Chrome DevTools Network tab

I went to the browser and verified the build sizes were indeed very small:
![Chrome DevTools Network tab](https://bc3-production-blobs-us-east-2.s3.us-east-2.amazonaws.com/6da4af0e-8a41-11ea-ae35-a0369f740db1?response-content-disposition=inline%3B%20filename%3D%22Screen%20Shot%202020-04-29%20at%201.46.46%20PM.png%22%3B%20filename%2A%3DUTF-8%27%27Screen%2520Shot%25202020-04-29%2520at%25201.46.46%2520PM.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA4YU4LL6QTTS55A%2F20200429%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200429T191450Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=8663be06e41dee71249207d5843e1acfad64b7cc5ab14462b086c00a57788324)

My build was 4 files, each under 1KB in size.

# Success!

The build seems to be working! Note that it's the first time I've done a build from scratch so don't take my word for it!

My page is hosted at: <https://hashbangash.github.io/dojo/>.

Next steps: I am going to build out page content and want to add `react-router-dom` so this site can have multiple pages.
