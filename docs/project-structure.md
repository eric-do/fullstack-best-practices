# 🗄️ Project Structure

## Overview

Most of the project code is either frontend code (the client), or backend code (the server).

If the project is complex, a good way to organize code is _by feature_.

## Frontend

The frontend code is in a `client` folder, and can be structured as:

```sh
src
+-- assets
|
+-- components
|
+-- config
|
+-- features
|
+----<FEATURE>
|
+------ api         # exported API request declarations and api hooks related to a specific feature
|
+------ assets      # assets folder can contain all the static files for a specific feature
|
+------ components  # components scoped to a specific feature
|
+------ hooks       # hooks scoped to a specific feature
|
+------ utils       # utility functions for a specific feature
|
+------ index.js    # entry point for the feature, it should serve as the pub
|
+-- hooks
|
+-- lib
|
+-- providers
|
+-- test
|
+-- utils
```

### assets

This folder should not be very large. There may be some static assets, e.g. logos and fonts, but the majority of static assets are likely to be hosted on CDNs.

### components

This folder is for shared components across the entire application. Logic and UI such as forms and buttons shouldn't have to be re-coded just because they're used in different parts of the application. Code should be reused for consistent performance and appearance.

### config

Whenever a change is needed, aim to have it done in as few places as possible. By putting global variables in one location, changes to those variables don't need to be updated in every file where they're in use.

### features

Individual modules (`overview`, `relatedProducts`, `questionsAndAnswers`, `reviews`, etc.) would have their own folders within `features`. The majority of the project's code will exist in these folders.

#### api
Components should be blind to the implementation of AJAX requests, therefore custom hooks, e.g. `useGetProducts` can be made in `api` and exported to relevant components.

#### exports
Everything needed from a feature should be exported from the `index.js`. This file serves as the public API of the feature.

Good:

`import {OverviewComponent} from "@/features/overview"`

Bad:

`import {OverviewComponent} from "@/features/overview/components/OverviewComponent`

### hooks

Any custom global React hooks can be placed here.

### lib

Libraries such as axios should be imported and re-exported here. This way if there is logic that needs to be configured for each library, the logic only needs to be configured once, and the same library instance is exported.

Use cases for axios:
- setting a global baseUrl
- intercepting responses and parsing response.data

### providers

Any global Providers for React Contexts would be put here.

### test

Utilities for testing should be put here. A common one is a mock server, for instance provided by `msw`.

## Backend

The backend code is in a `server` folder, and can be structured as:

```sh
+-- controllers
|
+-- models
|
+-- middleware
|
+-- routes
|
+-- utils
|
+-- app.js          # separation allows for testing of Express app
|
+-- index.js        # server connection logic
```