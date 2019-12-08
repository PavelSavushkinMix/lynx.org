[FIGMA](https://www.figma.com/file/6MXdhYkPCo7DVKlbrXI963/Laser)

[STAGE](https://lynxua.netlify.com/)

## Node version 10.13.0

## Gulp boilerplate
> All you need for static website coding. Includes live reload, SASS,  autoprefixer, EJS/PUG template engines, images reducing, JS/SASS linters, FTP deployment, JS bundling with browserify, ES2015+ ready, JS/CSS minification.*

* __npm install__
* __gulp__(gulp dev) - run dev environment
* __gulp build__ - build project, same as _gulp dev_ but without running dev server
* __gulp deploy__ - deploy project to ftp server
* __--prod__ - use this flag to minify css / js, reduce images size and other differences for production, ex. _gulp build --prod_, _gulp deploy --prod_
* __gulp sasslint__ - scsslint, [rules](.scss-lint.yml)
* __gulp eslint__ - eslint, [rules](.eslintrc). You can use __--fix__ flag to [automatically fix problems](https://eslint.org/docs/rules/).

[Config file](gulpfile.babel.js/config/index.js) - ftp credentials and paths to files.

### Proposed technologies / approaches

#### HTML
* [NUNJUCKS](https://mozilla.github.io/nunjucks/templating.html) template engine. Optional: [EJS](https://ejs.co/#docs) or [PUG](https://pugjs.org/api/getting-started.html).
* [BEM](https://en.bem.info/methodology/html/)

#### CSS
* Choose between __reset.css__ and __normalize.css__
* [SCSS](https://sass-lang.com/)
* [BEM](https://en.bem.info/methodology/css/)
* Properties order:
  * Layout: The position of the element in space. Eg.: position, top, z-index.
  * Box: The element itself. Eg.: display, overflow, box-sizing.
  * Visual: Design of the element. Eg.: color, border, background.
  * Type: Typesetting of the element. Eg.: font-family, text-transform.

Code Sample:
```
  .button {
    position: relative;
    display: inline-block;
    padding: 12px 24px;
    margin: 0 12px;
    font-size: 14px;
    line-height: 19px;
    text-transform: uppercase;
    color: tomato;
    background: #3f55aa;
    border-radius: 5px;
    border: 1px solid tomato;
    transition: background-color .3s ease-out;
    z-index: 2;
  }

/* Position */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* block model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;

  /* Typography */
  font: normal 13px/1.5 "Arial", sans-serif;
  font-style: normal;
  font-size: 13px;
  line-height: 1.5;
  font-family: "Arial", sans-serif;
  text-align: center;
  color: #333333;

  /* formalization */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  opacity: 1;

  /* animation */
  transition: color 1s;

  /* other */
  z-index: 100;
  will-change: auto;
```

#### JavaScript
* ES6
* [Browserify](http://browserify.org/) (CommonJS modules)

#### File structure
```
  /* Global code, heplers, utils, etc. */
  common/
    njk/
    scss/
    js/

  /* Reusable components */
  components/
    Component/
      Component.njk
      Component.scss
      Component.js

  /* Pages */
  pages/
    page/
      page.njk
      page.scss
      page.js
```

#### Linters
* [SCSS-Lint](https://github.com/brigade/scss-lint), NOTE: You need to install Ruby.
* [ESLint](https://github.com/eslint/eslint)
