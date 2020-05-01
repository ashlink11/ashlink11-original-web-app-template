`mkdir dojo`
`cd dojo`

https://parceljs.org/getting_started.html
brew install yarn

yarn global add parcel-bundler

warning parcel-bundler > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
warning parcel-bundler > babylon-walk > babel-runtime > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
warning parcel-bundler > @parcel/watcher > chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
warning parcel-bundler > htmlnano > uncss > request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
warning parcel-bundler > htmlnano > uncss > jsdom > request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
warning parcel-bundler > @parcel/watcher > chokidar > fsevents@1.2.12: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
warning parcel-bundler > micromatch > snapdragon > source-map-resolve > urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
warning parcel-bundler > micromatch > snapdragon > source-map-resolve > resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated

https://reactjs.org/blog/2017/09/25/react-v15.6.2.html
yarn add react@^15.6.2 react-dom@^15.6.2
yarn add v1.22.4
info No lockfile found.
[1/4] 🔍  Resolving packages...
warning react > fbjs > core-js@1.2.7: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 17 new dependencies.
info Direct dependencies
├─ react-dom@15.6.2
└─ react@15.6.2
info All dependencies
├─ asap@2.0.6
├─ core-js@1.2.7
├─ create-react-class@15.6.3
├─ encoding@0.1.12
├─ iconv-lite@0.4.24
├─ is-stream@1.1.0
├─ isomorphic-fetch@2.2.1
├─ js-tokens@4.0.0
├─ node-fetch@1.7.3
├─ promise@7.3.1
├─ react-dom@15.6.2
├─ react-is@16.13.1
├─ react@15.6.2
├─ safer-buffer@2.1.2
├─ setimmediate@1.0.5
├─ ua-parser-js@0.7.21
└─ whatwg-fetch@3.0.0
✨  Done in 7.58s.

https://stackoverflow.com/questions/55606841/how-to-update-core-js-to-core-js3-dependency
npm install --save core-js@^3

> core-js@3.6.5 postinstall /Users/ashgrev/sei/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN sei No description
npm WARN sei No repository field.
npm WARN sei No license field.

+ core-js@3.6.5
added 1 package and updated 19 packages in 6.836s

1 package is looking for funding
  run `npm fund` for details

> deleted yarn.lock, package.json and package-lock.json, and .DS_store
> chose not to update Chokidar 3 and fsevents 2 until I need them
> all of the parcel warnings are handled, cause the rest are deprecations

brew upgrade docker // doesnt work (bc I use the desktop app)
updating Docker from the Mac desktop app with Check for Updates...
updated Docker Desktop to 2.2.0.5 and Docker CLI to 19.03.8 (from 18.09.2)

docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
0e03bdcc26d7: Pull complete
Digest: sha256:8e3114318a995a1ee497790535e7b88365222a21771ae7e53687ad76563e8e76
Status: Downloaded newer image for hello-world:latest

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


OKAY ! I got many tools set up and can see the vision for this project.
THIS uses an nginx server and very simple Docker container https://makeitnew.io/dockerizing-modern-web-apps-32ecdb24bc2e ... I will use this tutorial once I've built my app to dockerize. I need to develop my build process first so then I can list it in my Dockerfile
this tutorial is how to build react with yarn: https://codefresh.io/docs/docs/learn-by-example/nodejs/react/ Codefresh is a Docker-native CI/CD platform. I would rather use GitLab, Jenkins, or GitHub actions, however.
best practices ref: https://docs.docker.com/develop/dev-best-practices/
I used this to get started but I dont think I wanna use it going forward: https://docker-curriculum.com/
Then after that I can look into how to do container management. This is all infrastructure-as-code. My options are Kubernetes for container orchestration, then Google Cloud Platform for the cloud provider. more options: https://roadmap.sh/devops

yarn add react@^15.6.2 react-dom@^15.6.2

yarn init

went through questions:

question name (dojo): dojo
question version (1.0.0):
question description: First experiment with build process with yarn, parcel, and docker for React.
question entry point (index.js):
question repository url: https://github.com/hashbangash/dojo
question author: Ash Grevelink
question license (MIT):
question private: no
success Saved package.json
✨  Done in 157.17s.

yarn add react
yarn add v1.22.4
info No lockfile found.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 5 new dependencies.
info Direct dependencies
└─ react@16.13.1
info All dependencies
├─ js-tokens@4.0.0
├─ loose-envify@1.4.0
├─ prop-types@15.7.2
├─ react-is@16.13.1
└─ react@16.13.1
✨  Done in 1.08s.

Added 5 dependencies other than react.


yarn add react-dom

yarn add v1.22.4
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 2 new dependencies.
info Direct dependencies
└─ react-dom@16.13.1
info All dependencies
├─ react-dom@16.13.1
└─ scheduler@0.19.1
✨  Done in 1.15s.

Added react-dom and scheduler.


yarn add --dev parcel-bundler

added 541 new dependencies. still got warning messages on core-js version is under 3.

reran this cause i was probably in the wrong repo/didnt have it globally installed

npm install --save core-js@^3

Okay, using npm was a mistake, because:
npm notice created a lockfile as package-lock.json. You should commit this file.
+ core-js@3.6.5
added 62 packages from 23 contributors, removed 74 packages and updated 710 packages in 91.689s

rm -rf everything and start over with yarn init

yarn init
yarn add react
yarn add react-dom
yarn add core-js
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 1 new dependency.
info Direct dependencies
└─ core-js@3.6.5
info All dependencies
└─ core-js@3.6.5
✨  Done in 6.81s.
yarn add --help // read that --dev adds to devDependencies

yarn add --dev parcel-bundler

I'm going to ignore the warnings bc my package.json looks good:
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

git init
Initialized empty Git repository in /Users/ashgrev/sei/projects/dojo/.git/

git remote add origin git@github.com:hashbangash/dojo.git
git remote -v // shows proper origins
git add .
warning: CRLF will be replaced by LF in node_modules/deasync/bin/.gitattributes.
The file will have its original line endings in your working directory.

That has to do with line endings handled differently on Mac vs PC. I'm gonna ignore.

git commit
git push -u origin master


Add Start script to package.json

// package.json
"scripts": {
  "start": "parcel index.html"
}
$ touch index.html
$ touch index.js



parcel index.html
Server running at http://localhost:1234
✨  Built in 53ms.


https://github.com/parcel-bundler/parcel
PARCEL CLI section

The Parcel CLI is built into the main parcel package. While you can install it globally and run it, it is much better to install it locally into your project as a dev dependency.

yarn add --dev parcel@next


  "scripts": {
    "build": "parcel build index.html",
    "start": "parcel serve index.html"
  }
Now you can run yarn build to bundle your project for production and yarn start to dev on your project.

$ yarn build
yarn run v1.22.4
$ parcel build index.html
✨  Built in 16.54s.

dist/dojo.f84e1103.js           1.11 KB     395ms
dist/index.html                   253 B    13.11s
dist/styles.91125fd8.css.map      170 B       3ms
dist/dojo.f84e1103.js.map          95 B       2ms
dist/styles.91125fd8.css           62 B     3.25s
✨  Done in 26.85s.


Trned on GitHub pages in Settings on GitHub.
Then got this error emailed to me:

The page build completed successfully, but returned the following warning for the `master` branch:

It looks like you're using GitHub Pages to distribute binary files. We strongly suggest that you use releases to ship projects on GitHub. Releases are GitHub's way of packaging and providing software to your users. You can think of it as a replacement to using downloads to provide software. We found the following file(s) which may be a good candidate for releases: node_modules/@parcel/fs/node_modules/@parcel/watcher/watchman/windows/bin/watchman.exe and node_modules/term-size/vendor/windows/term-size.exe. For more information, see https://help.github.com/en/github/administering-a-repository/about-releases.

For information on troubleshooting Jekyll see:

  https://help.github.com/articles/troubleshooting-jekyll-builds

If you have any questions you can submit a request on the Contact GitHub page at https://support.github.com/contact?repo_id=259733010&page_build_id=177194802

Then following this tutorial, I made a gitignore and figuring out how to remove dist and node_modules from GitHub
https://gist.github.com/OleksiyRudenko/7e94aa2d18927e0c5e65b2b5a1c0e375
(just followed the first part about Targets)

Remove now-ignored directories dist, node_modules, and .cache

    use this guide
    https://stackoverflow.com/questions/7927230/remove-directory-from-remote-repository-after-adding-them-to-gitignore

    git rm -r --cached some-directory
    git commit -m 'Remove the now ignored directory "some-directory"'
    git push origin master

Preserves commit history!

Your GitHub Pages site is currently being built from the master branch. Learn more.

yarn add --dev parcel-plugin-bundle-visualiser
yarn add v1.22.4
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 24 new dependencies.
info Direct dependencies
└─ parcel-plugin-bundle-visualiser@1.2.0
info All dependencies
├─ camelcase@4.1.0
├─ cliui@4.1.0
├─ duplexer@0.1.1
├─ execa@1.0.0
├─ get-caller-file@1.0.3
├─ get-stream@4.1.0
├─ gzip-size@4.1.0
├─ invert-kv@2.0.0
├─ is-stream@1.1.0
├─ lcid@2.0.0
├─ map-age-cleaner@0.1.3
├─ mem@4.3.0
├─ npm-run-path@2.0.2
├─ os-locale@3.1.0
├─ p-defer@1.0.0
├─ p-finally@1.0.0
├─ p-is-promise@2.1.0
├─ parcel-plugin-bundle-visualiser@1.2.0
├─ require-main-filename@1.0.1
├─ strip-eof@1.0.0
├─ wrap-ansi@2.1.0
├─ y18n@3.2.1
├─ yargs-parser@9.0.2
└─ yargs@11.1.1
✨  Done in 7.87s.

![parcel-plugin-bundle-visualiser output for this project](https://bc3-production-blobs-us-east-2.s3.us-east-2.amazonaws.com/bfacd598-8a40-11ea-b041-ecf4bbd72a88?response-content-disposition=inline%3B%20filename%3D%22Screen%20Shot%202020-04-29%20at%201.28.11%20PM.png%22%3B%20filename%2A%3DUTF-8%27%27Screen%2520Shot%25202020-04-29%2520at%25201.28.11%2520PM.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA4YU4LL6QTTS55A%2F20200429%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200429T191302Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=8a664e42e6d3e89bc6b74ee669d8ca746690a76fbe2be80ebc765e58083e3e82)﻿
﻿
Chrome DevTools
Audits tab uses Google Lighthouse (my site doesnt have enough on it to work the audit)
But Network tab (go to page, then reload) shows
﻿
I went to the browser and verified the build sizes were indeed very small:
![Chrome DevTools Network tab](https://bc3-production-blobs-us-east-2.s3.us-east-2.amazonaws.com/6da4af0e-8a41-11ea-ae35-a0369f740db1?response-content-disposition=inline%3B%20filename%3D%22Screen%20Shot%202020-04-29%20at%201.46.46%20PM.png%22%3B%20filename%2A%3DUTF-8%27%27Screen%2520Shot%25202020-04-29%2520at%25201.46.46%2520PM.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA4YU4LL6QTTS55A%2F20200429%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200429T191450Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=8663be06e41dee71249207d5843e1acfad64b7cc5ab14462b086c00a57788324)

Which seems like it is all compressed, cause it reflects more of the gzip file size than the unzipped size

... I THINK THE BUILD IS WORKING! Time for README edits





https://reactjs.org/docs/create-a-new-react-app.html#create-react-app
Creating a Toolchain from Scratch

A JavaScript build toolchain typically consists of:
A package manager, such as Yarn or npm. It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.
A bundler, such as webpack or Parcel. It lets you write modular code and bundle it together into small packages to optimize load time.
A compiler such as Babel. It lets you write modern JavaScript code that still works in older browsers.

Still need compiler.

If you aren’t sure whether your build process is set up correctly, you can check it by installing React Developer Tools for Chrome. If you visit a site with React in production mode, the icon will have a dark background:

If you visit a site with React in development mode, the icon will have a red background:












TODO -

https://parceljs.org/javascript.html

Babel


Babel is a popular transpiler for JavaScript, with a large plugin ecosystem. Using Babel with Parcel works the same way as using it standalone or with other bundlers.


Install presets and plugins in your app:

yarn add --dev @babel/preset-react

Then, create a .babelrc:

{
  "presets": ["@babel/preset-react"]
}

You can also put babel config in package.json

"babel": {
  "presets": ["@babel/preset-react"]
}

NOTE: package.json takes precedence over .babelrc.


Default Babel transforms


Parcel transpiles your code (every internal module) with @babel/preset-env by default to match the defined target.


For the browser target it utilises browserslist, the target browserlist can be defined in package.json (engines.browsers or browserslist) or using a configuration file (browserslist or .browserslistrc).


The browserlist target defaults to: > 0.25% (Meaning, support every browser that has 0.25% or more of the total amount of active web users)


For the node target, Parcel uses the engines.node defined in package.json, this default to node 8.


https://github.com/parcel-bundler/parcel#configuring-parcel
Configuring Parcel

When you do need to configure Parcel, it will be in one of 3 places.

If you need to configure the CLI, it will be a CLI flag
If you need to configure your package, it will be in the package.json
If you need to configure something with your files or the Parcel asset pipeline, it will be in .parcelrc
----------------------
--------------------------
React DevTools showing this is a React app

    Starter code from this tutorial: https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658

    Order of elements in HTML matters.


https://makeitnew.io/dockerizing-modern-web-apps-32ecdb24bc2e
wrap it inside a Docker image and run it as a container.


Docker is a system to create images which can then be run as containers. You can think of docker images as super lightweight Virtual Machines that can be run on many platforms (in this image containers are running VMs). The awesomeness of all this is that once you build a docker image and run it somewhere you will get the same thing running everywhere. Once we manage to build a Docker image locally that we can run as a container successfully we know that it will also run on AWS, GCP, Portainer or whatever else your company might be using.

Docker solves the infamous “it works on my machine” problem. Containers run the same wherever you start them!

touch Dockerfile

docker build -f Dockerfile -t dojo .

Sending build context to Docker daemon  178.2MB
Step 1/2 : FROM nginx
latest: Pulling from library/nginx
54fec2fa59d0: Pull complete
4ede6f09aefe: Pull complete
f9dc69acb465: Pull complete
Digest: sha256:86ae264c3f4acb99b2dee4d0098c40cb8c46dcf9e1148f05d3a51c4df6758c12
Status: Downloaded newer image for nginx:latest
 ---> 602e111c06b6
Step 2/2 : COPY index.html /usr/share/nginx/html
 ---> ad8b4075495f
Successfully built ad8b4075495f
Successfully tagged dojo:latest

docker run -p 8888:80 dojo

172.17.0.1 - - [01/May/2020:15:46:34 +0000] "GET / HTTP/1.1" 200 363 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36" "-"
2020/05/01 15:46:34 [error] 6#6: *1 open() "/usr/share/nginx/html/styles.css" failed (2: No such file or directory), client: 172.17.0.1, server: localhost, request: "GET /styles.css HTTP/1.1", host: "localhost:8888", referrer: "http://localhost:8888/"
172.17.0.1 - - [01/May/2020:15:46:34 +0000] "GET /styles.css HTTP/1.1" 404 556 "http://localhost:8888/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36" "-"
172.17.0.1 - - [01/May/2020:15:46:34 +0000] "GET /index.js HTTP/1.1" 404 556 "http://localhost:8888/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36" "-"
2020/05/01 15:46:34 [error] 6#6: *2 open() "/usr/share/nginx/html/index.js" failed (2: No such file or directory), client: 172.17.0.1, server: localhost, request: "GET /index.js HTTP/1.1", host: "localhost:8888", referrer: "http://localhost:8888/"
2020/05/01 15:46:34 [error] 6#6: *2 open() "/usr/share/nginx/html/favicon.ico" failed (2: No such file or directory), client: 172.17.0.1, server: localhost, request: "GET /favicon.ico HTTP/1.1", host: "localhost:8888", referrer: "http://localhost:8888/"
172.17.0.1 - - [01/May/2020:15:46:34 +0000] "GET /favicon.ico HTTP/1.1" 404 556 "http://localhost:8888/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36" "-"


 go to http://localhost:8888/
doesnt show app but http://localhost:8888/hello does show 404 not found
 Zoom Screen Shot 2020-05-01 at 11.48.34 AM.png
Screen Shot 2020-05-01 at 11.48.34 AM.png 46.9 KB View full-size Download


this shows up, but our index.js isn't running cause there's no React options showing in the DevTools

localhost runs
 Zoom Screen Shot 2020-05-01 at 11.49.48 AM.png
Screen Shot 2020-05-01 at 11.49.48 AM.png 63 KB View full-size Download


so you can see parcel had compressed and bundled our app files on localhost

remove this from package-json
  "babel": {
    "presets": [
      "@babel/preset-react",
      "@babel/preset-env"
    ]
  }

using this tutorial:
https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom


trying these scripts to deploy
  "scripts": {
    "start": "parcel serve index.html",
    "build": "parcel build index.html",
    "predeploy": "yarn build",
    "deploy": "gh-pages -d dist"
  }

goes live but I get these errors. It cant load the dojo!

hashbangash.github.io/:1 GET https://hashbangash.github.io/styles.91125fd8.css net::ERR_ABORTED 404 (Not Found)
13:19:41.544 hashbangash.github.io/:1 GET https://hashbangash.github.io/dojo.493eb6d2.js net::ERR_ABORTED 404 (Not Found)

this solved my issues with parcel and gh-pages
https://github.com/parcel-bundler/parcel/issues/505!!

  "scripts": {
    "start": "parcel serve index.html",
    "build": "parcel build index.html --public-url /dojo/",
    "predeploy": "yarn build",
    "deploy": "gh-pages -d dist"
  }

Used this too
https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom

Docker still shows "./index.js" when I run the nginx server


delete extra babel packages
yarn remove babel-preset-env babel-preset-react

copy package.json info from babel section
https://parceljs.org/javascript.html
  "babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  }
