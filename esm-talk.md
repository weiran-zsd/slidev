---
# try also 'default' to start simple
layout: center
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## 从ES modules 看 JavaScript 的发展和演化
---

# 从ES modules 看 JavaScript 的发展和演化

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/weiran-zsd/talks" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>


<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# TOC

- 🎨 1. the history (1989~2015)
- 💻 2. esm 兼容性
- ✏️ 3. esm 使用
- 📤 4. 展望

<br>
<br>


<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
}
</style>


---

# 1. the history (1989~2015)

---

## 1989~1991, the web

<img src="/img/web-creator.jpg"/>

---

<img src="/img/form.jpg">

---

## 1996, JavaScript(Netscape)

<p>
<!-- <img src="/icons/js.png" width="200" height="200"/> -->
<img src="/img/js-creator.jpg" width="200" height="200">
</p>

---

# 1999, ES3

* regex
* try...catch
* ...

---

# 2003, ES4 draft

* classes
* module
* optional type annotations & static types
* generators & iterators
* destructuring assignment
* ...

---

# 2008, Chrome(google)

<img src="/img/chrome.jpeg" width="200" height="200"/>

---

<img src="/img/browsers-perf.jpg"/>

---

# 2009/11/8, Node.js(Ryan Dahl)

* commonjs

```js
var foo = require("foo");
// ...
module.exports = {
  bar: function(){
    // ...
  }
}
```

---

# 2009/12/9, ES3.1 (ES5)

* strict mode
* getters & setters
* JSON
* ...

---

```js
foo = 0;
console.log(foo); // ?
```

```js
var foo = 0;
console.log(window.foo); // ?
```

```js
function foo(){
  this.bar = "bar";
}

foo(); //?
```

```js
var foo = 0;

foo.bar = "bar"; //?
```

```js
var mod = (function mod(){
  var local = '....';
  var foo = function foo(){ return local;}
  //...

  return {foo};// exported mod
}());
```

---

<h1>严格模式</h1>

```js
"use strict";

foo = 0;
console.log(foo);
```

---

# 2015, ES2015(aka ES6)

* es modules
* classes
* generators & iterators
* destructuring assignment
* ...

---


## modules: iife => commonjs => esm

```ts {1-5|7-8|10-11}
var $ = (function(){
  var jquery = function(){};
  //...
  return jquery;
}());

var $ = require('jquery');
module.exports = $;

import $ from 'jquery';
export default $;
```

<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>
---

## 为什么要使用 es modules?
<img src="/img/why-esm.jpg">


---


## 2.1 兼容性(浏览器)

<img src="/img/esm-webcompat.jpg">


---

## 2.2 兼容性(Node.js)

<img src="/img/esm-nodecompat.jpg">

---

## 2.3 兼容性(toolings)

<table>
    <thead>
        <tr>
            <th>工具</th>
            <th>支持情况</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>babel</td>
            <td>✅</td>
        </tr>
        <tr>
            <td>webpack</td>
            <td>✅</td>
        </tr>
        <tr>
            <td>eslint</td>
            <td>✅</td>
        </tr>
        <tr>
        <td>rollup</td>
            <td>✅</td>
        </tr>
        <tr>
        <td>Typescript</td>
            <td>✅(ts v4.5 beta)</td>
        </tr>
        <tr>
        <td>mocha</td>
            <td>✅</td>
        </tr>
        <tr>
        <td>jest</td>
            <td>🚧</td>
        </tr>
    </tbody>
</table>

---

<img src="/img/eslint-esm.jpg" height="150px">

---

<img src="/img/ts-esm.jpg" height="150px">

---

## 3.1 使用 babel/typescript + webpack/rollup/parcel

```js
{
  "presets": ["@babel/preset-env"],
}
```
<hr/>

```js
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
  }
}
```
---

## 3.2 使用原生esm(Web)

<img src="/img/vanilla.jpg"/>
<img src="/img/vanilla-result.jpg"/>


---

```html
<script>alert('stop!!!!!');</script>
<div>hello!</div>
```

```html
<script type="module">alert('stop!!!!!');</script>
<div>hello!</div>
```

<!-- defered!!!--->

---

## 3.3 使用原生esm(Node.js)

<img src="/img/node-esm-type-module.jpg"/>

---

## 3.3 使用原生esm(Node.js)

<img src="/img/node-esm-mjs.jpg"/>

---

## 3.4 使用原生esm(Node.js)

<img src="/img/node-mix-cjs.jpg"/>

---

## 3.5 使用原生esm(Node.js)

<img src="/img/node-dual.jpg" width="600"/>

---

## 4.4 使用原生esm(Node.js)

1. 使用 `"type": "module"` 或 `*.mjs`
2. 使用 `.js/.mjs`(e.g. `import foo from "./foo.js"`)
3. 使用 `pkg.exports`(dual-mode)
4. 在 esm 中引入 cjs ✅
5. 在 cjs 中引入 esm ❌

---

# 4. 展望

Q: esm 相关？

* import()
* import.meta

---

Q: esm的未来？

<img src="/img/esm-future.jpg">

---

Q: The TC39 Process?

* 🤷🏻 Stage 0: Strawperson
* 💡 Stage 1: Proposal
* ✍🏻 Stage 2: Draft
* 📝 Stage 3: Candidate - *almost final*
* 🎖 Stage 4: Formal standard

---

<img src="/img/lang-comparasion.jpg">

---

# QA

---

# 参考文献

1. https://jakearchibald.com/2017/es-modules-in-browsers/
2. https://caniuse.com/
3. https://nodejs.org/
4. https://www.typescriptlang.org/docs/
5. https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/#esm-nodejs
6. https://blog.sindresorhus.com/get-ready-for-esm-aa53530b3f77
7. https://gils-blog.tayar.org/posts/using-jsm-esm-in-nodejs-a-practical-guide-part-1/
8. https://gils-blog.tayar.org/posts/using-jsm-esm-in-nodejs-a-practical-guide-part-2/
9. https://tc39.es/process-document/