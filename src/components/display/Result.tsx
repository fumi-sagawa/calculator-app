import { css } from '@emotion/react'
import style from 'styles/'

export const Result: React.VFC = () => {
  //受け取ってきて表示
  return <div css={input}>123,456,789</div>
}

const input = css`
  font-size: 64px;
  color: ${style.colors.White};
  line-height: 1;
`