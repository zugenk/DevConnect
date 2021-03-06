import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import { addComment } from '../../actions/postAction'

class CommentForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()
    const { user } = this.props.auth
    const { postId } = this.props
    const postData = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    }
    console.log(postData)
    this.props.addComment(postId, postData)
    this.setState({ text: '' })
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  render () {
    const { errors } = this.state
    return (
      <div className='post-form mb-3'>
        <div className='card card-info'>
          <div className='card-header bg-info text-white'>
            Make a comment...
          </div>
          <div className='card-body'>
            <form onSubmit={this.onSubmit}>
              <TextAreaFieldGroup
                placeholder='Reply to a post '
                name='text'
                value={this.state.text}
                onChange={this.onChange}
                error={errors.text}
              />
              <button type='submit' className='btn btn-dark'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  post: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { addComment }
)(CommentForm)
