import { createSlice } from '@reduxjs/toolkit'

//型宣言
type Calculator = {
  inputValue: string
  dicimalPoint: boolean
  operator: '+' | '-' | '×' | '÷' | '=' | ''
  inputValueAll: string
  displayValue: string
  calculated: boolean
}

//Stateの初期状態
const initialState: Calculator = {
  inputValue: '',
  dicimalPoint: false,
  operator: '',
  inputValueAll: '',
  displayValue: '0',
  calculated: false,
}

//Sliceを生成,Reducer利用のためエクスポートする
export const calculateSlice = createSlice({
  name: 'calculate', //Sliceの名称
  initialState, //Stateの初期状態
  //Reducer
  //Stateに対して許可する更新処理を定義する場所
  reducers: {
    //ここに定義したキーがAction Creator関数の名前となり,自動生成される
    inputNumber: (state, action) => {
      //第一引数は現在(更新前)のState
      //第二引数は渡されたaction
      //action.payloadプロパティに、Action Creatorに渡された引数が入っている
      //この関数は新しい状態を返却する
      state.inputValueAll = state.inputValueAll + action.payload
      state.inputValue = state.inputValue + action.payload
      state.displayValue = state.inputValue
    },
    //小数点の切り替え
    activateDisimal: (state) => {
      if (state.dicimalPoint === false) {
        state.inputValueAll = state.inputValueAll + '.'
        state.inputValue = state.inputValue + '.'
        state.displayValue = state.inputValue
        state.dicimalPoint = true
      } else {
        //小数点が連続した際は再代入させない
        return
      }
    },
    calculate: (state, action) => {
      state.inputValueAll = state.inputValueAll + action.payload
      state.operator = action.payload
      //入力値と小数点を初期化
      state.inputValue = ''
      state.dicimalPoint = false
      //もしも掛け算か割り算ならdisplayvalue変えちゃおうか
    },
    equal: (state) => {
      const replaceOperator = state.inputValueAll
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
      //計算を実行
      const toResult: number = Function('return (' + replaceOperator + ');')()
      //３桁表示に
      state.displayValue = toResult.toLocaleString()
      state.operator = '='
      //入力値と小数点を初期化
      state.inputValue = '0'
      state.dicimalPoint = false
    },
    clear: (state) => {
      state.inputValue = ''
      state.dicimalPoint = false
      state.operator = ''
      state.inputValueAll = ''
      state.displayValue = '0'
      state.calculated = false
    },
  },
})

// Action Creatorをエクスポートする
export const { inputNumber, activateDisimal, calculate, equal, clear } =
  calculateSlice.actions
