# webpack-starter-kit
This is a webpack setup for running ES2015 and SASS with Hot Module Replacement.

## Features
- Dev Server with configurable PORT
- ES2015 with **hot module replacement** and **source maps**
- SASS with **hot module replacement** and **source maps**
- HTML reloading

## Quick Start
```bash
# Install dependencies
npm i
# Run dev server
npm run server
# Deploy to /dist
npm run deploy
```

## Developing
All dev runs through the `/src` directory, `/src/scripts/index.js` being the main entry point for the application.

To enable **hot module replacement** simply require the in your js.

To change dev server PORT, update the package.json _devPort_ property.

_Note: .html files **WILL NOT** be bundled into your javascript when deployed._
