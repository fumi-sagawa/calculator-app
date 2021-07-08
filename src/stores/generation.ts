import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './'

//型宣言
type Generation = {
  generation: string
}
//Stateの初期状態
const initialState: Generation = {
  generation: 'First',
}

//Sliceを生成,Reducer利用のためエクスポートする
export const generationSlice = createSlice({
  name: 'generation', //Sliceの名称
  initialState, //Stateの初期状態
  //Reducer
  //Stateに対して許可する更新処理を定義する場所
  reducers: {
    //ここに定義したキーがAction Creator関数の名前となり,自動生成される
    changeGeneration: (state, action) => {
      //第一引数は現在(更新前)のState
      //第二引数は渡されたaction
      //action.payloadプロパティに、Action Creatorに渡された引数が入っている
      //この関数は新しい状態を返却する
      state.generation = action.payload
    },
    //追加のaction
    // clearName: (state) => {
    //   return Object.assign({}, state, { generation: '' })
    // },
  },
})

// useSelectore用のkeyを作成
export const selectGeneration = (state: RootState): any =>
  state.generationReducer.generation
// Action Creatorをエクスポートする
export const { changeGeneration } = generationSlice.actions
