# knopf.css

Open source button system leveraging CSS custom properties, designed for rapid prototyping and production–ready applications.

## Installation

The easiest way to “install” **knopf.css** on your project is to include the stylesheet on your website.

```html
<link rel="stylesheet" href="https://unpkg.com/knopf.min.css">
```

You can also install it via your favorite package manager:

### Install with npm
```
npm install knopf.css
```

### Install with yarn
```
yarn add knopf.css
```

You will then need to import it wherever you are currently importing your styles.
```node
import 'knopf.css'
```

## Usage

Just add the `knopf` class name to any anchor, button, or label, to start using the built-in component styles and modifiers.

```
<a href="#" class="knopf pale outline solid large wide pill">
  Button
</a>
```

For the list of available features, check out [knopf.dev](https://knopf.dev/#Features); or use the [playground](https://knopf.dev/#Playground) to see them in action.

The true power of the library lies in its extensibility. Ideally you would modify the default values (like border-radius or the initial hsl color) to match your product’s branding. You are also encouraged to build your own modifiers to achieve whatever styles might be missing.

It is worth noting that **knopf.css** is completely framework agnostic and should work whether you are using jQuery, React, Vue, Bootstrap, Tailwind or any other tool.

## Contributing

Please read the [contribution guidelines](CONTRIBUTING.md) in order to make the contribution process easy and effective for everyone involved.
