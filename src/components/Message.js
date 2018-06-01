import React from 'react';

export default class Message extends React.Component {
	render() {
		const { message } = this.props
		return (
			<div className="well border border-primary" style={{ padding: '10px' }}>
				<b>{message.username}</b>
				<p>
					{message.message}
				</p>
			</div>
		);
	}
}
