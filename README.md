# knopf.css

Modern, modular, extensible button system designed for both rapid prototyping and production-ready applications.

Made with ❤️ by the folks at [team.video](https://team.video/)

## Installation

Just [download](http://knopf.dev/knopf.css.zip) and include the minified stylesheet on your website.</p>

```html
<link rel="stylesheet" href="/knopf.min.css">
```

You could also link to a CDN hosted file.

```html
<link rel="stylesheet" href="https://unpkg.com/knopf.css/knopf.min.css">
```

***

Otherwise, you can use your favorite package manager to install it as a dependency.

### Install with npm
```
npm install knopf.css
```

### Install with yarn
```
yarn add knopf.css
```

And then import it wherever you are importing your styles.
```node
import 'knopf.css'
```

## Usage

By including **knopf** you get a [bunch of goodies](https://codepen.io/HiroAgustin/full/mdVRdVg) out of the box; however, you should probably customize the styles to meet your design needs, and there are multiple ways of doing just that.

### Override default values

All of the base values can be changed by overriding the custom properties at root:

```css
:root {
  --knopf-hue: 164;
  --knopf-saturation: 88%;
  --knopf-luminosity: 28%;
}
```

```html
<button class="knopf">
  Button
</button>
```

### Extend via modifier

You can also create your own class that sets new values for a particular instance:

```css
.negative {
  --knopf-hue: 356;
  --knopf-saturation: 57%;
  --knopf-luminosity: 51%;
}
```

```html
<button class="knopf negative">
  Button
</button>
```

### Leverage the cascade

As with any CSS library, you can override the base class to make it your own. This aproach still lets you take advantage of the existing properties, variables and modifiers.

```css
.knopf.knopf {
  --knopf-raised-height: 6px;
  border-block-end-color: var(--knopf-hover-background-color);
  border-block-end-width: var(--knopf-raised-height);
  margin-block-start: calc(var(--knopf-raised-height) * -1);
}

.knopf.knopf:hover {
  --knopf-raised-height: 2px;
  border-block-end-color: var(--knopf-active-background-color);
}
```

```html
<button class="knopf large wide pill">
  Button
</button>
```

***

The same logic is applicable to all of the built-in modifiers, try out the [playground](https://knopf.dev/#Playground) to check them out.

I would also suggest taking a look at the [source code](https://github.com/team-video/knopf.css/blob/main/knopf.css) for the full list of customizable custom properties.

You can see the full test suite on [this pen](https://codepen.io/HiroAgustin/full/mdVRdVg).

## Contributing

Please read the [contribution guidelines](CONTRIBUTING.md) in order to make the contribution process easy and effective for everyone involved.
