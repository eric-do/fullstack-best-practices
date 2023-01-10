# 🌐 API Layer

## Overview

With clear separation of concerns, components shouldn't be responsible for handling network requests. Defining such logic in a component tightly couples the implementation. Some API requests are used throughout the application, and it's not ideal to re-write the request every time. We should have a custom hook handle the request, and simply have components that need the data use the hook.

API libaries such as `axios` should also be imported and re-exported in the `/lib` directory. This way any configurations are done in one place, and all code that needs to use axios will use the configured instance of the library.
