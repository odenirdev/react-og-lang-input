import styled, { keyframes } from 'styled-components'

interface Props {
  show: boolean
  backgroundColor?: string
  toggleColor?: string
}

const growDown = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(-180deg);
  }
`

const growUp = keyframes`
    from {
        transform: rotate(-180deg);
    } to {
        transform: rotate(0deg);
    }
`

export const Container = styled.div.attrs({
  className: 'react-og-lang-input'
})`
  position: relative;

  width: fit-content;
  height: fit-content;

  z-index: 1;

  border-radius: 3px 3px 0 0;

  img {
    width: 42px;
  }

  .react-og-lang-input-selected-grid {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.1rem;

    height: 32px;

    border-radius: 3px;

    background-color: ${(props) => props.backgroundColor};

    span {
      display: flex;
      align-items: center;
    }

    i {
      cursor: pointer;
      font-size: 12px;
      padding: 5px;

      color: ${(props) => props.toggleColor};

      animation: ${(props: Props) => (props.show ? growDown : growUp)} 400ms
        both;
    }
  }
`
