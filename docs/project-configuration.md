# ⚙️ Project Configuration

#### ESLint

ESLint should always be used to make sure best practices and consistency are in place. ESLint will warn you when your code starts to "smell" bad, e.g. unused imports.

The Airbnb style guide is the suggested. It can be configured during ESLint setup.

#### Prettier

Not suggested during Hack Reactor, but a good tool for automatically formatting code to be consistent across a codebase.

#### Absolute imports

Absolute imports can be configured and used with aliases. Absolute imports makes it easier to find files. It also makes it so imports are not broken when the file is moved.

Instead of:

```javascript
import { OverviewComponent } from '../../../components/features/overview';
```

We can simply write:
``` javascript
import { OverviewComponent } from '~/components/features/overview';
```

The `~/` is an alias for `src/`, and can be configured to other characters. `@` is commonly used, but creates confusion with npm packages.

Configuring absolute imports can be complex, since it needs to be done in multiple places.

`jsconfig.json`: jsconfig is by your text editor, e.g. VS Code, for features like autocomplete.
```json
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["./src/*"]
    }
  }
```

`webpack.config.js`: webpack needs to be configurd in order to propertly bundle your code.

```javascript
resolve: {
  modules: [path.resolve(__dirname, './client/src'), 'node_modules'],
  extensions: ['.js', '.jsx'],
  alias: {
    '~': path.resolve(__dirname, './client/src'),
  },
},
```

`eslintrc.js`: ESLint needs to be configured to not throw errors due to unresolved imports. It can be configured to use webpack settings. This does require installation of `eslint-import-resolver-webpack`  as a devDependency.

```javascript
{
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
}
```

`.babelrc`: babel used by Jest and needs to be configured, since tests do not go through webpack transformation
```javascript
{
  "plugins": [
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "test": "./test",
        "reducers": "./src/reducers"
      }
    }]
  ]
}
```
