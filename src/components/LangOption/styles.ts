import styled, { css } from 'styled-components'

interface Props {
  selected: boolean
}

const selected = css`
  display: none;
`

export const Container = styled.span.attrs({
  className: 'react-og-lang-input-option'
})`
  cursor: pointer;

  ${(props: Props) => props.selected && selected};
`
