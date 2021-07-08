import { NextPage } from 'next'
import { css } from '@emotion/react'
import { useSelector, useDispatch } from 'react-redux'
import { selectGeneration, changeGeneration } from 'stores/generation'
// 追加

const Home: NextPage = () => {
  const generation = useSelector(selectGeneration)
  const dispatch = useDispatch()

  return (
    <div css={test}>
      <div>Generation is {generation}</div>
      <div>
        <button
          type="button"
          onClick={() => {
            dispatch(changeGeneration('First'))
          }}
        >
          First Generation
        </button>
        <button
          type="button"
          onClick={() => dispatch(changeGeneration('Second'))}
        >
          Second Generation
        </button>
      </div>
    </div>
  )
}

export default Home

const test = css`
  height: 100vh;
  display: grid;
  justify-items: center;
  align-content: center;
  font-size: 30px;
  font-weight: 600;
`
