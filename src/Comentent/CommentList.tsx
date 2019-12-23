import * as React from 'react'
import { Component } from 'react'
import Comment from './Comment'
export interface CommentListProps {
  test1?: string
  comments?: []
}

export interface CommentListState {
  test2?: string
}

class CommentList extends Component<CommentListProps, CommentListState> {
  constructor(props: CommentListProps) {
    super(props)
    // this.state = {   };
  }
  render() {
    const { comments } = this.props
    return <div>{comments ? this.props.comments.map((comment, i) => <Comment comment={comment} key={i} />) : null}</div>
  }
}

export default CommentList
