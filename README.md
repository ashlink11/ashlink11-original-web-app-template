# Dojo Project - Learning the Build Process for a React Web App
#### Date created: Tuesday, April 28, 2020
#### Date last modified: ---

## Dependency Choices

#### yarn
I chose `yarn` for my package-manager because it's built on top of `npm` and creates the `package.lock` file like `npm` does, but also it's easy to manage licenses and ensure the dependencies all have MIT License (which is ok for commercial use) and not GNU GPLv3 (which is non-commerical).

#### parcel
I chose this because Ryan Dahl (creator of Node.js and Deno JS frameworks) said that `parcel` is "really great" in his [10 Things I Regret About Node.js talk](https://www.youtube.com/watch?v=M3BM9TB-8yA) (at 23:20). He likes having a single executable file that you can give the browser runtime such as Chrome V8 Engine. Parcel creates a single, bundled JavaScript file from all my project files that I can put in V8. It makes the build process simple.

On the [React official documentation for Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app), they mention that you can use many different toolchains, including Webpack, Next.js, Gatsby, Neutrino, Parcel, and Razzle. Then, the React docs link to the [Parcel React Recipe](https://parceljs.org/recipes.html#react), which I use in my setup.

## Setup

I made a [very detailed yet unedited process doc](./process_beginners) for absolute beginners to follow what I did command-by-command including all of my CLI output. You can refer to this if you have more questions about my setup process.

This is the shorter summary of what I did:

#### Create the folder for my web app and move into it

`mkdir dojo`
`cd dojo`

#### Install my package manager, yarn

`brew install yarn`

If you already have yarn, you could `brew upgrade yarn` instead.

#### Install my bundler, parcel, using my package manager

`yarn global add parcel-bundler` from [Parcel Getting Started](https://parceljs.org/getting_started.html)

#### Initialize my project

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
  }
}
```
I checked online for the latest versions of react and react-dom (as of April 28, 2020) and this all looked good to me.

#### Using git and GitHub

First, I created a new public repository (without readme) on my GitHub. Then, I ran these commands:

```
git init
git remote add origin git@github.com:hashbangash/dojo.git
git remote -v // confirm I have the proper origins
git add .
git commit // fill out a commit message in my IDE
git push -u origin master
```

I did have a warning on my `git add`:
```
warning: CRLF will be replaced by LF in node_modules/deasync/bin/.gitattributes.
The file will have its original line endings in your working directory.
```
That has to do with line endings handled differently on Mac vs PC. I decided to ignore it since I'm the only one working in my repo for now.

Then I wrote this README so to document my process!
