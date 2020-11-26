
Create package.json
```
npm init
```

Add typescirpt
```
npm install typescript --save-dev
```
Creat tsconfig.json


Add ESLint
```
  npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```
Create .eslintrc 


Craete dist/index.html and src/inedex.tsx

## React
Install React and React type
```
npm install react react-dom
npm install @types/react @types/react-dom --save-dev
```

## Router
```
```


## Webpack
Adding webpack and webpack.config.js
```
  npm install webpack webpack-cli --save-dev

  npm install webpack webpack-dev-server --save-dev
```


Create script
```
  "scripts": {
    "start": "webpack serve --env development",
    "build": "webpack --env production"
  },
```
## Support ts
```
  npm install ts-loader --save-dev
```
add webconfig rule
```
{
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
},

```
## Support css
```
  npm install --save-dev style-loader css-loader
```
add webconfig rule
```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```
