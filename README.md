# Dojo Project - Learning the Build Process for a React Web App
#### Date created: Tuesday, April 28, 2020
#### Date last modified: Friday, May 1, 2020

Table of Contents:

1. [Project goals]
2. [Dependency choices]
3. [Set up local files]
4. [Set up development environment]
5. [Set up build process]
6. [Deploy to production]
7. [Verify the build]
8. [Dockerize]
9. [End of sprint reflection]
10. [Next steps]


Sidenote: I made a [very detailed yet completely unedited process doc](./wiki/process_beginners.md) for absolute beginners to follow what I did command-by-command including all of my CLI output. You can refer to this if you have more questions about my setup process. It's messy, but I never know if it would help out. You can see how many times I messed up and what I had to do to fix things.

***


***


***


### Verifying the build

##### Chrome DevTools Network tab

I went to the browser and verified the build sizes were indeed very small:
![Chrome DevTools Network tab](https://bc3-production-blobs-us-east-2.s3.us-east-2.amazonaws.com/6da4af0e-8a41-11ea-ae35-a0369f740db1?response-content-disposition=inline%3B%20filename%3D%22Screen%20Shot%202020-04-29%20at%201.46.46%20PM.png%22%3B%20filename%2A%3DUTF-8%27%27Screen%2520Shot%25202020-04-29%2520at%25201.46.46%2520PM.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA4YU4LL6QTTS55A%2F20200429%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200429T191450Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=8663be06e41dee71249207d5843e1acfad64b7cc5ab14462b086c00a57788324)

My build was 4 files, each under 1KB in size.

##### React Developer Tools for Chrome

Additionally, I have downloaded the [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), and when the React app is properly deployed, the Chrome DevTools shows the React `Components` and `Profiler` tabs as well! In the [Optimizing Performance React docs](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build), we can prove that this is a live React app:

![React Developer Tools for Chrome verifying the build](https://user-images.githubusercontent.com/22508682/80836320-7c16b280-8bc2-11ea-901a-cb0f1f5c22e9.png)

### Optional: add parcel file-size visualizer

It hasn't been maintained in a while, so I don't suggest downloading it, but I used it to measure the file size again and verify the file sizes were compressed.

[`parcel-plugin-bundle-visualiser`](https://github.com/gregtillbrook/parcel-plugin-bundle-visualiser)

I did: `yarn add --dev parcel-plugin-bundle-visualiser`

It added 24 new dependencies in the `node_modules` folder.

See how my main JS file is 590 B when compressed:
![parcel-plugin-bundle-visualiser output for this project](https://bc3-production-blobs-us-east-2.s3.us-east-2.amazonaws.com/bfacd598-8a40-11ea-b041-ecf4bbd72a88?response-content-disposition=inline%3B%20filename%3D%22Screen%20Shot%202020-04-29%20at%201.28.11%20PM.png%22%3B%20filename%2A%3DUTF-8%27%27Screen%2520Shot%25202020-04-29%2520at%25201.28.11%2520PM.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA4YU4LL6QTTS55A%2F20200429%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200429T191302Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=8a664e42e6d3e89bc6b74ee669d8ca746690a76fbe2be80ebc765e58083e3e82)

The report is located locally in `dist/report.html`.

70% of sites are larger than 1MB, which take 5 seconds to load, per Google Lighthouse Audit.

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

# End of Sprint: Friday May 1, 2020

I realize that Docker goes way deeper than I thought, and I was happy to learn the basics of it.

Failures:
- I wasn't able to Dockerize my dojo app.

Successes:
- I was able to Dockerize a React app and spin up a node server to host it locally.
- I was able to build a React app from scratch with `yarn`, `parcel` and deploy to production with `gh-pages`.
- I documented the process so others could follow after me.

## Next steps

I am going to build out page content and want to add `react-router-dom` so this site can have multiple pages.
