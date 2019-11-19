# PostCSS Light Levels [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[![Travis][build-badge]][build] [![npm package][npm-badge]][npm] [![Coveralls][coveralls-badge]][coveralls]

A [PostCSS] plugin for polyfilling the [light-level CSS @media feature].

This media feature can be used to adjust styles based on the ambient light level - however since it's from a relatively recent Working Draft, it currently has zero browser support.

This polyfill allows you to write the upcoming syntax but uses it to generate class names which you can apply to the `<body>` element in your HTML in order to achieve the same behaviour today.

It is recommended to combine this plugin with the client side JS library [light-levels] which detects ambient light levels and applies the corresponding class name to the `<body>` element.

It is worth nothing that both the JS library and post-css plugin can be used independently if you wish.

[light-levels]: https://github.com/DaveOrDead/light-levels
[postcss]: https://github.com/postcss/postcss
[light-level css @media feature]: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/light-level
[build-badge]: https://travis-ci.com/DaveOrDead/postcss-light-levels.svg?branch=master
[build]: https://travis-ci.com/DaveOrDead/postcss-light-levels
[npm-badge]: https://raster.shields.io/npm/v/postcss-light-levels.png
[npm]: https://www.npmjs.com/package/postcss-light-levels
[coveralls-badge]: https://coveralls.io/repos/github/DaveOrDead/postcss-light-levels/badge.svg?branch=master
[coveralls]: https://coveralls.io/github/DaveOrDead/postcss-light-levels?branch=master

Write your CSS rules in the upcoming syntax:
```css
@media (light-level: washed) {
  .foo {
    background: white;
    color: black;
    font-size: 2em;
  }
}
```

Light Levels will convert it into syntax the browser understands
```css
.light-level-washed .foo {
  background: white;
  color: black;
  font-size: 2em;
}
```

## Table of Contents

- [Demo](#Demo)
- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [License](#license)

## Demo

A working demo can be found here: [https://daveordead.github.io/light-levels-demo/](https://daveordead.github.io/light-levels-demo/)

## Installation

```sh
npm install postcss-light-levels --save
```

## Usage

Check your project for existed PostCSS config: `postcss.config.js` in the project root, `"postcss"` section in `package.json` or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-light-levels'),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs] and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage

## Options

| Option name | Usage | Default |
| ----------- | ----- | ------- |
| prefix | if `.light-level-` doesn't work for you, change the prefix that comes before ['dim' / 'normal' / 'washed'] with this option.  | '.light-level-' |


## License

Copyright (c) 2019 [David Berner](http://davidberner.co.uk)

Licensed under the MIT license _(see [LICENSE.md](https://github.com/daveordead/postcss-light-levels/blob/master/LICENSE) for more details)_


