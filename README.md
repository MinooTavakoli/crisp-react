# CrispChat Package For React

![crisp](https://github.com/MinooTavakoli/crisp-react/blob/main/public/crisp-logo.svg)

[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-size-image]][npm-url] [![NPM downloads][npm-downloads-image]][downloads-url] [![MIT License][license-image]][license-url]

#### The new online chat experience begins here!

Give your customer experience a human touch
The all-in-one multichannel messaging platform that connects companies & customers.

- [Installation](#installation)
- [Usage](#use)
- [Props](#props)
- [License](#license)
- [Author](#author)

### Installation

> Get `token` from [crisp.io](https://crisp.chat/en/)

```bash
npm i crisp-react
```

## USE Crisp Package

```js
import React from "react";
import Crisp from "crisp-react";

function App() {
  const token = "f2cb034e-xxxx-xxxx-xxxx-ad8bea4436f5";

  return (
    <div>
      <h1>This is a test</h1>
      <Crisp cripWebsiteId={token} />
    </div>
  );
}
```

## Props

| props         | defaultValue | description                                          |
| ------------- | ------------ | ---------------------------------------------------- |
| cripWebsiteId | null         | Get `token` from [crisp.io](https://crisp.io/signup) |

### License

MIT

### Author

> Minoo Tavakoli

[license-image]: http://img.shields.io/npm/l/crisp-react.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/crisp-react
[npm-version-image]: http://img.shields.io/npm/v/crisp-react.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/crisp-react.svg?style=flat
[npm-downloads-size-image]: https://img.shields.io/bundlephobia/minzip/crisp-react.svg?style=flat
[downloads-url]: https://npmcharts.com/compare/crisp-react?minimal=true
