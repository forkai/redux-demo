import * as React from 'react'
import { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './index.css'
export interface CommentAppProps {
  test1?: string
}

export interface CommentAppState {
  comments: []
}

class CommentApp extends Component<CommentAppProps, CommentAppState> {
  constructor(props: CommentAppProps) {
    super(props)
    this.state = { comments: [] }
  }

  handleSubmitComment = (comment) => {
    // console.log(comment)
    const commentsOld = this.state.comments as any
    commentsOld.push(comment)
    this.setState({
      comments: commentsOld
    })
  }
  render() {
    return (
      <div className='wrapper'>
        <CommentInput handleSubmitComment={this.handleSubmitComment} />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentApp
