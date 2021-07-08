import { useSelector } from 'react-redux'
import { selectGeneration, changeGeneration } from 'stores/generation'
import { css } from '@emotion/react'
import style from 'styles/'

type Props = {
  operatorType: '+' | '-' | '×' | '÷' | '='
  onClick: () => void
}

export const OperatorButton: React.VFC<Props> = ({ operatorType, onClick }) => {
  // const operator = useSelector(selectOperator)
  const operator = '+'

  return (
    <button
      css={operator === operatorType ? buttonSelected : buttonNotSelected}
      onClick={onClick}
    >
      {operatorType}
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
