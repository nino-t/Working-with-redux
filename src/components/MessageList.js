import React from 'react';

import { connect } from 'react-redux';
import Message from './Message'

class MessageList extends React.Component {
	render() {
		const { messages } = this.props
		return (
			<div className="panel panel-default">
				<div className="panel-body">
					{
						messages.map((message, index) => (
							<Message key={index} message={message} />
						))
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		messages: state.messages
	}
}

const TelahConnect = connect(mapStateToProps)(MessageList)
export default TelahConnect