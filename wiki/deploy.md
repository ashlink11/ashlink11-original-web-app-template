# Deploy to Production

## Set up GitHub pages

I went to my repository on GitHub and clicked on the "Settings" tab.

I turned on GitHub pages and it said: "Your GitHub Pages site is currently being built from the master branch."

I knew I wanted to deploy from the gh-pages branch, so I used the [Create React App Docs - Deployment - GitHub Pages Tutorial](https://create-react-app.dev/docs/deployment#github-pages).

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

#### Troubleshooting
When I was experimenting with adding a new dependency with `yarn add`, one time I had to:
`rm -rf .cache`
`rm -rf dist`
It's a [confirmed bug on the parcel GitHub repo](https://github.com/parcel-bundler/parcel/issues/729).

## [Home](./../README.md)
## [Prev <== Set up build process](./build_process.md)
## [Next ==> Verify the build](./verify.md)
