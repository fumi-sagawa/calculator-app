import { css } from '@emotion/react'
import style from 'styles/'

export const AllInput: React.VFC = () => {
  //受け取っってきて表示
  return <div css={result}>123+456×789÷123</div>
}

const result = css`
  font-size: 32px;
  color: ${style.colors.White};
  line-height: 1;
`
