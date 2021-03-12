import React from 'react'

import { Container } from './styles'

interface Props {
  image: string
  value: string
}

const LangSelected = (props: Props) => {
  return (
    <Container>
      <img src={props.image} alt={props.value} />
    </Container>
  )
}

export default LangSelected
