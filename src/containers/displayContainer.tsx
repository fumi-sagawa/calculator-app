import { css } from '@emotion/react'
import style from 'styles/'
import { Result } from 'components/display/Result'
import { AllInput } from 'components/display/AllInput'

export const DisplayContainer: React.VFC = () => {
  return (
    <div css={container}>
      <AllInput />
      <Result />
    </div>
  )
}

const container = css`
  background-color: ${style.colors.DarkGray};
  margin-top: 40px;
  padding: 14px 38px 0 92px;
  display: grid;
  justify-items: end;
  /* align-content: end; */
`
