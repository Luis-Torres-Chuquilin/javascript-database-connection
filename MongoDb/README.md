<!-- @format -->

# Babelrc for ES6 Syntaxes

This Started use Babelrc to use ES6 syntaxes:

```js
{
    "presets": ["@babel/preset-env"],
    "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

This plugin allow you to use class properties as super, inheritance, extend, etc.

```js
{
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

The dependencies to install are:

```js
  "devDependencies": {
    "@babel/core": "7.13.10",
    "@babel/node": "7.13.12",
    "@babel/plugin-proposal-class-properties": "^7.16.7",
    }
```

# Enton Variables to use

```js
  "devDependencies": {
    "dotenv": "^16.0.0",
    }
```
