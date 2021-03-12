import React from 'react'

import { Container } from './styles'

interface Props {
  image: string
  value: string
  selected: boolean
  onClick: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
}

const LangOption: React.FC<Props> = (props) => {
  return (
    <Container selected={props.selected} onClick={props.onClick}>
      <img src={props.image} alt={props.value} />
    </Container>
  )
}

export default LangOption
