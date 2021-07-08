import { css } from '@emotion/react'
import style from 'styles/'

type Props = {
  children: React.ReactNode
  onClick: () => void
}

export const ClearButton: React.VFC<Props> = ({ children, onClick }) => {
  return (
    <button css={button} onClick={onClick}>
      {children}
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
  color: ${style.colors.White};
  //デザイン
  border-radius: 50%;
  background-color: ${style.colors.LightGray};
  &:hover {
    animation-name: buttonAnimation;
    animation-duration: 0.4s;
  }
  @keyframes hoge {
    50% {
      background-color: ${style.colors.ClearButtonActive};
    }
  }
`
