# Set up Build Process

### Add Parcel CLI

So, we already have the Parcel module bundler itself, but let's also install the Parcel CLI so we can type `parcel` commands into the terminal.

"The Parcel CLI is built into the main parcel package. While you can install it globally and run it, it is much better to install it locally into your project as a dev dependency." From the [Parcel CLI section of Parcel docs](https://github.com/parcel-bundler/parcel).

Run this: `yarn add --dev parcel@next`

Then add the build script to `package.json`:
```json
"scripts": {
  "build": "parcel build index.html",
  "start": "parcel serve index.html"
}
```

"Now you can run `yarn build` to bundle your project for production and `yarn start` to dev on your project."

### Build project

`yarn build` is now the same as `parcel build index.html`, based on the script you added to `package.json`. Use either to build the project.

When I build, the terminal output shows a few small files are added to the `dist/` folder.

```
dist/dojo.f84e1103.js           1.11 KB     395ms
dist/index.html                   253 B    13.11s
dist/styles.91125fd8.css.map      170 B       3ms
dist/dojo.f84e1103.js.map          95 B       2ms
dist/styles.91125fd8.css           62 B     3.25s
```

They were very small for me, in the KB and B size range.


### Adding a compiler: Babel (optional)

After configuring the package manager and bundler, you can optionally add a compiler so your app will work not only on modern, updated browsers, but on older browsers.

The [Parcel Docs on JavaScript](https://parceljs.org/javascript.html
) have a section about Babel.

"Babel is a popular transpiler for JavaScript, with a large plugin ecosystem. Using Babel with Parcel works the same way as using it standalone or with other bundlers."

There are differences between React babel presets and their notations (e.g. `babel-preset-react` is [version 6.26.3 of babel](https://babeljs.io/docs/en/6.26.3/babel-preset-react) vs. `@babel/preset-react` is [version 7.10.0 of babel](https://babeljs.io/docs/en/babel-preset-react)).

I followed the Parcel docs and went with version 7:

`yarn add --dev @babel/preset-react`

I added a `babel` section to my `package.json`:
```
"babel": {
  "presets": ["@babel/preset-react"]
}
```
So, now you should have one added `devDependencies`:
```
"@babel/preset-react": "^7.10.1",
```

I did not test to verify babel is working by experimenting with older browser emulators. 

## [Home](./../README.md)
## [Prev <== Set up development environment](./dev.md)
## [Next ==> Deploy to production](./deploy.md)
