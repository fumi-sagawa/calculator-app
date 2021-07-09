import { css } from '@emotion/react'
import style from 'styles/'
//storeの利用
import { useSelector } from 'react-redux'
import { RootState } from 'stores/'

export const AllInput: React.VFC = () => {
  //値の取得
  const inputValueAll = useSelector(
    (state: RootState): any => state.calculateReducer.inputValueAll,
  )
  //受け取っってきて表示
  return <div css={result}>{inputValueAll}</div>
}

const result = css`
  min-height: 44px;
  font-size: 32px;
  color: ${style.colors.White};
  line-height: 1;
`
