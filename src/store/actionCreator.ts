import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionType'

export const changInputValueActin = (value: string) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const addItemActin = () => ({
  type: ADD_ITEM
})
export const deleteItemActin = (index: number) => ({
  type: DELETE_ITEM,
  index
})
