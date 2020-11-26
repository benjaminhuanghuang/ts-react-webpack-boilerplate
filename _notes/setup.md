
Create package.json
```
npm init
```

Add typescirpt
```
npm install typescript --save-dev
```
Creat tsconfig.json


Add TSLint
```
  npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```
Create .eslintrc 


Craete dist/index.html and src/inedex.tsx


Install React and React type
```
npm install react react-dom
npm install @types/react @types/react-dom --save-dev
```


Adding webpack
```
  npm install webpack webpack-cli --save-dev

  npm install webpack webpack-dev-server --save-dev

  npm install ts-loader --save-dev
```



Create 
```
  "scripts": {
    "start": "webpack serve --env development",
    "build": "webpack --env production"
  },
```