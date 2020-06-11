# Verifying the build

## React Developer Tools for Chrome

If you haven't already, download the [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), and when the React app is properly deployed, the Chrome DevTools shows the React `Components` and `Profiler` tabs alongside the usual DevTools tabs. From the [Optimizing Performance React docs](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build), we can prove that this is a live React app by clicking on the extension's logo to see this:

![React Developer Tools for Chrome verifying the build](https://i.imgur.com/L21B2ow.png)

## Chrome DevTools Network tab

I went to the browser and verified the build sizes were indeed very small:
![Chrome DevTools Network tab](https://i.imgur.com/ckuEBag.png)

My build was 3 requests with 158 B transferred.

70% of sites are larger than 1MB, which take 5 seconds to load, per Google Lighthouse Audit.

# Success! yarn, parcel, react, and gh-pages deployed to production!

The build is working and deployed on: <https://hashbangash.github.io/dojo/>.

## Styling 

If you want to add a css file, check out my current build to see how I added it. React has lots of different ways to do styling, such as Sass, inline styles, styled-components, etc.

## [Home](./../README.md)
## [Prev <== Deploy to Production](./deploy.md)
## [Next ==> Dockerize](./docker.md)
