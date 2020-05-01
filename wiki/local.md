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


## [Home](./../README.md)
## [Prev <== Dependency Choices](./dependencies.md)
## [Next ==> Set up development environment](./dev.md)
