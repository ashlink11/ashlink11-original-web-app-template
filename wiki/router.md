# `react-router-dom` experiment

I attempted using [`react-router-dom`](https://reacttraining.com/react-router/web/guides/primary-components) and using the `BrowserRouter`.

History: For my [General Assembly capstone project](https://github.com/hashbangash/simple-fundamentals-client), I built a React multi-page SPA with routing, but I used the `HashRouter` instead of the `BrowserRouter`. The issue is that Google does not index separate "pages" if there are hashes in the URL, so I wanted to experiment with the `BrowserRouter`.

My attempt is stored on [this branch](https://github.com/hashbangash/dojo/tree/react-router-dom-attempt).

I was able to get the page to build and function as a SPA with multiple routes, but I ran into an issue with GitHub Pages hosting. The issue was, that if I went to the homepage, <https://hashbangash.github.io/dojo/> and then routed to a `/about` page, it works. But if I try to visit that page first without routing through the homepage, I would get a 404.

This made me realize GitHub Pages is primarily used for hosting simple static project pages. My idea for implementing the `BrowserRouter` in the future is to get my own domain and configure the hosting myself, or look into hosting options other than GitHub. It's been great to learn what these tools are good for, and when I've outgrown them.

## [Home](./../README.md)
## [Next ==> End of sprint reflection](./reflect.md)
## [Prev <== Dockerize](./docker.md)
