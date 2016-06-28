# 🌭 Hotdoc
[![npm package](https://img.shields.io/npm/v/hotdoc.svg)](https://www.npmjs.com/package/hotdoc) [![license](https://img.shields.io/npm/l/hotdoc.svg)](LICENSE.md)

A SASSier responsive documentation template theme for JSDoc 3 based on [docdash](https://github.com/clenemt/docdash)

## Why

I really liked docdash, but wanted to customize it. When I looked at the CSS, I mostly wanted to die, so I gutted a bunch of it, rewrote it in SASS, and here we are.

## Install

    $ npm install hotdoc

## Usage

1. Clone repository to your designated `jsdoc` template directory
2. Modify the colors, fonts, and whatever else you want in `src-static/styles/_variables.scss`
3. Run `webpack` to rebuild

In your thing

    $ jsdoc entry-file.js -t path/to/hotdoc

## Usage (npm)

**Note:** If you want to customize things, you should follow the steps above. Better `npm` workflow integration is the plan, but it's clunky for now. Sorry. I'll totally accept pull requests!

In your projects `package.json` file add a new script:

```json
"script": {
  "generate-docs": "node_modules/.bin/jsdoc -c jsdoc.json"
}
```

In your `jsdoc.json` file, add a template option.

```json
"opts": {
  "template": "node_modules/hotdoc"
}
```

## Sample `jsdoc.json`
See the config file for the [fixtures](fixtures/fixtures.conf.json) or the sample below.

```json
{
    "tags": {
        "allowUnknownTags": false
    },
    "source": {
        "include": "../js",
        "includePattern": ".js$",
        "excludePattern": "(node_modules/|docs)"
    },
    "plugins": [
        "plugins/markdown"
    ],
    "opts": {
        "template": "assets/template/hodoc/",
        "encoding": "utf8",
        "destination": "docs/",
        "recurse": true,
        "verbose": true
    },
    "templates": {
        "cleverLinks": false,
        "monospaceLinks": false
    }
}
```

## Options

Hotdoc supports the following options:

```js
{
    "hotdoc": {
        "static": [false|true],  // Display the static members inside the navbar
        "sort": [false|true]     // Sort the methods in the navbar
    }
}
```

Place them anywhere inside your `jsdoc.json` file.

## Thanks

Thanks to [docdash](https://github.com/) and, by extension, [lodash](https://lodash.com) and [minami](https://github.com/nijikokun/minami).

## License

Licensed under the Apache License, version 2.0. (see [Apache-2.0](LICENSE.md)).
