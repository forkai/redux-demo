import * as React from 'react'
import {Component} from 'react'
import {changInputValueActin, addItemActin, deleteItemActin} from '../store/actionCreator'
import store from '../store'
import TodoListUI from './TodoListUI'

export interface IState {
  inputValue: string
  list: string[]
}
//
class TodoList extends Component<{}, IState> {
  constructor(props: any) {
    super(props)
    //
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    // 订阅Redux的状态
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  changeInputValue = (e: any) => {
    const action = changInputValueActin(e.target.value)
    store.dispatch(action)
  }
  storeChange = () => {
    this.setState(store.getState())
  }
  addItem = () => {
    const action = addItemActin()
    store.dispatch(action)
  }
  deleteItem = (index: number) => {
    // console.log(index);
    const action = deleteItemActin(index)
    store.dispatch(action)
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        addItem={this.addItem}
        deleteItem={this.deleteItem}
      />
    )
  }
}

export default TodoList
