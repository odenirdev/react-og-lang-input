import styled, { keyframes } from 'styled-components'

interface Props {
  show: boolean
  backgroundColor?: string
}

const growDown = keyframes`
  0% {
    transform: scaleY(0)
  }
 
  100% {
    transform: scaleY(1)
  }
`

const growUp = keyframes`
  0% {
    transform: scaleY(1)
  }
 
  100% {
    transform: scaleY(0)
  }
`

export default styled.div.attrs({
  className: 'react-og-lang-input-select-container'
})`
  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: -1;

  padding: 0 0.1rem;
  padding-top: 1rem;

  margin-top: -0.9rem;

  background-color: ${(props) => props.backgroundColor};

  width: 100%;

  &:last-child {
    border-radius: 0 0 3px 3px;
  }

  animation: ${(props: Props) => (props.show ? growDown : growUp)} 400ms both;
  transform-origin: top center;
`
