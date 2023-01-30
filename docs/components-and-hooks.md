# ⚛️  Components and hooks

## Overview

"Separation of concerns" is often talked about but not frequently put into practice since it's not always clear what the responsibility of code is. These concerns are more intuitive with React, since components and hooks can have very specific uses.

## Components

Where possible, components should be made generic with customization options via props. This way, the application isn't riddled with many variants of input fields and buttons, each with minorly different implementations. Ideally we can just pass relevant data to these components and not worry about business logic and styling.

The [Form](/client/src/components/Form.jsx) component for example, encapsulates all logic such as state. It only needs to be given things like:

- Input fields and respective types
- What function to fire on submit
- Misc details like form title

This way, dependent components, e.g. [MovieForm](/client/src/features/MoviesList/components/MovieForm.jsx), do not need to worry about things like state.

Other components, such as the [InputField](/client/src/components/InputField.jsx) and [SubmitButton](/client/src/components/SubmitButton.jsx) can also be styled once and used everywhere.

## Hooks

Hooks provide a way to, of course, "hook" into data. When components use a custom hook, they can get access to data (state) that may change over time, without managing the implementation themselves.

The [useGetMovie](/client/src/features/MoviesList/api/useGetMovies.js) hook, for instance, handles the implementation of the `GET /movies` API request. This way, dependent components such as [MovieList](/client/src/features/MoviesList/index.jsx) don't need to re-write `$.ajax`, `fetch`, `axios` calls. They simply "hook" into the relevant data required for rendering, i.e. `data`, `isPending`, `error`.