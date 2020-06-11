# Deploy to Production

## Set up GitHub pages

Go to your repository on GitHub.com and click on the "Settings" tab.

Ensure your repo is public and turn on GitHub Pages. It should say "Your GitHub Pages site is currently being built from the master branch."

Let's deploy from the `gh-pages` branch, detailed here: [Create React App Docs - Deployment - GitHub Pages Tutorial](https://create-react-app.dev/docs/deployment#github-pages).

Add the `homepage` to `package.json`, for example with mine:
`"homepage": "https://github.com/hashbangash/dojo",`

Edit your scripts to include the deployment:
```
"scripts": {
  "start": "parcel serve index.html",
  "build": "parcel build index.html --public-url /<your_repo_name>/",
  "predeploy": "yarn build",
  "deploy": "gh-pages -d dist"
}
```
The `build` script was updated with the `--public-url` tag and the relative path of the GitHub repository. This [parcel and gh-pages help page on the parcel-bunder GitHub issue](https://github.com/parcel-bundler/parcel/issues/505) had the key info needed to alter the `build` script.

Note that the `deploy` script uses the `dist` folder because this is the name of the directory `parcel` uses during the build process.

Then, ensure on your GitHub repo in `Settings` that GitHub Pages is building from the `gh-pages` branch and not the `master` branch.

Great! Now you can visit your hosted page! Mine is at <https://hashbangash.github.io/dojo/>.

## [Home](./../README.md)
## [Prev <== Set up build process](./build_process.md)
## [Next ==> Verify the build](./verify.md)
