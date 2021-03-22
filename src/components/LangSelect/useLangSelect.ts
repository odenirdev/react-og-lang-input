import { useState } from 'react'

function useLangSelect() {
  const [show, setShow] = useState(false)

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
