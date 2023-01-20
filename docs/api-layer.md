# 🌐 API Layer

## Overview

This section covers various ways to separate API logic from component code. The intention is to create reusable code via use of custom hooks and clear separation of concerns.

## Custom hooks

With clear separation of concerns, components shouldn't be responsible for handling network requests. Defining such logic in a component tightly couples the implementation of the component with the implementation of the network request. Some API requests are used throughout the application, and it's not ideal to re-write the request every time. We can have a custom hook handle the request, and simply have components that need to make the request use the hook.

### GET requests

The MovieList [component](/client/src/features/MoviesList/index.jsx) needs to get and display movie data, but does it by using the useGetMovies [hook](/client/src/features/MoviesList/api/useGetMovies.js).


### POST requests

The MovieForm [component](/client/src/features/MoviesList/components/MovieForm.jsx) needs to create new movie data, but does it using a function provided by the useAddMovie [hook](/client/src/features/MoviesList/api/useAddMovie.js).

## Exporting libraries

API libaries such as `axios` should be imported and re-exported in the `/lib` directory. This way configurations can be done in one place, and all code that needs to use axios will use the configured instance of the library.
