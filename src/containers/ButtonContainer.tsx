import { css } from '@emotion/react'
import { OperatorButton } from 'components/button/OperatorButton'
import { ClearButton } from 'components/button/ClearButton'
import { NumberButton } from 'components/button/NumberButton'
import { Number0Button } from 'components/button/Number0Button'

export const ButtonContainer: React.FC = () => {
  const onClick = () => {
    alert('test!')
  }
  return (
    <>
      <div css={rowGrid}>
        <div>
          <div css={columnGrid}>
            <div css={cancelGrid}>
              <ClearButton onClick={onClick}>C</ClearButton>
            </div>
            <div css={numberGrid}>
              <NumberButton number={7} onClick={onClick} />
              <NumberButton number={8} onClick={onClick} />
              <NumberButton number={9} onClick={onClick} />
              <NumberButton number={4} onClick={onClick} />
              <NumberButton number={5} onClick={onClick} />
              <NumberButton number={6} onClick={onClick} />
              <NumberButton number={1} onClick={onClick} />
              <NumberButton number={2} onClick={onClick} />
              <NumberButton number={3} onClick={onClick} />
              <div css={span2}>
                <Number0Button number={0} onClick={onClick} />
              </div>
              <NumberButton number={'.'} onClick={onClick} />
            </div>
          </div>
        </div>
        <div css={operatorGrid}>
          <OperatorButton operatorType={'÷'} onClick={onClick} />
          <OperatorButton operatorType={'×'} onClick={onClick} />
          <OperatorButton operatorType={'-'} onClick={onClick} />
          <OperatorButton operatorType={'+'} onClick={onClick} />
          <OperatorButton operatorType={'='} onClick={onClick} />
        </div>
      </div>
    </>
  )
}

const rowGrid = css`
  display: grid;
  grid-auto-flow: column;
  column-gap: 16px;
  justify-content: center;
`
const columnGrid = css`
  display: grid;
  row-gap: 16px;
`
const operatorGrid = css`
  display: grid;
  grid-template-columns: 80px;
  grid-template-rows: repeat(5, 80px);
  row-gap: 16px;
`
const cancelGrid = css`
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: 80px;
  column-gap: 16px;
`
const numberGrid = css`
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: repeat(4, 80px);
  gap: 16px;
  .helper {
    grid-column: span 2;
  }
`
const span2 = css`
  grid-column: span 2;
`
