# sass-loader export variables issue

> This repository analyse sass variables export regression with react-scripts@4

## Expected behavior

```sass
$white: '#FFF';

:export {
  white: $white
}
```

```js
import colors from './colors.scss'

console.assert(
  Object.keys(colors).length > 0,
  'Exported colors should contains at least 1 variables',
)
```

## The problem

A bisect research point the problem with css-loader@4

```working-package.json
  "dependencies": {
    "css-loader": "3.x",
    "html-webpack-plugin": "4.x",
    "node-sass": "4.x",
    "sass-loader": "10.x",
    "serve": "*",
    "style-loader": "2.x",
    "webpack": "4.x"
  },
```

```failed-package.json
  "dependencies": {
    "css-loader": "4.x",
  },
```