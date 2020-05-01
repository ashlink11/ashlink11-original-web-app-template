# Dojo Project - Learning the Build Process for a React Web App
#### Date created: Tuesday, April 28, 2020
#### Date last modified: Wednesday, April 29, 2020

### Project Goals

I want to learn way more about DevOps and infrastructure as a developer. This is the first time creating my own build process from scratch. Using: `yarn`, `parcel`, `react`, `gh-pages`, and `docker`. It's really cool to learn the toolchain that leads up to containerization, container orchestration, configuration management, continuous integration/delivery (CI/CD), etc., etc.

I will use this project in order to build [my portfolio](https://github.com/hashbangash/dev) toolchain from scratch and create Version 4 of my portfolio.

***

# Dependency Choices

### yarn
I chose `yarn` for my package-manager because it's built on top of `npm` and creates the `package.lock` file like `npm` does, but also it's easy to manage licenses and ensure the dependencies all have MIT License (which is ok for commercial use) and not GNU GPLv3 (which is non-commerical).

### parcel
I chose this because Ryan Dahl (creator of Node.js and Deno JS frameworks) said that `parcel` is "really great" in his [10 Things I Regret About Node.js talk](https://www.youtube.com/watch?v=M3BM9TB-8yA) (at 23:20). He likes having a single executable file that you can give the browser runtime such as Chrome V8 Engine. Parcel creates a single, bundled JavaScript file from all my project files that I can put in V8. It makes the build process simple.

On the [React official documentation for Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app), they mention that you can use many different toolchains, including Webpack, Next.js, Gatsby, Neutrino, Parcel, and Razzle. Then, the React docs link to the [Parcel React Recipe](https://parceljs.org/recipes.html#react), which I use in my setup.

### react
I chose React because I love JavaScript. I love how JavaScript design patterns have changed over time and evolved with frameworks, and React is a truly modern framework. It works, as you can see by these companies who use it:

![Companies who use React from React Conf 2018 presentation](https://user-images.githubusercontent.com/22508682/80646694-34b1ea00-8a3b-11ea-9218-37cd02f23f72.png)

I love the way React separates logic and data with function components and hooks. This is the declarative style of programming: React components can be purely functional. The leader of the React core team is Sophie Alpert and she's personally a big inspiration to me. Here's a [video of Sophie Alpert, Dan Abramov and Ryan Florence introducing Hooks in 2018](https://www.youtube.com/watch?v=dpw9EHDh2bM).

### gh-pages
I chose GitHub pages to deploy a production link of my web app so other can view it and verify that it's a real React app and verify the files are properly compressed with React by viewing the file sizes in the Chrome DevTools Network tab. To deploy, I primarily used the `Create React App Docs - Deployment - GitHub Pages Tutorial`(https://create-react-app.dev/docs/deployment#github-pages).

### docker
I chose Docker because I want to know as much about DevOps and infrastructure to inform me as a developer. I want to eventually be able to architect and maintain an entire enterprise web-app from scratch. So, right now, I've got to start with Docker. Containerization is great because it solves the problem of "this doesn't work on my computer". I set up the build process of using the `package.json` file and running `yarn install` when I create my `Dockerfile`. This installs all the dependencies inside the container, fresh each time. Additionally, containers are much much smaller than Virtual Machines (VMs), which were traditionally used for cloud infrastructure to create a secure, reliable, scalable web-app environment. The next steps after learning Docker are to build microservices, orchestrate the containers with Kubernetes, and practice with messaging queues, cloud providers, etc., etc.

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

I knew I wanted to deploy from the gh-pages branch, so I used the `Create React App Docs - Deployment - GitHub Pages Tutorial`(https://create-react-app.dev/docs/deployment#github-pages).

I added the `homepage` to `package.json`:
`"homepage": "https://github.com/hashbangash/dojo",`

I edited my scripts to:
```
"scripts": {
  "start": "parcel serve index.html",
  "build": "parcel build index.html --public-url /dojo/",
  "predeploy": "yarn build",
  "deploy": "gh-pages -d dist"
}
```
I needed to update the `build` script to add the `--public-url` tag and add the relative path of my GitHub repository. This [parcel and gh-pages help page on the parcel-bunder GitHub issue](https://github.com/parcel-bundler/parcel/issues/505) had the key info I needed to alter my `build` script.

Note that the `deploy` script uses the `dist` folder because this is the name of the directory `parcel` uses during the build process.

Then, I ensured on my GitHub dojo repo in `Settings` that GitHub pages was building from the `gh-pages` branch and not the `master` branch. This additionally is great because it allows me to properly configure the `react-router-dom`, which converts this app from a SPA to a PWA with multiple pages being served from the root domain.

### Optional: add parcel file-size visualizer

It hasn't been maintained in a while, so I don't suggest downloading it, but I used it to measure the file size again and verify the file sizes were compressed.

[`parcel-plugin-bundle-visualiser`](https://github.com/gregtillbrook/parcel-plugin-bundle-visualiser)

I did: `yarn add --dev parcel-plugin-bundle-visualiser`

It added 24 new dependencies in the `node_modules` folder.

See how my main JS file is 590 B when compressed:
![parcel-plugin-bundle-visualiser output for this project](https://bc3-production-blobs-us-east-2.s3.us-east-2.amazonaws.com/bfacd598-8a40-11ea-b041-ecf4bbd72a88?response-content-disposition=inline%3B%20filename%3D%22Screen%20Shot%202020-04-29%20at%201.28.11%20PM.png%22%3B%20filename%2A%3DUTF-8%27%27Screen%2520Shot%25202020-04-29%2520at%25201.28.11%2520PM.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA4YU4LL6QTTS55A%2F20200429%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200429T191302Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=8a664e42e6d3e89bc6b74ee669d8ca746690a76fbe2be80ebc765e58083e3e82)

The report is located locally in `dist/report.html`.

70% of sites are larger than 1MB, which take 5 seconds to load, per Google Lighthouse Audit.

### Adding a compiler: Babel

[React Docs: Creating a Toolchain from Scratch](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app
)

A JavaScript build toolchain typically consists of:
- A package manager, such as Yarn or npm. It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.
- A bundler, such as webpack or Parcel. It lets you write modular code and bundle it together into small packages to optimize load time.
- A compiler such as Babel. It lets you write modern JavaScript code that still works in older browsers.

After I configured the package manager and the bundler, I knew I wanted practice with a compiler so my app will work not only on my computer and browser, but on older browsers.

The [Parcel Docs on JavaScript](https://parceljs.org/javascript.html
) have a section about Babel.

"Babel is a popular transpiler for JavaScript, with a large plugin ecosystem. Using Babel with Parcel works the same way as using it standalone or with other bundlers."

I briefly researched the difference between babel presets and their notations (e.g. `babel-preset-react` vs. `@babel/preset-react`). This is a topic I will dive deeper on someday soon.

I followed the parcel docs and added:

`yarn add --dev @babel/preset-react @babel/present-env`

I added a `babel` section to my `package.json`:
```
"babel": {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```
So, now I had three babel `devDependencies`:
```
"@babel/core": "^7.0.0-0",
"@babel/preset-env": "^7.9.6",
"@babel/preset-react": "^7.9.4",
```

I did not test to verify these were working by experimenting with older browser emulators, but since I barely had any website content at this point, I didn't think I could test effectively anyway.

### Verifying the build

##### Chrome DevTools Network tab

I went to the browser and verified the build sizes were indeed very small:
![Chrome DevTools Network tab](https://bc3-production-blobs-us-east-2.s3.us-east-2.amazonaws.com/6da4af0e-8a41-11ea-ae35-a0369f740db1?response-content-disposition=inline%3B%20filename%3D%22Screen%20Shot%202020-04-29%20at%201.46.46%20PM.png%22%3B%20filename%2A%3DUTF-8%27%27Screen%2520Shot%25202020-04-29%2520at%25201.46.46%2520PM.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA4YU4LL6QTTS55A%2F20200429%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200429T191450Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=8663be06e41dee71249207d5843e1acfad64b7cc5ab14462b086c00a57788324)

My build was 4 files, each under 1KB in size.

##### React Developer Tools for Chrome

Additionally, I have downloaded the [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), and when the React app is properly deployed, the Chrome DevTools shows the React `Components` and `Profiler` tabs as well! In the [Optimizing Performance React docs](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build), we can prove that this is a live React app:

![React Developer Tools for Chrome verifying the build](https://user-images.githubusercontent.com/22508682/80836320-7c16b280-8bc2-11ea-901a-cb0f1f5c22e9.png)

# Success! yarn, parcel, react, and gh-pages deployed to production!

The build is working and deployed on: <https://hashbangash.github.io/dojo/>.

# Docker

I wanted practice with Docker, so I could have another way of deploying my app to production aside from using `gh-pages`. Many of my dream companies build microservices with Docker containers, so I wanted to learn more.

### Setting up Docker

First, I wanted the latest version of Docker.

I like to use the Docker Desktop App, which also updates the Docker CLI automatically, so I updated Docker from the Mac desktop app with "Check for Updates...". This updated Docker Desktop to 2.2.0.5 and Docker CLI to 19.03.8 (from 18.09.2).

I ran `docker run hello-world` to test my CLI and I got:
```
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

I think it's awesome to keep the official Docker documentation in mind and to keep referencing them throughout the learning process.

### Attempt 1: Dockerize my Dojo App

I decided to follow this tutorial that uses an `nginx` web server: <https://makeitnew.io/dockerizing-modern-web-apps-32ecdb24bc2e>. I like this tutorial because it starts out with a very simple `Dockerfile` and a very lightweight and simple image. An image could be as large as an entire Linux distribution, so it's nice to start small with a simple `nginx` server.

I was able to write a simple `Dockerfile`:
```
FROM nginx

COPY index.html /usr/share/nginx/html
```
I built the image and ran it:
```
docker build -f Dockerfile -t dojo .
docker run -p 8888:80 dojo
```
I visited <http://localhost:8888/> and the html was serving, but the React files weren't being built and minified properly with parcel, and my React DevTools said "This page doesn't appear to be using React."

This made me realize I need to understand a lot more about bundling and delivering the app files to a web server. I began thinking that I needed more steps like `yarn install` in my Dockerfile and that I need a web server like `Express` with `Node.js` in order to run my React app. This led me to some practice in the next step:

### Attempt 2: Follow `Dockerizing a React App` Tutorial for learnings

I followed a tutorial here and documented my learnings: <https://github.com/hashbangash/react-app-dockerized>.

I used `npm` instead of `yarn` and I used a brand new `create-react-app` app instead of my `dojo` app, but I was hoping I would be able to apply the knowledge to eventually dockerize my `dojo` app with `yarn`.

Additionally, this taught me about `docker`, `docker-compose`, images, containers, and `node.js` official docker images.

### End of Sprint: Friday May 1, 2020

I realize that Docker goes way deeper than I thought, and I was happy to learn the basics of it.

Failures:
- I wasn't able to Dockerize my dojo app.

Successes:
- I was able to Dockerize a React app and spin up a node server to host it locally.
- I was able to build a React app from scratch with `yarn`, `parcel` and deploy to production with `gh-pages`.
- I documented the process so others could follow after me.

## Next steps

I am going to build out page content and want to add `react-router-dom` so this site can have multiple pages.
