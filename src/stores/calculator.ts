import { createSlice } from '@reduxjs/toolkit'

//型宣言
type Calculator = {
  inputValue: string
  dicimalPoint: boolean
  operator: '+' | '-' | '×' | '÷' | '=' | ''
  inputValueAll: string
  displayValue: string
  calculatable: boolean
  initializeOnInputNumber: boolean
}

//Stateの初期状態
const initialState: Calculator = {
  inputValue: '',
  dicimalPoint: false,
  operator: '',
  inputValueAll: '',
  displayValue: '0',
  calculatable: false,
  initializeOnInputNumber: false,
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
      if (state.initializeOnInputNumber === true) {
        //計算後は数値をインプットする際に計算結果を初期化
        state.inputValueAll = action.payload
        state.inputValue = action.payload
        state.displayValue = state.inputValue
        //初期化
        state.calculatable = true
        state.initializeOnInputNumber = false
        state.operator = ''
      } else {
        state.inputValueAll = state.inputValueAll + action.payload
        state.inputValue = state.inputValue + action.payload
        state.displayValue = state.inputValue
        //初期化
        state.calculatable = true
        state.operator = ''
      }
    },
    //小数点の切り替え
    activateDisimal: (state) => {
      //小数点が連続した際は再代入させない
      if (state.dicimalPoint === true) return

      if (state.inputValue === '') {
        //小数点だけが入力された場合自動で先頭に0をつける
        state.inputValue = '0.'
        state.inputValueAll = state.inputValueAll + '0.'
      } else {
        //計算直後は数値をインプットする際に計算結果を初期化
        if (state.initializeOnInputNumber === true) {
          state.inputValue = '0.'
          state.inputValueAll = '0.'
          //初期化
          state.calculatable = true
          state.initializeOnInputNumber = false
          state.operator = ''
        } else {
          state.inputValue = state.inputValue + '.'
          state.inputValueAll = state.inputValueAll + '.'
        }
      }
      state.displayValue = state.inputValue
      state.dicimalPoint = true
    },
    operate: (state, action) => {
      // 画面に数字がインプットされていない場合は返す
      if (state.inputValue === '') return

      //末尾が小数点の場合0をつける
      if (state.inputValueAll.slice(-1).match('\\.')) {
        state.inputValue = state.inputValue + '0'
        state.displayValue = state.inputValue
        state.inputValueAll = state.inputValueAll + '0'
      }

      state.inputValueAll = state.inputValueAll + action.payload
      state.operator = action.payload
      //初期化
      state.inputValue = ''
      state.dicimalPoint = false
      state.calculatable = false
      state.initializeOnInputNumber = false
    },
    equal: (state) => {
      //inputAllValueの末尾が数字,小数点でなければ計算不可能であるため返す
      if (!state.inputValueAll.slice(-1).match(/^([1-9\\.]\d*|0)$/)) return

      //末尾が小数点の場合0をつける
      if (state.inputValueAll.slice(-1).match('\\.')) {
        // state.inputValue = state.inputValue + '0'
        state.inputValueAll = state.inputValueAll + '0'
      }

      //演算子を計算可能な記号に置き換え
      const replaceOperator: string = state.inputValueAll
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
      state.initializeOnInputNumber = true
    },
    clear: (state) => {
      state.inputValue = ''
      state.dicimalPoint = false
      state.operator = ''
      state.inputValueAll = ''
      state.displayValue = '0'
      state.initializeOnInputNumber = false
    },
  },
})

// Action Creatorをエクスポートする
export const { inputNumber, activateDisimal, operate, equal, clear } =
  calculateSlice.actions
