import { css } from '@emotion/react'
import style from 'styles/'
//storeの利用
import { useSelector } from 'react-redux'
import { RootState } from 'stores/'

type Props = {
  operatorType: '+' | '-' | '×' | '÷' | '=' | ''
  onClick: () => void
  imgSrc: string
}

export const OperatorButton: React.VFC<Props> = ({
  operatorType,
  onClick,
  imgSrc,
}) => {
  //値の取得
  const operator = useSelector(
    (state: RootState): any => state.calculateReducer.operator,
  )

  return (
    <button
      css={operator === operatorType ? buttonSelected : buttonNotSelected}
      onClick={onClick}
    >
      <img src={imgSrc} alt={operatorType} />
    </button>
  )
}

const button = css`
  //中央よせ。Flexでも可
  display: grid;
  align-items: center;
  justify-items: center;
  //フォント
  font-size: 40px;
  font-weight: 400;
  //デザイン
  border-radius: 50%;
`
//storeのoperatorと一致していない場合のスタイル
const buttonNotSelected = css`
  ${button}
  color: ${style.colors.White};
  background-color: ${style.colors.Orange};
`
//storeのoperatorと一致している場合のスタイル
const buttonSelected = css`
  ${button}
  color: ${style.colors.Orange};
  background-color: ${style.colors.White};
`
