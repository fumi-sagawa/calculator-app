import { css } from '@emotion/react'
import style from 'styles/'

type Props = {
  number: number | string
  onClick: () => void
}

export const NumberButton: React.VFC<Props> = ({ number, onClick }) => {
  return (
    <div css={button}>
      <button onClick={onClick}>{number}</button>
    </div>
  )
}

const button = css`
  //アニメーション付与のため入れ子構造,width,height設定
  button {
    width: 100%;
    height: 100%;
    //中央よせ。Flexでも可
    display: grid;
    align-items: center;
    justify-items: center;
    //フォント
    font-size: 40px;
    font-weight: 400;
    color: ${style.colors.White};
    //デザイン
    border-radius: 40px;
    background-color: ${style.colors.DarkGray};
  }
  //アニメーション用css
  button:hover {
    animation-name: buttonAnimation;
    animation-duration: 0.4s;
  }
  @keyframes buttonAnimation {
    50% {
      background-color: ${style.colors.NumButtonActive};
    }
  }
`
