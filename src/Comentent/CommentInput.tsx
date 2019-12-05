import * as React from 'react'
import {Component} from 'react'
export interface CommentInputProps {
  test1: string
}

export interface CommentInputState {
  test2: string
}

class CommentInput extends Component<CommentInputProps, CommentInputState> {
  constructor(props: CommentInputProps) {
    super(props)
    // this.state = {   };
  }
  render() {
    return <p>input</p>
  }
}

export default CommentInput
