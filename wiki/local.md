# Set up Local Files

### Create the folder for the web app and move into it

`mkdir <name_of_project>`
`cd <name_of_project>`

### Using git and GitHub

[Create a new public repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-new-repository) (without readme) on GitHub. 

Then run these commands:

```
git init
git remote add origin git@github.com:<github_username>/<repository_name>.git
```

Before creating files and pushing them up to GitHub, first run `git remote -v` to confirm you have the proper origins. Mine show:
```
origin	git@github.com:hashbangash/dojo.git (fetch)
origin	git@github.com:hashbangash/dojo.git (push)
```

Now, create your first file with: `touch .gitignore`

Open the file in your code editor (e.g. VSCode or Atom) and add these lines into it:
```
node_modules
dist
.cache
```
The gitignore file is a hidden file (hence the `.` before it). You will want to add this file to GitHub when you do a `git add`. The files specified within your gitignore file will NOT be added to your GitHub repo but will live locally only. `node_modules` is a very large filesystem that will be created when we add dependencies with `yarn`. `dist` and `.cache` are files that are added when we use the Parcel module bundler to build each version of our web app, and we will be storing these files on a future `gh-pages` branch, not the `master` branch. We will set up all that later.

Let's add a README. 

`touch README.md` to create it and then add some info into it, for example:
```
# My Web App built from scratch with yarn, Parcel and GitHub Pages

### Created: June 1, 2020
### Last modified: June 2, 2020

##### Template tutorial from: https://github.com/hashbangash/dojo
##### MIT Licensed
```

Next, push this repo to GitHub with:
```
git add .gitignore README.md
git commit // fill out a commit message in my IDE
git push -u origin master
```

Add and commit after every step in this to log your process.

### Install package manager, yarn

`brew install yarn`

If you already have yarn, you could `brew upgrade yarn` instead.

### Install bundler, Parcel, using my package manager

`yarn global add parcel-bundler` from [Parcel Getting Started](https://parceljs.org/getting_started.html)

### Initialize project

`yarn init`

You can click `return` or `enter` on your keyboard to accept the default information for each field shown in parens `()`, or type to modify the field.

This creates a `package.json` file. The entry-point is `index.js`, which means that's the first JS file that starts up the program.

Then, follow the next instructions, which are from the [Parcel React Recipe](https://parceljs.org/recipes.html#react) from the React official docs.

```
yarn add react
yarn add react-dom
```

This tutorial builds a React app, but if you want to build a Bootstrap and Sass web app instead of React, at this point you could remove react with `yarn remove react react-dom` and the other dependencies with `yarn add bootstrap jquery popper.js` and `yarn add --dev sass` if you want to. I did that for [my portfolio](https://github.com/hashbangash/dev/blob/master/v4_build.md).

Now, we'll add the module bundler, Parcel:

```
yarn add --dev parcel-bundler
```

The flag `--dev` (fyi, same as `-d` flag) adds `parcel-bundler` in the `devDependencies` in `package.json`. We're using these libraries of code for the development of the app only, and these files don't need to accompany the live production version of the app that it sent to user's computer.

I did get a warning when I ran `yarn add --dev parcel-bundler` that my `core-js` was below version 3, so I did `yarn add core-js`. Then, when I checked my `package.json`, the `core-js` version showed `^3.6.5`, which is current (as of June 10, 2020).

Alright! Now we've got the libraries of code we need on our computers, and we've got all the basic files set up in a folder that we've synced with Github.

## [Home](./../README.md)
## [Prev <== Dependency Choices](./dependencies.md)
## [Next ==> Set up development environment](./dev.md)
