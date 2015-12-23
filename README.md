# [JSXHTML](https://github/eliot-akira/jsxhtml)

Transform JSX to HTML with Babelify and transform-react-jsx

## Use

In .babelrc

~~~json
"plugins": [
  ["transform-react-jsx", { "pragma": "jsxhtml" }]
]
~~~

In application

~~~javascript
require('jsxhtml');
~~~

Use

~~~javascript
const template =
  <div class="something">
    <b>Yey</b>
  </div>;
~~~
