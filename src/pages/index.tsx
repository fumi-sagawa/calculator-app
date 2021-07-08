import { NextPage } from 'next'
import { css } from '@emotion/react'
import { useSelector, useDispatch } from 'react-redux'
import { inputNumber } from 'stores/calculator'
import { RootState } from 'stores/'
import { ButtonContainer } from 'containers/ButtonContainer'
import { DisplayContainer } from 'containers/displayContainer'
import style from 'styles/'

const Home: NextPage = () => {
  const result = useSelector(
    (state: RootState): any => state.calculateReducer.inputValue,
  )
  const dispatch = useDispatch()

  return (
    <div css={wrapper}>
      <DisplayContainer />
      <ButtonContainer />
      <div css={test}>{result}</div>
      <button css={test} onClick={() => dispatch(inputNumber(100))}>
        100
      </button>
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

const test = css`
  color: white;
`
