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
  ## es modules: 昨天，今天，明天
---

# 《ES Modules 的昨天，今天，明天》

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>


<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# TOC

- 🎨 1. 什么是 ES Modules?
- 💻 2. 为什么要使用 ES Modules?
- 🔥 3. 兼容性
- 🧑‍💻 4. 如何使用
  - babel/typescript
  - web
  - node
  - deno
- 📤 5. 展望

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

# 1. 什么是 ES Modules?

|     |     |     |
| --- | --- | --- |
| <img src="/icons/js.png" class="w-8 h-7"> | JS v1.0 | 1995 |
| <img src="/icons/node.png" class="w-8 h-7">| Node.js(commonjs) | 2009 |
| <img src="/icons/requirejs.png" class="w-8 h-7"> | RequireJS | 2010 |
| <img src="/icons/typescript.png" class="w-8 h-7"> | TypeScript v0.8 | 2012 |
| <img src="/icons/js.png" class="w-8 h-7"> | ES6(aka ES2015) | 2015 |
| <img src="/icons/babel.svg" class="w-8 h-7"> | 6to5(babel) | 2015 |
| <img src="/icons/node.png" class="w-8 h-7">| Node.js v8.5.0/v12.22.0 (esm) | 2017~2021 |
| <img src="/icons/deno.jpeg" class="w-8 h-7"> | Deno | 2018 |

---

# 1.1 iife => commonjs => esm

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

# 2. 为什么要使用 ES Modules?

```html
<Tweet id="1349312503835054080" />
```
<Tweet id="1349312503835054080" scale="0.65" />

---

## 3.1 兼容性(浏览器)

<img src="/img/esm-webcompat.jpg">


---

## 3.2 兼容性(Node.js)

<img src="/img/esm-nodecompat.jpg">

---

## 4.1 使用 babel/typescript + webpack/rollup/parcel

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

## 4.2 使用原生esm(Web)


```bash
$ cd examples/vanilla && npm run dev
```
---

## 4.3 使用原生esm(Node.js)(1)

```bash
$ cd examples/node-esm1 && node index.js
```
---

## 4.3 使用原生esm(Node.js)(2)

```bash
$ cd examples/node-esm2 && node index.mjs
```
---

## 4.3 使用原生esm(Node.js)(3)

```bash
$ cd examples/node-esm1 && node mix-cjs.js
```
---

layout: center
class: text-center
---

# Learn More

[Documentations](https://sli.dev) · [GitHub](https://github.com/slidevjs/slidev) · [Showcases](https://sli.dev/showcases.html)
