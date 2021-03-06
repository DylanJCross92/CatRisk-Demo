# Insight UI Toolkit - [Docs](https://ui-toolkit.icg360.net/)

![toolkit](https://i.imgur.com/r43g96e.png)

## Overview

Base CSS and React components that'll serve as the foundational, global styles for each of Insight's web applications. Based on and forked from Bootstrap.

This repo consists of two main parts:

1. The library (`src/lib/`)
    - The actual code you pull into your application to use the UI toolkit. It is built with `gulp`.
2. The documentation (`src/docs/`)
    - A static site documenting the library. It is built with webpack (on top of `react-scripts`).

### Local development `npm run start`

Gets a local site up and running on [http://localhost:3000](http://localhost:3000) where you can make changes to the library code or the  documentation.

Note: the documentation site is setup to use the [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) for debugging redux actions. Once you install the browser extension, you’ll be good to go. 

#### Sass/CSS

The library styles are built on top of Sass. You’ll have to compile Sass->CSS to see any changes you make to the source files:

- `npm run css` compile the CSS once
- `npm run css:watch` compile the CSS when Sass files change

The documentation site uses the library’s compiled CSS in general, but has docs-specific styles as well. However, the docs styles are written in CSS. So no need to compile anything.

### Release a new version `npm run release -- VERSION`

Runs an automated script that bumps the version, builds the new version of the library to `dist/`, uploads the new version of the docs to an s3 bucket, and pushes all these changes to the origin as a release branch.

Then you can go to Github, create a PR for your release branch, and merge it back in.

**Note**: in order to be able to upload the new version docs to s3, you'll need a [s3cfg config file](https://github.com/andrewrk/node-s3-cli#configuration) with your AWS credentials in this project's root.

### Testing `npm test`

## Using these assets in other projects

Compiled assets are in the `dist/` folder. To use these assets in other projects, bring the `ui-toolkit` repo in as you would any other node module, specifying the version you want:

```
npm i --save github:icg360/ui-toolkit#1.0.0
```

To import JS components:

```js
import { Button, Nav, Logo } from 'ui-toolkit';
```

To import styles, choose a “theme”:

```js
/* Basic Insight theme */
import 'ui-toolkit/dist/css/insight.css';

/* For FedNat-themed products */
import 'ui-toolkit/dist/css/fednat.css';

/* For Sagesure-theme products */
import 'ui-toolkit/dist/css/sagesure.css';
```

## Linting

This repo uses ESLint and Prettier to keep the repo functional and accessible. Check out the [Front End Documentation](https://github.com/icg360/front-end/blob/master/code-formatting.md) to see what the tools are, how they work and how to change the configuration.   

**NOTE: At this time all `__tests__` directories are excluded from linting. When tests are refactored, that exclusion must be removed from the `lint`, `lint:fix`, and `lint-staged` scripts.**  
  
**NOTE: At this time, some React rules are muted off in `styleguide/components/CodeExample.js` and `styleguide/components/CodeMirrorEditor.js`. If these files are refactored *make sure those rules are unmuted*. They are part of the `eslint-plugin-react` recommended settings that are not currently passing and *absolutely should be passing*.**  

## Adding Icons

All the files in `src/components/Icons` are generated by the `build:icons` npm script. This script does the following:

1. Takes all `.svg` files from `src/assets/icons` and converts them into named react components based on the svg’s file name.
2. Creates an `index.js` file for `src/components/Icons` that exports each icon as named react component.

The automatically generated file `src/components/Icons/index.js` exports its components at the root level in `src/components` by a single line export (`export * from './components/Icons'`). So when you run the build, all the associated components *and* exports should be automatically generated. This means developer is using `insight-ui` should be able to do `import {IconCheck} from 'insight-ui'`.

**Note:** If you ever need a new icon, you should be able to just drop the icon's `.svg` file in the folder with the other svgs, run the script, and commit your changes. The icon components will all be overwritten but, unless you change the build script, the existing icons should all appear the same in git. Only your new icon files will be present.

### Notes on unit tests:

Not all unit tests are complete. If a `Spec.js` file is the root component folder as opposed to the `__tests__` folder, that unit test is failing and needs to be rewritten to use the Enyzme/Chai/Jest tooling as opposed to the Teaspoon tooling which is not available in this repo.

## Known broken components

- [Tabs](https://github.com/icg360/ui-toolkit/issues/68)
- [Overlay](https://github.com/icg360/ui-toolkit/issues/75)
