import * as S from './styles'

const Main = ({
  title = 'Nephxlin',
  description = 'Typescript, NextJs, ReactJs & styled-components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Imagem de apresentação do template" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="capa do boilerplate"
    />
  </S.Wrapper>
)

export default Main
