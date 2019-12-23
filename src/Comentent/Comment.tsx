import * as React from 'react'
import { Component } from 'react'

export interface CommentProps {
  comment: { username: string; content: string }
}

export interface CommentState {
  test2?: string
}

class Comment extends Component<CommentProps, CommentState> {
  constructor(props: CommentProps) {
    super(props)
    // this.state = { :  };
  }
  render() {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
        </div>
        <p>{this.props.comment.content}</p>
      </div>
    )
  }
}

export default Comment
