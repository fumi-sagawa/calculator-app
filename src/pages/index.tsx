import { NextPage } from 'next'
import { css } from '@emotion/react'
import { ButtonContainer } from 'components/containers/ButtonContainer'
import { DisplayContainer } from 'components/containers/DisplayContainer'
import style from 'styles/'

const Home: NextPage = () => {
  return (
    <div css={wrapper}>
      <DisplayContainer />
      <ButtonContainer />
    </div>
  )
}

export default Home

const wrapper = css`
  width: 448px;
  height: 720px;
  background-color: ${style.colors.Black};

  display: grid;
  row-gap: 16px;
`
