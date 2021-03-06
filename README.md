## Vue JS Prototype For Mod.io

This project consumes mod.io api to display games using VueJS. This page highlights basic controls to show sort (Name and Popular) and searching through the fetched list.  

### Technologies used:
- VueJS
- Webpack
- Mod.io API
- Material Design

### Installation

Clone repository
```
git clone git@github.com:asarfara/modio-vuejs-prototype.git
```

Install libraries
```
yarn install
```

Open dev server
```
yarn dev
```

Make sure port 8081 is not occupied by another process. If it is please update dev server to a random port by:
- Open webpack -> dev.config.js
- Locate devServer -> port
- Update to something else
- Run ```yarn dev``` again

This will open up a window in your browser with search controls and games.
