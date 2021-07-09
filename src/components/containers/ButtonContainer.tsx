import { css } from '@emotion/react'
import { OperatorButton } from 'components/button/OperatorButton'
import { ClearButton } from 'components/button/ClearButton'
import { NumberButton } from 'components/button/NumberButton'
import { Number0Button } from 'components/button/Number0Button'
//storeの利用
import { useDispatch } from 'react-redux'
import {
  inputNumber,
  activateDisimal,
  operate,
  equal,
  clear,
} from 'stores/calculator'

export const ButtonContainer: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div css={rowGrid}>
        <div>
          <div css={columnGrid}>
            <div css={cancelGrid}>
              <ClearButton onClick={() => dispatch(clear())}>C</ClearButton>
            </div>
            <div css={numberGrid}>
              <NumberButton
                number={7}
                onClick={() => dispatch(inputNumber(7))}
              />
              <NumberButton
                number={8}
                onClick={() => dispatch(inputNumber(8))}
              />
              <NumberButton
                number={9}
                onClick={() => dispatch(inputNumber(9))}
              />
              <NumberButton
                number={4}
                onClick={() => dispatch(inputNumber(4))}
              />
              <NumberButton
                number={5}
                onClick={() => dispatch(inputNumber(5))}
              />
              <NumberButton
                number={6}
                onClick={() => dispatch(inputNumber(6))}
              />
              <NumberButton
                number={1}
                onClick={() => dispatch(inputNumber(1))}
              />
              <NumberButton
                number={2}
                onClick={() => dispatch(inputNumber(2))}
              />
              <NumberButton
                number={3}
                onClick={() => dispatch(inputNumber(3))}
              />
              <div css={span2}>
                <Number0Button
                  number={0}
                  onClick={() => dispatch(inputNumber(0))}
                />
              </div>
              <NumberButton
                number={'.'}
                onClick={() => dispatch(activateDisimal())}
              />
            </div>
          </div>
        </div>
        <div css={operatorGrid}>
          <OperatorButton
            operatorType={'÷'}
            imgSrc={'/divide.svg'}
            onClick={() => dispatch(operate('÷'))}
          />
          <OperatorButton
            operatorType={'×'}
            imgSrc={'/multiply.svg'}
            onClick={() => dispatch(operate('×'))}
          />
          <OperatorButton
            operatorType={'-'}
            imgSrc={'/minus.svg'}
            onClick={() => dispatch(operate('-'))}
          />
          <OperatorButton
            operatorType={'+'}
            imgSrc={'/divide.svg'}
            onClick={() => dispatch(operate('+'))}
          />
          <OperatorButton
            operatorType={'='}
            imgSrc={'/equal.svg'}
            onClick={() => dispatch(equal())}
          />
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
