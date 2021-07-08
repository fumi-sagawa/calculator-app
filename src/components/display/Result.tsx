import { css } from '@emotion/react'
import style from 'styles/'
//storeの利用
import { useSelector } from 'react-redux'
import { RootState } from 'stores/'

export const Result: React.VFC = () => {
  //値の取得
  const displayValue = useSelector(
    (state: RootState): any => state.calculateReducer.displayValue,
  )
  //受け取ってきて表示
  return <div css={input}>{displayValue}</div>
}

const input = css`
  font-size: 64px;
  color: ${style.colors.White};
  line-height: 1;
`
