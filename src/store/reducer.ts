import {CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM} from './actionType'
const defaultState = {
  inputValue: '',
  list: ['早上6点起床，锻炼身体', '中午吃饭休息一小时'],
}
export default (state = defaultState, action: any) => {
  let newState
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      newState = Object.assign({}, state)
      newState.inputValue = action.value
      console.log(newState, action)
      return newState
    case ADD_ITEM:
      newState = Object.assign({}, state)
      if (newState.inputValue !== '') {
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        console.log(newState, action)
      }
      return newState
    case DELETE_ITEM:
      newState = Object.assign({}, state)
      newState.list.splice(action.index, 1)
      console.log(newState, action)
      return newState
    default:
      return state
  }
}
