# Dockerizing my app (2 experiments)

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


## [Home](./../README.md)
## [Next ==> react-router-dom experiment](./router.md)
## [Prev <== Verify Build](./verify.md)
