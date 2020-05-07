# Set up Build Process

### Adding a compiler: Babel

After I configured the package manager and the bundler, I knew I wanted practice with a compiler so my app will work not only on my computer and browser, but on older browsers.

The [Parcel Docs on JavaScript](https://parceljs.org/javascript.html
) have a section about Babel.

"Babel is a popular transpiler for JavaScript, with a large plugin ecosystem. Using Babel with Parcel works the same way as using it standalone or with other bundlers."

I briefly researched the difference between babel presets and their notations (e.g. `babel-preset-react` vs. `@babel/preset-react`). This is a topic I will dive deeper on someday soon.

I followed the parcel docs and added:

`yarn add --dev @babel/preset-react @babel/present-env`

I added a `babel` section to my `package.json`:
```
"babel": {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```
So, now I had three babel `devDependencies`:
```
"@babel/core": "^7.0.0-0",
"@babel/preset-env": "^7.9.6",
"@babel/preset-react": "^7.9.4",
```

I did not test to verify these were working by experimenting with older browser emulators, but since I barely had any website content at this point, I didn't think I could test effectively anyway.


### Add Parcel CLI

"The Parcel CLI is built into the main parcel package. While you can install it globally and run it, it is much better to install it locally into your project as a dev dependency." From the [Parcel CLI section of Parcel docs](https://github.com/parcel-bundler/parcel).

Run this: `yarn add --dev parcel@next`

Then add the build script to `package.json`:
```json
"scripts": {
  "build": "parcel build index.html",
  "start": "parcel serve index.html"
}
```

"Now you can run yarn build to bundle your project for production and yarn start to dev on your project."

### Build project

`yarn build` is now the same as `parcel build index.html`, based on the script you added to `package.json`. Use either to build the project.

A bunch of minified files get added to the `dist/` folder.

```
dist/dojo.f84e1103.js           1.11 KB     395ms
dist/index.html                   253 B    13.11s
dist/styles.91125fd8.css.map      170 B       3ms
dist/dojo.f84e1103.js.map          95 B       2ms
dist/styles.91125fd8.css           62 B     3.25s
```

They were very small for me.

## [Home](./../README.md)
## [Prev <== Set up development environment](./dev.md)
## [Next ==> Deploy to production](./deploy.md)
