# ⚙️ Project Configuration

#### ESLint

ESLint should always be used to make sure best practices and consistency are in place. ESLint will warn you when your code starts to "smell" bad, e.g. unused imports.

#### Prettier

Not suggested during Hack Reactor, but a good tool for automatically formatting code to be consistent across a codebase.

#### Absolute imports

Absolute imports should always be configured and used because it makes it easier to move files around and avoid messy import paths such as `../../../Component`. Wherever you move the file, all the imports will remain intact due to not using relative paths.

However, configuring absolute imports can be complex, since it needs to be done in multiple places:

- jsconfig.json: used by your text editor, e.g. VS Code
- .eslintrc: TBD
- webpack.config.js: used by webpack in order to propertly bundle your code
- .babelrc: used by Jest, since tests do not go through webpack transformation

`jsconfig.json`

```json
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
```

`webpack.config.js`
```javascript
resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      ...
      '@': path.resolve(__dirname, './src'),
    }
  },
```

`.babelrc`
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

`eslintrc.js`
```javascript
{
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack.config.js"
      }
    }
  }
}
```



[Paths Configuration Example Code](../tsconfig.paths.json)

In this project we have to create another tsconfig file `tsconfig.paths.json` where we configure the paths and merge it with the base configuration, because CRA will override it otherwise.

It is also possible to define multiple paths for various folders(such as `@components`, `@hooks`, etc.), but using `@/*` works very well because it is short enough so there is no need to configure multiple paths and it differs from other dependency modules so there is no confusion in what comes from `node_modules` and what is our source folder. That means that anything in the `src` folder can be accessed via `@`, e.g some file that lives in `src/components/MyComponent` can be accessed using `@/components/MyComponents`.