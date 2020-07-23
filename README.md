# Dojo Project - Learning the Build Process for a React Web App
#### Date created: Tuesday, April 28, 2020
#### Date last modified: Wednesday, June 10, 2020 (security patch lodash July 23, 2020)

# Summary

 - This is an open-source, lightweight, maintainable React app template.
 - It's built with as few dependencies and configurations as possible.
 - Toolchain is built from scratch with yarn, Parcel, React & GitHub Pages.
 - Official documentation of all tech is heavily referenced through the tutorial for best-practices.
 - Latest versions of all tech is used to reduce vulnerabilities.

### Who is this for?
 - Junior devs who have finished a bootcamp and want to know how to build a React web app all the way from scratch and understand things like `.gitignore`, a new, more secure package manager (`yarn`) other than `npm`, the `package.json` file, creating a dev environment, and deploying to production.
 - Devs who want to use `Parcel` & `yarn` to build any kind of website, whether React (this tutorial), or Bootstrap & Sass static site ([this doc](https://github.com/hashbangash/dev/blob/master/v4_build.md)), etc.  

### Good things to know before you start
 - This tutorial is for building a React app with one page and hosting on GitHub Pages (without a custom domain). 
 - Note that this tutorial works with a GitHub Pages site, and not a GitHub user site (I tried, but [it seems there's currently a bug](https://git.generalassemb.ly/ga-wdi-boston/portfolio-template/issues/57#issuecomment-216089)). 
 - I wanted to add multi-page SPA functionality with react-router-dom, but couldn't get react-router-dom `BrowserRouter` fully working. I think if you try a custom domain with GitHub Pages and configure the sitemap, it could possibly work. This is explained more in [9. react-router-dom experiment](./wiki/router.md).
 
 ### Sites built with this tutorial
  - [This tutorial's open-source React web app template](https://hashbangash.github.io/dojo/)
  - [My open-source portfolio](https://hashbangash.github.io/dev/)
  - [Yuna Han's Bored API web app](https://yunahan53.github.io/bored-api-app/)

# Table of Contents:

1. [Project goals](./wiki/goals.md)
2. [Dependency choices](./wiki/dependencies.md)
3. [Set up local files](./wiki/local.md)
4. [Set up development environment](./wiki/dev.md)
5. [Set up build process](./wiki/build_process.md)
6. [Deploy to production](./wiki/deploy.md)
7. [Verify the build](./wiki/verify.md)
8. [Dockerize experiments](./wiki/docker.md)
9. [react-router-dom experiment](./wiki/router.md)
10. [End of sprint reflection](./wiki/reflect.md)
