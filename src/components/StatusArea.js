import React from 'react'
import { connect } from 'react-redux'

import { addMessage } from '../actions/Message'

class StatusArea extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	username: '',
	  	message: ''
	  }

	  this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e){
		const target = e.target

		this.setState({
			[target.name]: target.value
		});
	}

	render() {
		const { username, message } = this.state
		const { addMessage } = this.props		

		return (
			<div>
			  <div className="form-group">
			    <label htmlFor="username">Username</label>
			    <input 
			    	type="text" 
			    	className="form-control" 
			    	name="username"
			    	placeholder="Enter username"
			    	value={username}
			    	onChange={this.handleChange} />
			  </div>
			  <div className="form-group">
			    <label htmlFor="message">Status</label>
			    <textarea name="message" className="form-control" defaultValue={message} onChange={this.handleChange}></textarea>
			  </div>
			  <button type="button" className="btn btn-primary" onClick={() => addMessage(this.state)}>Submit</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
	return {
		addMessage: message => {
			dispatch(addMessage(message))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusArea)