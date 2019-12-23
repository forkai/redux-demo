import * as React from 'react'
import { Component } from 'react'
export interface CommentInputProps {
  handleSubmitComment: ({ username, content }) => void
}
export interface CommentInputState {
  username: string
  content: string
}

class CommentInput extends Component<CommentInputProps, CommentInputState> {
  constructor(props: CommentInputProps) {
    super(props)
    this.state = {
      username: '',
      content: ''
    }
  }

  handleUsernameChange = (event: any) => {
    this.setState({
      username: event.target.value
    })
  }
  handleContentChange = (event: any) => {
    this.setState({
      content: event.target.value
    })
  }
  // 将用户名和评论内容传递给父组件
  handleSubmit = () => {
    const { username, content } = this.state
    this.props.handleSubmitComment({ username, content })
    this.setState({ content: '' })
  }
  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input value={this.state.username} onChange={this.handleUsernameChange} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea value={this.state.content} onChange={this.handleContentChange} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit}>发布</button>
        </div>
      </div>
    )
  }
}

export default CommentInput
