import { useState, useEffect } from 'react'

function useLangSelect(onSelect: (value: string) => void) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    return onSelect('pt-BR')
  }, [])

  function handleOnClick() {
    setShow(!show)
  }

  return {
    show,
    setShow,
    handleOnClick
  }
}

export default useLangSelect
