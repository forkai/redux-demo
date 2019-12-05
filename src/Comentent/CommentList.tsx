import * as React from 'react'
import {Component} from 'react'
export interface CommentListProps {
  test1: string
}

export interface CommentListState {
  test2: string
}

class CommentList extends Component<CommentListProps, CommentListState> {
  constructor(props: CommentListProps) {
    super(props)
    // this.state = {   };
  }
  render() {
    return <p>commentList</p>
  }
}

export default CommentList
