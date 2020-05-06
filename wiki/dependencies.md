# Dependency Choices

### yarn
I chose `yarn` for my package manager because it's built on top of `npm` and creates the `package.lock` file like `npm` does, but also it's easy to manage licenses and ensure the dependencies all have MIT License (which is ok for commercial use) and not GNU GPLv3 (which is non-commerical).

### parcel
I chose parcel as my module bundler because Ryan Dahl (creator of Node.js and Deno JS frameworks) said that `parcel` is "really great" in his [10 Things I Regret About Node.js talk](https://www.youtube.com/watch?v=M3BM9TB-8yA) (at 23:20). He likes having a single executable file that you can give the browser runtime such as Chrome V8 Engine. Parcel creates a single, bundled JavaScript file from all my project files that I can put in V8. It makes the build process simple.

On the [React official documentation for Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app), they mention that you can use many different toolchains, including Webpack, Next.js, Gatsby, Neutrino, Parcel, and Razzle. Then, the React docs link to the [Parcel React Recipe](https://parceljs.org/recipes.html#react), which I use in my setup.

### react
I chose React because I love JavaScript. I love how JavaScript design patterns have changed over time and evolved with frameworks, and React is a truly modern framework. It works, as you can see by these companies who use it:

![Companies who use React from React Conf 2018 presentation](https://user-images.githubusercontent.com/22508682/80646694-34b1ea00-8a3b-11ea-9218-37cd02f23f72.png)

I love the way React separates logic and data with function components and hooks. This is the declarative style of programming: React components can be purely functional. The leader of the React core team is Sophie Alpert and she's personally a big inspiration to me. Here's a [video of Sophie Alpert, Dan Abramov and Ryan Florence introducing Hooks in 2018](https://www.youtube.com/watch?v=dpw9EHDh2bM).

### gh-pages
I chose GitHub pages to deploy a production link of my web app so other can view it and verify that it's a real React app and verify the files are properly compressed with React by viewing the file sizes in the Chrome DevTools Network tab. To deploy, I primarily used the [Create React App Docs - Deployment - GitHub Pages Tutorial](https://create-react-app.dev/docs/deployment#github-pages).

### docker
I chose Docker because I want to know as much about DevOps and infrastructure to inform me as a developer. I want to eventually be able to architect and maintain an entire enterprise web-app from scratch. So, right now, I've got to start with Docker. Containerization is great because it solves the problem of "this doesn't work on my computer". I set up the build process of using the `package.json` file and running `yarn install` when I create my `Dockerfile`. This installs all the dependencies inside the container, fresh each time. Additionally, containers are much much smaller than Virtual Machines (VMs), which were traditionally used for cloud infrastructure to create a secure, reliable, scalable web-app environment. The next steps after learning Docker are to build microservices, orchestrate the containers with Kubernetes, and practice with messaging queues, cloud providers, etc., etc.

## [Home](./../README.md)
## [Prev <== Project Goals](./goals.md)
## [Next ==> Set up local files](./local.md)
