import { NextPage } from 'next'
import { css } from '@emotion/react'
import { useSelector, useDispatch } from 'react-redux'
import { selectGeneration, changeGeneration } from 'stores/generation'
import { ButtonContainer } from 'containers/ButtonContainer'
import { DisplayContainer } from 'containers/displayContainer'
import style from 'styles/'

const Home: NextPage = () => {
  const generation = useSelector(selectGeneration)
  const dispatch = useDispatch()

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

//見本
// const Home: NextPage = () => {
//   const generation = useSelector(selectGeneration)
//   const dispatch = useDispatch()

//   return (
//     <div css={test}>
//       <div>Generation is {generation}</div>
//       <div>
//         <button
//           type="button"
//           onClick={() => {
//             dispatch(changeGeneration('First'))
//           }}
//         >
//           First Generation
//         </button>
//         <button
//           type="button"
//           onClick={() => dispatch(changeGeneration('Second'))}
//         >
//           Second Generation
//         </button>
//       </div>
//     </div>
//   )
// }
