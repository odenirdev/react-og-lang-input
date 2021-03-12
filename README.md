# react-og-lang-input

> Language Input made by OG Developer

[![NPM](https://img.shields.io/npm/v/react-og-lang-input.svg)](https://www.npmjs.com/package/react-og-lang-input) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-og-lang-input
```

## Usage

```tsx
import React, { useState } from 'react'

import LangInput from 'react-og-lang-input'

const App = () => {
  const [selected, setSelected] = useState('pt-Br')

  function handleOnSelect(value: string) {
    setSelected(value)
  }

  return <LangInput value={selected} onSelect={handleOnSelect} />
}

export default App

```

## License

MIT © [odenirdev](https://github.com/odenirdev)
