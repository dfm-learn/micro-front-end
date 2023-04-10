# micro-front-ends demos

## overview
A micro front end architecture is one where multiple apps are "combined" into one user experience.  This is not simply where each app is a different app and common components and styling are used to make it "feel" like one experience.  This is where a single page can be composed of multiple components that are each served from different

In an MFE architecture there is a host and one or more "apps". These apps may be simple functionality or fully featured.  What makes them special is that they are served from a remote location different from that of the host, and they are combined at run time.  

Think of it this way. We are familiar with the concept of building an application and importing packages from npm.  These packages may be very small in their impact, while others provide a substantial piece of the user experience. But in that case we are combing everything at build time and the resulting code is deployed to a single server and served up all together.  By contrast, in an MFE app, the combining does not take place until runtime within the user's browser, and those separate packages come from various other locations.

Here are some various scenarios for setting up micro front ends via module federation.

What I want to show:
* a vue host with vue remote apps. The host will be Vue 3 and will use two remote apps that are Vue 3 and Vue 2.
* Use of webpack and vite together
* state management / communication between the various pieces of the application.

Eventually I would like to show the intermixing of different front end frameworks like React and Vue.


## Side note
Many of the examples that I have found around the web seem, to me, to make the solution overly complex or hidden.  I intend to point out the specific things that enable this to work.


# NOTES
* install webpack 5.72.1 - do not rely on the version that is used by the CLI
* remote app error: `Shared module is not available for eager consumption: webpack/sharing/consume/default/vue/vue`
    * need to "bootstrap" the app.  Currently, the main.ts file is the entry.  We need to create a bootstrap.ts file that has the same contents as main.ts.  Then remove everything from main.ts and replace with `import("./bootstrap")`
    * otherwise the app will not load.
* remote modules definition required for typescript
* webpack optimization required in the remote app. In particular the `chunks: 'async'` portion.
* router integration
    * remote app exposes it routes
    * host app needs a way that it can incorporate those routes.
    * not sure how you handle a remote that uses a different routing mechanism.
    * the route path has to be VERY specific with Vue-Router - in order to make it work relatively,
