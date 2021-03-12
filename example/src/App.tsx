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
