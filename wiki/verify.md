# Verifying the build

## React Developer Tools for Chrome

Additionally, I have downloaded the [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), and when the React app is properly deployed, the Chrome DevTools shows the React `Components` and `Profiler` tabs as well! In the [Optimizing Performance React docs](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build), we can prove that this is a live React app:

![React Developer Tools for Chrome verifying the build](https://user-images.githubusercontent.com/22508682/80836320-7c16b280-8bc2-11ea-901a-cb0f1f5c22e9.png)

## Chrome DevTools Network tab

I went to the browser and verified the build sizes were indeed very small:
![Chrome DevTools Network tab](https://bc3-production-blobs-us-east-2.s3.us-east-2.amazonaws.com/6da4af0e-8a41-11ea-ae35-a0369f740db1?response-content-disposition=inline%3B%20filename%3D%22Screen%20Shot%202020-04-29%20at%201.46.46%20PM.png%22%3B%20filename%2A%3DUTF-8%27%27Screen%2520Shot%25202020-04-29%2520at%25201.46.46%2520PM.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA4YU4LL6QTTS55A%2F20200429%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200429T191450Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=8663be06e41dee71249207d5843e1acfad64b7cc5ab14462b086c00a57788324)

My build was 4 files, each under 1KB in size.

## Optional: add parcel file-size visualizer

It hasn't been maintained in a while, so I don't suggest downloading it, but I used it to measure the file size again and verify the file sizes were compressed.

[`parcel-plugin-bundle-visualiser`](https://github.com/gregtillbrook/parcel-plugin-bundle-visualiser)

I did: `yarn add --dev parcel-plugin-bundle-visualiser`

It added 24 new dependencies in the `node_modules` folder.

See how my main JS file is 590 B when compressed:
![parcel-plugin-bundle-visualiser output for this project](https://bc3-production-blobs-us-east-2.s3.us-east-2.amazonaws.com/bfacd598-8a40-11ea-b041-ecf4bbd72a88?response-content-disposition=inline%3B%20filename%3D%22Screen%20Shot%202020-04-29%20at%201.28.11%20PM.png%22%3B%20filename%2A%3DUTF-8%27%27Screen%2520Shot%25202020-04-29%2520at%25201.28.11%2520PM.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA4YU4LL6QTTS55A%2F20200429%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200429T191302Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=8a664e42e6d3e89bc6b74ee669d8ca746690a76fbe2be80ebc765e58083e3e82)

The report is located locally in `dist/report.html`.

70% of sites are larger than 1MB, which take 5 seconds to load, per Google Lighthouse Audit.

# Success! yarn, parcel, react, and gh-pages deployed to production!

The build is working and deployed on: <https://hashbangash.github.io/dojo/>.

## [Home](./../README.md)
## [Prev <== Deploy to Production](./deploy.md)
## [Next ==> Dockerize](./docker.md)
