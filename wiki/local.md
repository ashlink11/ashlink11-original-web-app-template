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
git remote -v // confirm I have the proper origins
```

Now, create your first file with: `touch .gitignore`

Open the file in your code editor and add these lines into it:
```
node_modules
dist
.cache
```
The gitignore file is a hidden file (hence the `.` before it). You will want to add this file to GitHub when you do a `git add`. The files in your gitignore will NOT be added to your GitHub repo but will live locally only. `node_modules` are files that will be created when we add dependencies with `yarn`. `dist` and `.cache` are files that are added when we use the Parcel module bundler.

Next, push this repo to GitHub with:
```
git add .
git commit // fill out a commit message in my IDE
git push -u origin master
```

Add and commit after every step in this to trace your progress.

### Install package manager, yarn

`brew install yarn`

If you already have yarn, you could `brew upgrade yarn` instead.

### Install bundler, Parcel, using my package manager

`yarn global add parcel-bundler` from [Parcel Getting Started](https://parceljs.org/getting_started.html)

### Initialize project

`yarn init`

This creates a [`package.json`](./package.json) file. This is version 1 of my project, with an MIT License and public repository on GitHub. The entry-point is `index.js`.

Then I followed the [Parcel React Recipe](https://parceljs.org/recipes.html#react) from the React official docs.
```
yarn add react
yarn add react-dom
yarn add core-js // I added this command to update to core-js version 3. It's because I had seen a warning that I was behind in core-js version when I installed Parcel.
yarn add --dev parcel-bundler
```

The flag `--dev` or `-d` adds `parcel-bundler` in the `devDependencies` in [`package.json`](./package.json).

I did get a warning when I ran `yarn add --dev parcel-bundler` that my `core-js` was below version 3, but when I checked my `package.json`, the `core-js` version showed `^3.6.5`, so I decided I was fine for now, and to keep building.


## [Home](./../README.md)
## [Prev <== Dependency Choices](./dependencies.md)
## [Next ==> Set up development environment](./dev.md)
