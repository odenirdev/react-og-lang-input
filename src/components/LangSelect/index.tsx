import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

import { Container } from './styles'

import Option from '../LangOption'
import Selected from '../LangSelected'
import LangSelectGrid from '../LangSelectGrid'

import useLangSelect from './useLangSelect'

interface Props {
  value: string
  onSelect: (value: string) => void
  backgroundColor?: string
  toggleColor?: string
  langEnable?: string[]
  defaultSelect?: string
}

const LangSelect = ({
  value,
  onSelect,
  backgroundColor,
  toggleColor,
  langEnable = [],
  defaultSelect
}: Props) => {
  const { show, handleOnClick } = useLangSelect()

  function renderSelected() {
    switch (value) {
      case 'pt-BR':
        return (
          <Selected
            image='https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg'
            value='pt-BR'
          />
        )

      case 'es':
        return (
          <Selected
            image='https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg'
            value='es'
          />
        )

      case 'en':
        return (
          <Selected
            image='https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg'
            value='en'
          />
        )

      case 'fr':
        return (
          <Selected
            image='https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg'
            value='fr'
          />
        )

      default:
        return onSelect(defaultSelect || 'pt-BR')
    }
  }

  function isEnabled(lang: string) {
    return langEnable.length === 0 || langEnable.includes(lang)
  }

  return (
    <Container {...{ show, backgroundColor, toggleColor }}>
      <div className='react-og-lang-input-selected-grid'>
        {renderSelected()}
        <i className='react-og-lang-input-toggle-icon'>
          <FaAngleDown className='icon-arrow-down' onClick={handleOnClick} />
        </i>
      </div>
      <LangSelectGrid {...{ show, backgroundColor }}>
        {isEnabled('pt-BR') && (
          <Option
            image='https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg'
            value='pt-BR'
            selected={value === 'pt-BR'}
            onClick={() => {
              onSelect('pt-BR')
            }}
          />
        )}

        {isEnabled('es') && (
          <Option
            image='https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg'
            value='es'
            selected={value === 'es'}
            onClick={() => {
              onSelect('es')
            }}
          />
        )}

        {isEnabled('en') && (
          <Option
            image='https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg'
            value='en'
            selected={value === 'en'}
            onClick={() => {
              onSelect('en')
            }}
          />
        )}

        {isEnabled('fr') && (
          <Option
            image='https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg'
            value='fr'
            selected={value === 'fr'}
            onClick={() => {
              onSelect('fr')
            }}
          />
        )}
      </LangSelectGrid>
    </Container>
  )
}

export default LangSelect
